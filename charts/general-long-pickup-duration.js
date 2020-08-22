// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("generalLongTripTypeDuration");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["Longest Trip", "Shortest Trip", "Average Trip"],
      datasets: [{
        label: 'All',
        backgroundColor: '#1A1A1A',
        hoverBackgroundColor: '#000000',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [33.72, 0.03, 3.90]
      }, {
        label: 'UberX',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [26.43, 0.03, 3.93]
      }, {
        label: 'Pool',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#BD1134',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [33.72, 0.25, 4.04]
      }, {
        label: 'Express Pool',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [12.1, 0.77, 3.51]
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
