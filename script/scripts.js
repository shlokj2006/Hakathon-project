document.addEventListener('DOMContentLoaded', function () {
  // Mock data
  const waterData = {
    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    values: [100, 150, 120, 180, 130, 170, 200],
  };
  const alerts = ['High usage detected on Thursday'];
  const tips = [
    'Consider reducing shower time.',
    'Fix any leaking taps.',
    'Use a bucket instead of a hose for cleaning.',
  ];
  const comparisonData = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    userData: [700, 800, 750, 900],
    regionalData: [650, 700, 720, 850],
  };

  // Render Overview Chart
  const overviewCtx = document.getElementById('overviewChart').getContext('2d');
  new Chart(overviewCtx, {
    type: 'line',
    data: {
      labels: waterData.labels,
      datasets: [{
        label: 'Water Consumption (liters)',
        data: waterData.values,
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'blue',
        fill: false,
      }]
    }
  });

  // Render Alerts
  const alertsList = document.getElementById('alertsList');
  alerts.forEach(alert => {
    const li = document.createElement('li');
    li.textContent = alert;
    li.style.color = 'red';
    alertsList.appendChild(li);
  });

  // Render Tips
  const tipsList = document.getElementById('tipsList');
  tips.forEach(tip => {
    const li = document.createElement('li');
    li.textContent = tip;
    tipsList.appendChild(li);
  });

  // Render Comparison Chart  
  const comparisonCtx = document.getElementById('comparisonChart').getContext('2d');
  new Chart(comparisonCtx, {
    type: 'bar',
    data: {
      labels: comparisonData.labels,
      datasets: [
        {
          label: 'Your Consumption',
          data: comparisonData.userData,
          backgroundColor: 'blue',
        },
        {
          label: 'Regional Average',
          data: comparisonData.regionalData,
          backgroundColor: 'green',
        },
      ]
    }
  });
});
