// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("canceledSupplementedCanceledTrip");
var myPieChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["All Trips", "UberX", "Pool", "Express Pool"],
    datasets: [{
      label: "Supplemented Canceled Trip",
      backgroundColor: "rgba(154,178,96,0.5)",
      hoverBackgroundColor: "rgba(154,178,96,1)",
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [27.4, 30.4, 18.72, 14.2],
    }, {
      label: "Non-Supplemented Canceled Trip",
      backgroundColor: "rgba(197,213,167,0.5)",
      hoverBackgroundColor: "rgba(197,213,167,1)",
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [72.4, 69.6, 81.28, 85.8]
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
