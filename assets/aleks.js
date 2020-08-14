let c2 = document.createElement("canvas")
document.body.appendChild(c2)

let dataPoints = []
let label = []

// // API 
// 0    1   - > label = Année 
//0 1  0 1  -> 0 - > x 1 ->

let h1 = document.getElementById("bodyContent")
h1.insertAdjacentElement("afterbegin", c2)

fetch('https://canvasjs.com/services/data/datapoints.php?xstart=0&ystart=10&length=10&type=json')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            dataPoints.push({ x: data[i][0], y: data[i][1] })
            label.push(i)
        }
        canvAPI = new Chart(c2, {
            // Types of chart we use
            type: 'line',

            data: {
                labels: label,
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
        canvAPI.render()
    })
    .catch(err => {
        console.log('error :' + err)
    })

let updateChart = () => {
    fetch('https://canvasjs.com/services/data/datapoints.php?xstart=' + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                dataPoints.push({ x: data[i][0], y: data[i][1] })
                label.push((label.length - 1) + 1)
            }
        })
        .catch(err => {
            console.log('error :' + err)
        })
    canvAPI.update()

    setTimeout(function () { updateChart() }, 1000);


}



