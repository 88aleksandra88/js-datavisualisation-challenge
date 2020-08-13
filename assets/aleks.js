let c2 = document.createElement("canvas")
document.body.appendChild(c2)

let canvAPI = new Chart(c2, {
    // Types of chart we use
    type: 'line',

    // The data of the API
    data: {
        labels: ["API"],
        datasets: [],
    },
    options: {
    }
})

// API 
// 0    1   - > label = Année 
//0 1  0 1  -> 0 - > x 1 ->

let h1 = document.getElementById("bodyContent")
h1.insertAdjacentElement("afterbegin", c2)


fetch('https://canvasjs.com/services/data/datapoints.php')
    .then(res => res.json())
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            // canvAPI.data.labels.push(i)
            let datApi = {
                label: 'test',
                borderColor: 'grey',
                data: []
            }
            for (let j = 0; j < data[i].length; j++) {
                datApi.label = i
                datApi.data.push(data[i][j])
            }
            canvAPI.data.datasets.push(datApi)
            canvAPI.update()
        }
    })
    .catch(err => {
        console.log('error :' + err)
    })

console.log(canvAPI.data.datasets)

//
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