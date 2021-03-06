// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTripDistanceByTripStart");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // labels: ["Max Service Fee", "Min Service Fee"],
      datasets: [{
        label: 'UberX Starting At DIA',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [31.37]
      }, {
        label: 'UberX Ending At DIA',
        backgroundColor: '#032A66',
        hoverBackgroundColor: '#00114D',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [27.38]
      }, {
        label: 'Pool Starting At DIA',
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#A4001B',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [21.52]
      }, {
        label: ['Pool Ending At DIA'],
        backgroundColor: '#BD1134',
        hoverBackgroundColor: '#A4001B',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [30.67]
      }, {
        label: 'Express Starting At DIA',
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [0]
      }, {
        label: ['Express Ending At DIA'],
        backgroundColor: '#FED530',
        hoverBackgroundColor: '#E5BC17',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [27.43]
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
        value: 31.80,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average Starting At DIA 31.80 Miles'
        }
      }, {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 27.02,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average Ending At DIA 27.02 Miles'
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
