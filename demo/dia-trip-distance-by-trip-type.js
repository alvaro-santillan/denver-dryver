// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTripDistanceByTripType");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // labels: ["Max Service Fee", "Min Service Fee"],
      datasets: [{
        label: 'UberX',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [30.27]
      }, {
        label: 'Pool',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#A4001B',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [22.78]
      }, {
        label: 'Express Pool',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [18.90]
      }, {
        data: [0]
      }, {
        label: ['Shortest'],
        backgroundColor: '#1A1A1A',
        hoverBackgroundColor: '#000000',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [7.19]
      }, {
        label: ['Longest'],
        backgroundColor: '#6A1B9A',
        hoverBackgroundColor: '#510281',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [95.52]
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
    annotation: {
      annotations: [{
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 29.14,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average 29.14 Miles'
        }
      }]
    },
    legend: {
      display: false,
      // position: 'bottom'
    },
    cutoutPercentage: 60,
  },
});
