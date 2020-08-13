let c2 = document.createElement("canvas")
document.body.appendChild(c2)


let canvAPI = new Chart(c2, {
    // Types of chart we use
    type: 'bar',

    // The data of the API
    data: {
        labels: ["API"],
        datasets: [{
            label: '',
            borderColor: 'blue',
            backgroundColor: 'transparent',
            data: [0, 1, 2, 4,]
        }],
    },
    options: {
    }
})

// API 
// 0    1   - > label = Année 
//0 1  0 1  -> datasets.data / datasets.labels

let h1 = document.getElementById("bodyContent")
h1.insertAdjacentElement("afterbegin", c2)

FETCH();

function FETCH() {
    (() => {
        const findFETCH = async function () {
            let recuperer = await fetch("https://canvasjs.com/services/data/datapoints.php");
            if (recuperer.ok) {
                let data = await recuperer.json().then(data => {
                    console.log(data)
                });
            } else {
                console.log("error: + recuperer.status");
            }

        };
        findFETCH();
    })();
}

