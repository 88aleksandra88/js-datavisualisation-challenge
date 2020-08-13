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

///////////////////////////chart 2

let d = document.createElement("canvas")
document.body.appendChild(d)

//Grap for crimes
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
let t2Json = []
let t2Years = []
let Y2Rows = table2.rows
for (let i = 2; i < Y2Rows[1].cells.length; i++) {
    let years = Y2Rows[1].cells[i].innerHTML
    // t1Years.push(years)  Peut-être à supprimer
    population.data.labels.push(years)
    ///////pas d'erreur jusqu'au la mais 312 en années? whyyyy 
    for (let i = 0; i < Y2Rows.length; i++) {
        let color2 = '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0')
        if (i >= 2) {
            let country2 = {
                label: '',
                borderColor: 'rgb(255, 99, 132)',
                backgroundColor: 'rgb(255, 99, 132)',
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
        ///////////////////////yeyyyyyyyyyyy!!!!!!!! ca marcheuhhh mais revoir les couleurs tt ca car c'est moche
    }
    


}