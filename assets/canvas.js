//Creer un canvas 
// Insérer le canvas au dessus des tableaux de données

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

