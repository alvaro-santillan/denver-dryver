// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("diaPoolTripFairBreakdown");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    
    datasets: [{
      data: [0, 3.41, 5.37, 2.06, 0.49, 74.27, 0.0, 0.0, 0.56, 0.12, 13.72, 0.0],
      backgroundColor: ['#4e73df', '#1cc88a', '#36b9cc'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
      hoverBorderColor: "rgba(234, 236, 244, 1)",
    }, {
      data: [91.22, 3.41, 5.37],
      backgroundColor: ['#4e73df'],
      hoverBackgroundColor: ['#2e59d9', '#17a673', '#2c9faf'],
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
