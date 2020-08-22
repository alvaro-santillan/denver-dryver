// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("feesPaidToUberTotal");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Max Uber Share", "Min Uber Share", "Average Uber Share"],
      datasets: [{
        label: 'All',
        backgroundColor: '#1A1A1A',
        hoverBackgroundColor: '#000000',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [43.69, -17.63, 3.44]
      }, {
        label: 'UberX',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [43.69, -13.77, 4.26]
      }, {
        label: 'Pool',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#BD1134',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [34.63, -17.63, 0.59]
      }, {
        label: 'Express Pool',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [32.78, -13.59, 0.42]
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
