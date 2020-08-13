let c2 = document.createElement("canvas")
document.body.appendChild(c2)

let dataPoints = []
let label = []

// // API 
// 0    1   - > label = Année 
//0 1  0 1  -> 0 - > x 1 ->

let h1 = document.getElementById("bodyContent")
h1.insertAdjacentElement("afterbegin", c2)

fetch('https://canvasjs.com/services/data/datapoints.php')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            dataPoints.push({ x: data[i][0], y: data[i][1] })
            label.push(data[i])
        }
        let canvAPI = new Chart(c2, {
            // Types of chart we use
            type: 'line',

            data: {
                labels: dataPoints,
                datasets: [{
                    label: 'Dynamic Graph',
                    borderColor: 'rgb(255, 99, 132)',
                    data: dataPoints
                }]
            },
            options: {
            }
        })
        updateChart()
    })
    .catch(err => {
        console.log('error :' + err)
    })

let updateChart = () => {
    fetch('https://canvasjs.com/services/data/datapoints.php') + (dataPoints.length + 1) + (dataPoints[dataPoints.length + 1].y)
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                dataPoints.push({ x: data[i][0], y: data[i][1] })
                label.push(data[i])
            }
            let canvAPI = new Chart(c2, {
                // Types of chart we use
                type: 'line',

                data: {
                    labels: dataPoints,
                    datasets: [{
                        label: 'Dynamic Graph',
                        borderColor: 'rgb(255, 99, 132)',
                        data: dataPoints
                    }]
                },
                options: {
                }
            })
        })

        .catch(err => {
            console.log('error :' + err)
        })
    chart.render();
    setTimeout(function () { updateChart() }, 1000);

}
