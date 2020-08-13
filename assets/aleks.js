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
        canvAPI.update()
    })
    .catch(err => {
        console.log('error :' + err)
    })



// FETCH();

// function FETCH() {
//     (() => {
//         const findFETCH = async function () {
//             let recuperer = await fetch("https://canvasjs.com/services/data/datapoints.php");
//             if (recuperer.ok) {
//                 let data = await recuperer.json().then(data => {
//                     
//                     }

//                 });
//             } else {
//                 console.log("error: + recuperer.status");
//             }

//         };
//         findFETCH();
//     })();
// }
// setTimeout(function () { updateChart() }, 1000);

