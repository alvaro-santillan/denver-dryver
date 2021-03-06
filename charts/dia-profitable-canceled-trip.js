// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaProfitableCanceledTrip");
var myPieChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["All Trips"],
    datasets: [{
      label: "Profitable Canceled Trip",
      backgroundColor: "rgba(3, 42, 102, 1)",
      hoverBackgroundColor: "#00114D",
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [4.29],
    }, {
      label: "Non-Profitable Canceled Trip",
      backgroundColor: "rgba(3, 42, 102, 0.2)",
      hoverBackgroundColor: "rgba(3, 42, 102, 0.3)",
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [95.71]
    }]
  }, 
  options: {
    scales: {
      xAxes: [{
        stacked: true
      }],
      yAxes: [{
        stacked: true
      }]
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false,
      // position: 'bottom'
    },
    cutoutPercentage: 60,
  },
});
