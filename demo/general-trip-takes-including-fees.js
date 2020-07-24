// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("generalTripTakesIncludingFees");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Driver", "Uber Technologies", "Third Party Fees", "Tolls"],
    datasets: [{
      data: [72.26, 26.48, 0.84, 0.41],
      backgroundColor: ['#FED530', '#BD1134', '#032A66', '#1A1A1A'],
      hoverBackgroundColor: ['#E5BC17', '#A4001B', '#00114D', '##000000'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
  }, 
  options: {
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
