// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("passengerFinalPrice");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Max Final Price", "Min Final Price", "Average Final Price"],
      datasets: [{
        label: 'All',
        backgroundColor: '#1A1A1A',
        hoverBackgroundColor: '#000000',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [125.3, 0.0, 12.98]
      }, {
        label: 'UberX',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [125.3, 0.0, 14.12]
      }, {
        label: 'Pool',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#BD1134',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [55.3, 1.95, 9.33]
      }, {
        label: 'Express Pool',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [64.67, 1.87, 8.34]
      }]
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
