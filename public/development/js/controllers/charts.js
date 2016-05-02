google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(tempChart);
      google.charts.setOnLoadCallback(humidChart);
      google.charts.setOnLoadCallback(lightChart);

      function tempChart() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'WaterTemp', 'AirTemp'],
          ['15',  75,      78],
          ['30',  74,      78],
          ['45',  73,       78],
          ['60',  74,      77],
          ['75',  75,      78],
          ['90',  74,      78],
          ['105',  73,       78],
          ['120',  74,      77],
          ['135',  74.5,      78],
          ['150',  74.4,      78],
          ['165',  73.9,       78],
          ['180',  74,      77]
        ]);

        var options = {
          title: 'Water & Air Temperature',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('temp_chart'));

        chart.draw(data, options);
      };

      function humidChart() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Humidity'],
          ['15',  79],
          ['30',  78],
          ['45',  79 ],
          ['60',  79],
          ['75',  79],
          ['90',  79],
          ['105',  79.5 ],
          ['120',  79.5],
          ['135',  79.5],
          ['150',  79.0],
          ['165',  78 ],
          ['180',  78]
        ]);

        var options = {
          title: 'Humidity',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('humidity_chart'));

        chart.draw(data, options);
      };

      function lightChart() {
        var data = google.visualization.arrayToDataTable([
          ['Time', 'Lumens'],
          ['15',  2000],
          ['30',  2010],
          ['45',  2020 ],
          ['60',  2030],
          ['75',  2030],
          ['90',  2030],
          ['105',  2030],
          ['120',  2030],
          ['135',  2030],
          ['150',  2030],
          ['165',  2030 ],
          ['180',  2030]
        ]);

        var options = {
          title: 'Light',
          curveType: 'function',
          legend: { position: 'bottom' }
        };

        var chart = new google.visualization.LineChart(document.getElementById('light_chart'));

        chart.draw(data, options);
      }