//active-users

var currentURL = window.location.href
var graphURL = "http://18.130.116.234:5000/courses/understanding-advc/learning-technologies/charts-Graph";
var usersURL = "http://18.130.116.234:5000/dashboard/client";
var devGraphURL = "localhost:5000/courses/understanding-advc/learning-technologies/charts-Graph";
var devUsersURL = "localhost:5000/dashboard/client";


if ( currentURL == graphURL || devGraphURL ){

  var doughnutEg = document.getElementById("graphEg");
  var pieEg = document.getElementById("pieEg");

  //doughnut Graph

  var doughnutOptions = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
                display: false //this will remove only the label
            }
        }],
        xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
                display: false //this will remove only the label
            }
        }],
    }
  };

  var exampleGraph = new Chart( graphEg, {
    type: 'doughnut',
    options: doughnutOptions,
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 3, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 0
      }],
    },
  });

  //Pie Graph

  var pieOptions = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
                display: false //this will remove only the label
            }
        }],
        xAxes: [{
            gridLines: {
              display: false
            },
            ticks: {
              display: false //this will remove only the label
            }
        }],
    }
  };

  var examplePieGraph = new Chart( pieEg, {
    type: 'pie',
    options: pieOptions,
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 3, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 0
      }],
    },
  });

  //Line Graph

  var lineOptions = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            gridLines: {
              //display: false
            },
            ticks: {
              display: true //this will remove only the label
            }
        }],
        xAxes: [{
            gridLines: {
              //display: false
            },
            ticks: {
              display: true //this will remove only the label
            }
        }],
    }
  };

  var exampleLineGraph = new Chart( lineEg, {
    type: 'line',
    options: lineOptions,
    data: {
      labels: ['','Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange', ''],
      datasets: [{
          label: '# of Votes',
          data: [ , 12, 19, 3, 5, 3, 3, ],
          borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)'
          ],
          backgroundColor: "transparent",
          borderWidth: 3
      }],
    },
  });

  //Bar Graph

  var barOptions = {
    legend: {
        display: false,
    },
    scales: {
        yAxes: [{
            gridLines: {
              //display: false
            },
            ticks: {
              display: true //this will remove only the label
            }
        }],
        xAxes: [{
            gridLines: {
              //display: false
            },
            ticks: {
              display: true //this will remove only the label
            }
        }],
    }
  };

  var exampleBarGraph = new Chart( barEg, {
    type: 'bar',
    options: barOptions,
    data: {
      labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
      datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 3, 3],
          backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)'
          ],
          borderWidth: 0
      }],
    },
  });
}

if ( currentURL == usersURL || devUsersURL){

  var activeUsers = document.getElementById("active-users");

  var usersOptions = {};

  var activeUsersGraph = new Chart( activeUsers, {
    type : 'doughnut',
    options : usersOptions,
    data : {
      labels: [ 'Active users', 'Non-active users'],
      datasets : [{
        label : "Number of users",
        data : [ 61, 39 ],
        backgroundColor: [
          "#9ecd7d",
          "#f7b053"
        ]
      }]
    }
  });
}

var analytics = document.getElementById('analytics');

var ctx = new Chart( analytics, {
  type : 'doughnut',
    options : {
      legend : {
        display : false
      }
    },
    data : {
      labels: [ 'Active users', 'Non-active users'],
      datasets : [{
        label : "Number of users",
        data : [ 61, 39 ],
        backgroundColor: [
          "#9ecd7d",
          "#f7b053"
        ]
      }]
    }
  });

