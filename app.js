'use strict';

var storeHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var body = document.getElementsByTagName('body')[0];

function cookieStand(name, minHrlyCustomers, maxHrlyCustomers, avgCookiesPerCust) {
  this.name = name;
  this.minHrlyCustomers = minHrlyCustomers;
  this.maxHrlyCustomers = maxHrlyCustomers;
  this.avgCookiesPerCust = avgCookiesPerCust;
  this.total = 0;
  this.salesArr = [];
  this.customersPerHr = function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  };

  this.dailyCookies = function() {
    this.customersPerHr();
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  };

  this.createListItems = function() {
    this.dailyCookies();
    // // tableHead.innerText = this.name;
    // for (var i = 0; i < storeHrs.length; i++) {
    //   var tableRow = document.createElement('tr');
    //   tableRow.innerText = storeHrs[i];
    //   thead.appendChild(tr);
    // }
  //   var firstUL = document.createElement('ul');
  //   for (var i = 0; i < storeHrs.length; i++) {
  //     var newEl = document.createElement('li');
  //     newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
  //     firstUL.appendChild(newEl);
  //   }
  //   body.appendChild(firstUL);
  // };
  };
}

function createTable() {
  var table = document.createElement('table');
  body.appendChild(table);
  var tableHead = document.createElement('thead');
  table.appendChild(tableHead);
  var tRow = document.createElement('tr');
  tableHead.appendChild(tRow);
  for (var i = 0; i < storeHrs.length; i++) {
    var th = document.createElement('th');
    th.innerText = storeHrs[i];
    tRow.appendChild(th);
  }
};
createTable();

var oneAndPike = new cookieStand('1st and Pike', 23, 65, 6.3);
var seaTacAirport = new cookieStand('SeaTac Airport', 3, 24, 1.2);
var seattleCenter = new cookieStand('Seattle Center', 11, 38, 3.7);
var capitolHill = new cookieStand('Capitol Hill', 20, 38, 2.3);
var alki = new cookieStand('Alki', 2, 16, 4.6);

oneAndPike.createListItems();
seaTacAirport.createListItems();
seattleCenter.createListItems();
capitolHill.createListItems();
alki.createListItems();
//
// }
//
//
//
// var oneAndPike = {
//   name: '1st and Pike',
//   minHrlyCustomers: 23,
//   maxHrlyCustomers: 65,
//   avgCookiesPerCust: 6.3,
//   total: 0,
//   salesArr: [],
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
//     console.log(customersPerHr);
//   },
//
//   dailyCookies: function() {
//     for (var i = 0; i < storeHrs.length; i++) {
//       var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
//       this.salesArr.push(cookiesPerHr);
//       this.total += cookiesPerHr;
//     }
//   },
//
//   createListItems: function() {
//     var listHeading = document.createElement('h2');
//     listHeading.innerText = this.name;
//     body.appendChild(listHeading);
//     var firstUL = document.createElement('ul');
//     for (var i = 0; i < storeHrs.length; i++) {
//       var newEl = document.createElement('li');
//       newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
//       firstUL.appendChild(newEl);
//     }
//     body.appendChild(firstUL);
//   },
// };
// oneAndPike.dailyCookies();
// oneAndPike.createListItems();
//
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minHrlyCustomers: 3,
//   maxHrlyCustomers: 24,
//   avgCookiesPerCust: 1.2,
//   total: 0,
//   salesArr: [],
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
//     console.log(customersPerHr);
//   },
//
//   dailyCookies: function() {
//     for (var i = 0; i < storeHrs.length; i++) {
//       var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
//       this.salesArr.push(cookiesPerHr);
//       this.total += cookiesPerHr;
//     }
//   },
//
//   createListItems: function() {
//     var listHeading = document.createElement('h2');
//     listHeading.innerText = this.name;
//     body.appendChild(listHeading);
//     var firstUL = document.createElement('ul');
//     for (var i = 0; i < storeHrs.length; i++) {
//       var newEl = document.createElement('li');
//       newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
//       firstUL.appendChild(newEl);
//     }
//     body.appendChild(firstUL);
//   },
// };
// seaTacAirport.dailyCookies();
// seaTacAirport.createListItems();
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minHrlyCustomers: 11,
//   maxHrlyCustomers: 38,
//   avgCookiesPerCust: 3.7,
//   total: 0,
//   salesArr: [],
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
//     console.log(customersPerHr);
//   },
//
//   dailyCookies: function() {
//     for (var i = 0; i < storeHrs.length; i++) {
//       var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
//       this.salesArr.push(cookiesPerHr);
//       this.total += cookiesPerHr;
//     }
//   },
//
//   createListItems: function() {
//     var listHeading = document.createElement('h2');
//     listHeading.innerText = this.name;
//     body.appendChild(listHeading);
//     var firstUL = document.createElement('ul');
//     for (var i = 0; i < storeHrs.length; i++) {
//       var newEl = document.createElement('li');
//       newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
//       firstUL.appendChild(newEl);
//     }
//     body.appendChild(firstUL);
//   },
// };
// seattleCenter.dailyCookies();
// seattleCenter.createListItems();
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minHrlyCustomers: 20,
//   maxHrlyCustomers: 38,
//   avgCookiesPerCust: 2.3,
//   total: 0,
//   salesArr: [],
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
//     console.log(customersPerHr);
//   },
//
//   dailyCookies: function() {
//     for (var i = 0; i < storeHrs.length; i++) {
//       var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
//       this.salesArr.push(cookiesPerHr);
//       this.total += cookiesPerHr;
//     }
//   },
//
//   createListItems: function() {
//     var listHeading = document.createElement('h2');
//     listHeading.innerText = this.name;
//     body.appendChild(listHeading);
//     var firstUL = document.createElement('ul');
//     for (var i = 0; i < storeHrs.length; i++) {
//       var newEl = document.createElement('li');
//       newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
//       firstUL.appendChild(newEl);
//     }
//     body.appendChild(firstUL);
//   },
// };
// capitolHill.dailyCookies();
// capitolHill.createListItems();
//
// var alki = {
//   name: 'Alki',
//   minHrlyCustomers: 2,
//   maxHrlyCustomers: 16,
//   avgCookiesPerCust: 4.6,
//   total: 0,
//   salesArr: [],
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
//     console.log(customersPerHr);
//   },
//
//   dailyCookies: function() {
//     for (var i = 0; i < storeHrs.length; i++) {
//       var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
//       this.salesArr.push(cookiesPerHr);
//       this.total += cookiesPerHr;
//     }
//   },
//
//   createListItems: function() {
//     var listHeading = document.createElement('h2');
//     listHeading.innerText = this.name;
//     body.appendChild(listHeading);
//     var firstUL = document.createElement('ul');
//     for (var i = 0; i < storeHrs.length; i++) {
//       var newEl = document.createElement('li');
//       newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
//       firstUL.appendChild(newEl);
//     }
//     body.appendChild(firstUL);
//   },
// };
// alki.dailyCookies();
// alki.createListItems();
