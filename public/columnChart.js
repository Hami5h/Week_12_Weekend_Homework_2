const ColumnChart = function() {

const container = document.querySelector('#column-chart')
const options = {
  chart: {
    type: 'column',
    renderTo: container
  },
  title: {
    text: 'Weather Chart'
  },
  series: [
    {
      name: 'Experiment',
      // data: [9, 13, 3, 2],
      data: [{
        y: 9,
        color: '#0000ff'
      },
      {
        y: 13,
        color: '#00ff00'
      },
      {
        y: 3,
        color: '#ff0000',
      },
      {
        y: 2,
        color: '#0f0f0f'}],
      }
    ],
  xAxis: {
    catgories: ['JavaScript', 'Java', 'CSS', 'Python']
  }
}

  const chart = new Highcharts.Chart(options);
}

document.addEventListener('DOMContentLoaded', function() {
  const columnChart = new ColumnChart();
});
