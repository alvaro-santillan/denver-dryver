// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("diaAllTripFairBreakdown");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      data: [0, 0.66, 7.4, 1.95, 0.05, 67.17, 0.0, 3.11, 0.33, 0.12, 18.9, 0.32],
      backgroundColor: ['#FED530', '#BD1134', '#032A66', '#1A1A1A', '#c62828', '#AD1457', '#6A1B9A', '#4527A0', '#283593', '#1565C0', '#0277BD', '#00838F', '#00695C', '#2E7D32', '#558B2F'],
      hoverBackgroundColor: ['#E5BC17', '#A4001B', '#00114D', '##000000', '#AD0F0F', '#94003E', '#510281', '#2C0E87', '#0F1C7A', '#004CA7', '#005EA4', '#006A76', '#005043', '#156419', '#3C7216'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }, {
      data: [91.95, 0.66, 7.4],
      backgroundColor: ['#FED530', '#BD1134', '#032A66', '#1A1A1A', '#c62828', '#AD1457', '#6A1B9A', '#4527A0', '#283593', '#1565C0', '#0277BD', '#00838F', '#00695C', '#2E7D32', '#558B2F'],
      hoverBackgroundColor: ['#E5BC17', '#A4001B', '#00114D', '##000000', '#AD0F0F', '#94003E', '#510281', '#2C0E87', '#0F1C7A', '#004CA7', '#005EA4', '#006A76', '#005043', '#156419', '#3C7216'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }],
    labels: ["Fair", "Promotion", "Tip", "Base", "Additional Pickups", "Distance", "Fare Supplement", "Surge", "Long Pickup Distance", "Long Pickup Time", "Trip Time", "Wait Time"]
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
