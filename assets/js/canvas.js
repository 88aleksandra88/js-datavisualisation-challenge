// Canvas Crimes
let c = document.createElement("canvas")
document.body.appendChild(c)

//Grap for crimes
let crimes = new Chart(c, {
    // Types of chart we use
    type: 'bar',

    // The data of the API
    data: {
        labels: [],
        datasets: []
    },
    options: {
    }
})

// Premier Tableau pour les crimes
let table1 = document.getElementById("table1")
table1.insertAdjacentElement("beforebegin", c)
let t1Years = []
let YRows = table1.rows
// Prend les
for (let i = 2; i < YRows[1].cells.length; i++) {
    let years = YRows[1].cells[i].innerHTML
    crimes.data.labels.push(years)
}

for (let i = 0; i < YRows.length; i++) {
    // Couleur Random pour le graph
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    if (i >= 2) {
        let country = {
            label: '',
            borderColor: color,
            backgroundColor: color,
            //Bar variante 
            barPercentage: 10,
            barThickness: 2,
            maxBarThickness: 15,
            minBarLength: 40,
            data: []
        }
        country.label = YRows[i].cells[1].innerHTML
        for (let j = 2; j < YRows[i].cells.length; j++) {
            country.data.push(parseInt(YRows[i].cells[j].innerHTML))
        }

        crimes.data.datasets.push(country)
    }
}

///////////////////////////chart 2

let d = document.createElement("canvas")
document.body.appendChild(d)

//Grap for population
let population = new Chart(d, {
    // Types of chart we use
    type: 'bar',

    // The data of the API
    data: {
        labels: [],
        datasets: []
    },
    options: {
    }
})
let table2 = document.getElementById("table2")
table2.insertAdjacentElement("beforebegin", d)
let t2Years = []
let Y2Rows = table2.rows
for (let i = 2; i < Y2Rows[1].cells.length; i++) {
    let years = Y2Rows[0].cells[i].innerHTML
    // t2Years.push(years)  Peut-être à supprimer
    population.data.labels.push(years)
}

for (let i = 0; i < Y2Rows.length; i++) {
    // Couleur Random pour le graph
    let color = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
    if (i >= 1) {
        let country2 = {
            label: '',
            borderColor: color,
            backgroundColor: color,
            //Bar variante 
            barPercentage: 10,
            barThickness: 2,
            maxBarThickness: 15,
            minBarLength: 40,
            data: []
        }
        country2.label = Y2Rows[i].cells[1].innerHTML
        for (let j = 2; j < Y2Rows[i].cells.length; j++) {
            country2.data.push(parseInt(Y2Rows[i].cells[j].innerHTML))
        }

        population.data.datasets.push(country2)
    }
}


///////////////////////////////////////

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

            data: {   //bouge pas
                labels: label,
                datasets: [{
                    label: 'Dynamic Graph',
                    borderColor: "#32A7FA",
                    backgroundColor: 'transparent',
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







