// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("generalLongTripTypeDistance");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Longest Trip", "Shortest Trip", "Average Trip"],
      datasets: [{
        label: 'All',
        backgroundColor: '#4e73df',
        hoverBackgroundColor: '#2e59d9',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [12.12, 0.02, 1.60]
      }, {
        label: 'UberX',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [12.12, 0.02, 1.74]
      }, {
        label: 'Pool',
        backgroundColor: '#36b9cc',
        hoverBackgroundColor: '#2c9faf',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [5.13, 0.07, 1.28]
      }, {
        label: 'Express Pool',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [2.67, 0.06, 1.13]
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
