const ctx = document.getElementById("liveChart");

const liveChart = new Chart(ctx, {

    type: "line",

    data: {

        labels: [],

        datasets: [{

            label: "Temperature (°C)",

            data: [],

            borderColor: "#0F62FE",

            backgroundColor: "rgba(15,98,254,0.2)",

            fill: true,

            borderWidth: 3,

            tension: 0.3,

            pointRadius: 2

        }]
    },

    options: {

        responsive: true,

        maintainAspectRatio: false,

        animation: false,

        scales: {

            x: {
                title: {
                    display: true,
                    text: "Time"
                }
            },

            y: {
                min: 0,
                max: 250,
                title: {
                    display: true,
                    text: "Temperature (°C)"
                }
            }

        }

    }

});

function addData(value){

    const now = new Date().toLocaleTimeString();

    liveChart.data.labels.push(now);

    liveChart.data.datasets[0].data.push(value);

    if(liveChart.data.labels.length > 20){

        liveChart.data.labels.shift();

        liveChart.data.datasets[0].data.shift();

    }

    liveChart.update();

}

setInterval(function(){

    const randomValue = Math.floor(Math.random()*200);

    addData(randomValue);

},1000);