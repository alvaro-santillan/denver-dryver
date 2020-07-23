// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("zipTopFive");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["80202 (DownTown Denver)", "80205 (Denver)", "80211 (Denver)", "80203 (DownTown Denver)", "80204 (DownTown Denver)"],
      datasets: [{
        label: 'Trips',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#A4001B',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [687, 508, 394, 297, 243]
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
