// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTipProbabilities");
var myPieChart = new Chart(ctx, {
  type: 'horizontalBar',
  data: {
    labels: ["UberX", "Pool", "Express Pool"],
    datasets: [{
      label: "Tipped Trip",
      backgroundColor: ['rgba(3, 42, 102, 1)', 'rgba(189, 17, 52, 1)', 'rgba(254, 213, 48, 1)'],
      hoverBackgroundColor: ['#00114D', '#A4001B', '#E5BC17'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [35.0, 33.33, 0.0],
    }, {
      label: "Non-Tipped Trip",
      backgroundColor: ['rgba(3, 42, 102, 0.2)', 'rgba(189, 17, 52, 0.2)', 'rgba(254, 213, 48, 0.2)'],
      hoverBackgroundColor: ['rgba(3, 42, 102, 0.3)', 'rgba(189, 17, 52, 0.3)', 'rgba(254, 213, 48, 0.3)'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
      data: [65, 66.67, 100]
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
