let c2 = document.createElement("canvas")
document.body.appendChild(c2)


async function getData() {

    const promise = await fetch('https://canvasjs.com/services/data/datapoints.php%27')
    const data = await promise.json()
    console.log(data)
}

getData();

let canvAPI = new Chart(c2, {
    // Types of chart we use
    type: 'bar',

    // The data of the API
    data: {
        labels: [],
        datasets: [],
    },
    options: {
    }
})

// API 
// 0    1   - > label = Année 
//0 1  0 1  -> datasets.data / datasets.labels

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

