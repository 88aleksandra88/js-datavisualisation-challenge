//Creer un canvas 
// Insérer le canvas au dessus des tableaux de données
// Premier Tableau 
let table1 = document.getElementById("table1")
let table2 = document.getElementById("table2")

// Canvas
let c = document.createElement("canvas")
let ctx = c.getContext('2d')
c.width = 400;
c.height = 200;

document.body.appendChild(c)
table1.insertAdjacentElement("beforebegin", c)


let crimes = new Chart(c, {
    // Types of chart we use
    type: 'line',

    // The data of the API
    data: {
        labels: ['2002', '2003', '2004', '2005', '2006', '2007', '2008'],
        datasets: [{
            label: 'Belgium',
            borderColor: 'rgb(255, 99, 132)',
            hoverBorderColor: 'rgb(200,80,162)',
            data: [1012.8, 1007.8, 1013.7, 999.4, 1022.8, 1034.4, 1043.6],
            label: 'Bulgaria',
            borderColor: 'rgb(12, 99, 132)',
            hoverBorderColor: 'rgb(12,80,162)',
            data: [146.9, 143.9, 142.1, 137.8, 136.4, 134.7, 126.7]
        }]
    },
    options: {}
})