//recup des donnés
FETCH();

function FETCH() {
    (() => {
        const findFETCH = async function () {
            let recuperer = await fetch("https://canvasjs.com/services/data/datapoints.php");
            if (recuperer.ok) {
                let data = await recuperer.json().then(recup => {
                    let tableau = recup.tableau;
                    document.getElementById("h1").innerHTML = tableau
                });
            }
            else {
                console.log("error: + recuperer.status");
            }

        };
        findFETCH();
        document.getElementById("h1").addEventListener(''), () => {
            findFETCH();

        };
    })();
}



