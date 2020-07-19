// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTripDurationByTripStart");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // labels: ["Max Service Fee", "Min Service Fee"],
      datasets: [{
        label: 'UberX Starting At DIA',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [38.6]
      }, {
        label: 'UberX Ending At DIA',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#2c9faf',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [34.94]
      }, {
        label: 'Pool Starting At DIA',
        backgroundColor: '#36b9cc',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [31.25]
      }, {
        label: ['Pool Ending At DIA'],
        backgroundColor: '#36b9cc',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [40.93]
      }, {
        label: 'Express Starting At DIA',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [0]
      }, {
        label: ['Express Ending At DIA'],
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [40.38]
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
        value: 38.15,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average Starting At DIA 38.15 Min'
        }
      }, {
        type: 'line',
        mode: 'horizontal',
        scaleID: 'y-axis-0',
        value: 35.77,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average Ending At DIA 35.77 Min'
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
