// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTripDurationByTripType");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // labels: ["Max Service Fee", "Min Service Fee"],
      datasets: [{
        label: 'UberX',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [36.8]
      }, {
        label: 'Pool',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#A4001B',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [36.63]
      }, {
        label: 'Express Pool',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [40.38]
      }, {
        data: [0]
      }, {
        label: ['Shortest'],
        backgroundColor: '#1A1A1A',
        hoverBackgroundColor: '#000000',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [9.62]
      }, {
        label: ['Longest'],
        backgroundColor: '#6A1B9A',
        hoverBackgroundColor: '#510281',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [104.73]
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
        value: 36.92,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average 36.92 Min'
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
