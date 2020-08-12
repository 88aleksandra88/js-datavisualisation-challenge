//Creer un canvas 
// Insérer le canvas au dessus des tableaux de données
// Premier Tableau 
let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")

// Canvas Crimes
let c = document.createElement("canvas")
let ctx = c.getContext('2d')
c.width = 400;
c.height = 200;

document.body.appendChild(c)
table1.insertAdjacentElement("beforebegin", c)
let tr = table1.getElementsByTagName('tr')
table2.insertAdjacentElement("beforebegin", c)


let rowLength = table1.rows.length
// table2.insertAdjacentElement("beforebegin", c)

// for (let i = 0; i < rowLength; i++) {
//     let cell = table1.rows.item(i).cells;
//     let cellLength = cell.length;

//     for (let j = 0; j < cellLength; j++) {
//         console.log(cell.item(j).innerHTML)
//     }
// }


//Grap for crimes
let crimes = new Chart(c, {
    // Types of chart we use
    type: 'line',

    // The data of the API
    data: {
        labels: [''],
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
