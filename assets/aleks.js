//recup des donnés
let h1 = document.getElementById("firstHeading")
FETCH();

function FETCH() {
    (() => {
        const findFETCH = async function () {
            let recuperer = await fetch("https://canvasjs.com/services/data/datapoints.php");
            if (recuperer.ok) {
                let data = await recuperer.json().then(data => {
                    // let tableau = data.tableau;
                    console.log(data)
                    // document.getElementById("firstHeading").innerHTML = tableau
                });

            } else {
                console.log("error: + recuperer.status");
            }

        };
        findFETCH();

        // h1.addEventListener(''), () => {
        //     findFETCH();

        // };
    })();
}

// let getData = async () => {
//     let recuperer = await fetch('https://canvasjs.com/services/data/datapoints.php')
//     let data = await recuperer.json()
//     return data
// }

// getData()
//     .then(data => {
//         console.log(data)
//     })
//     .catch(error => {
//         alert('ERREUR')
//         console.log(error)
//     })


let c2 = document.createElement("canvas")


h1.insertAdjacentElement("afterend", c2)

// let canvApi = new Chart(c2, {
//     // Types of chart we use
//     type: 'line',

//     // The data of the API
//     data: {
//         labels: [],
//         datasets: [{
//             label: 'Belgium',
//             backgroundColor: 'transparent',
//             hoverBorderColor: 'rgb(200,80,162)',
//             data: [],

//         }]
//     },
//     options: {
//     }
// })

// canvApi.render()

/////////////////////////////////////////////////////////////

/////Get data from external JSON source and render the chart.

let dataPoints = [];
$.getJSON("https://canvasjs.com/services/data/datapoints.php", function (data) {
    $.each(data, function (key, value) {
        dataPoints.push({ x: value[0], y: parseInt(value[1]) });
    });
    chart = new Chart(c2, {
        title: {
            text: "Live Chart with dataPoints from External JSON"
        },
        data: [{
            type: "line",
            dataPoints: dataPoints,
        }]
    });
    chart.render();
    updateChart();
});

//////Each time updateChart is called, it gets data from JSON, update 1xsec

function updateChart() {
    $.getJSON("https://canvasjs.com/services/data/datapoints.php" + (dataPoints.length + 1) + "&ystart=" + (dataPoints[dataPoints.length - 1].y) + "&length=1&type=json", function (data) {
        $.each(data, function (key, value) {
            dataPoints.push({
                x: parseInt(value[0]),
                y: parseInt(value[1])
            });
        });
        chart.render();
        setTimeout(function () { updateChart() }, 1000);
    });
}


////////////////

async function getData() {

    const promise = await fetch('https://canvasjs.com/services/data/datapoints.php%27')
    const word = await promise.json();
    console.log(word)

}

getData();
