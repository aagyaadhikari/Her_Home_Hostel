// For Pie Chart
const pieCtx = document.getElementById('pieChart').getContext('2d');
new Chart(pieCtx, {
    type: 'pie',
    data: {
        labels: ['Staff 1', 'Staff 2', 'Staff 3'],
        datasets: [{
            data: [1, 1, 1],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

// For Line Chart
const lineCtx = document.getElementById('lineChart').getContext('2d');
new Chart(lineCtx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Occupancy 2017',
            data: [30, 40, 50, 60, 70, 80, 90],
            borderColor: '#FF6384',
            fill: false
        }, {
            label: 'Occupancy 2018',
            data: [40, 50, 60, 70, 80, 90, 100],
            borderColor: '#36A2EB',
            fill: false
        }]
    }
});
