//Creer un canvas 
// Insérer le canvas au dessus des tableaux de données

// Canvas Crimes
let c = document.createElement("canvas")
document.body.appendChild(c)

//Grap for crimes
let crimes = new Chart(c, {
    // Types of chart we use
    type: 'line',

    // The data of the API
    data: {
        labels: [],
        datasets: [{
            label: 'Belgium',
            backgroundColor: 'transparent',
            hoverBorderColor: 'rgb(200,80,162)',
            data: [],

        }, {
            label: 'Bulgaria',
            borderColor: 'rgb(12, 99, 132)',
            backgroundColor: 'transparent',
            hoverBorderColor: 'rgb(12,80,162)',
            data: [146.9, 143.9, 500, 550, 900, 100, 126.7]
        }, {
            label: 'The Netherlands',
            borderColor: 'rgb(50, 140, 30)',
            backgroundColor: 'transparent',
            hoverBorderColor: 'rgb(0,100,20)',
            data: [1401.9, 1369.3, 1319.5, 1348.3, 1277.8, 1194.0, 1139.7]
        }]
    },
    options: {
    }
})


// Premier Tableau 
let table1 = document.getElementById("table1")
table1.insertAdjacentElement("beforebegin", c)
let t1Json = []
let t1Years = []
let YRows = table1.rows
for (let i = 2; i < YRows[1].cells.length; i++) {
    let years = YRows[1].cells[i].innerHTML
    // t1Years.push(years)  Peut-être à supprimer
    crimes.data.labels.push(years)
}

for (let i = 0; i < YRows.length; i++) {
    if (i >= 2) {
        let country = {
            label: '',
            borderColor: 'rgb(50, 140, 30)',
            backgroundColor: 'transparent',
            hoverBorderColor: 'rgb(0,100,20)',
            data: []
        }
        country.label = YRows[i].cells[1].innerHTML
        crimes.data.datasets.push(country)
        for (let j = 1; j < YRows[i].cells.length; j++) {
            country.data.push(YRows[i].cells[i].innerHTML)
        }
    }
}
