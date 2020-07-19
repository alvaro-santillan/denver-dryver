// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Poppins', 'sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

var ctx = document.getElementById("diaTripProfitByTripType");
var myPieChart = new Chart(ctx, {
  type: 'bar',
  data: {
    // labels: ["Max Service Fee", "Min Service Fee"],
      datasets: [{
        label: 'UberX',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [30.27]
      }, {
        label: 'Pool',
        backgroundColor: '#36b9cc',
        hoverBackgroundColor: '#2c9faf',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [22.78]
      }, {
        label: 'Express Pool',
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [18.9]
      }, {
        data: [0]
      }, {
        label: ['Worst'],
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [5.42]
      }, {
        label: ['Best'],
        backgroundColor: '#1cc88a',
        hoverBackgroundColor: '#1cc88a',
        hoverBorderColor: "rgba(234, 236, 244, 1)",
        data: [86.81]
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
        value: 29.34,
        borderColor: 'rgb(0, 0, 0)',
        borderWidth: 3,
        label: {
          enabled: true,
          content: 'Average $29.34'
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
