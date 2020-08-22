// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("generalTripIncludingPromotions");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Rest Of Fare", "Tip", "Promotion"],
    datasets: [{
      data: [90.28, 5.4, 4.32],
      backgroundColor: ['#032A66', '#BD1134', '#FED530'],
      hoverBackgroundColor: ['#00114D', '#A4001B', '#E5BC17'],
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
