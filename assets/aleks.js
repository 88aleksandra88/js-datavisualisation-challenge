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
                    for (let i = 0; i < data.length; i++) {
                        canvApi.data.labels[i] = data[i]
                    }
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
let ctx2 = c2.getContext('2d')
c2.width = 400;
c2.height = 200;

document.body.appendChild(c2)
h1.insertAdjacentElement("afterend", c2)

let canvApi = new Chart(c2, {
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

        }]
    },
    options: {
    }
})

