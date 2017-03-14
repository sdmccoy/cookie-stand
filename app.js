'use strict';

var storeHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '8pm'];

var oneAndPike = {
  name: '1st and Pike',
  minHrlyCustomers: 23,
  maxHrlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  customersPerHr: function() {
    return Math.floor(Math.random() * ((this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers));
    console.log(customersPerHr);
  },

  cookiesPerHr: function() {
    var salesArr = [];
    for (var i = 0; i < storeHrs.length; i++) {
      var salesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      salesArr.push(salesPerHr);
    }
    this.salesArr = salesArr;
    return salesArr;
  },
};

//
// var seaTacAirport = {
//   name: 'SeaTac Airport',
//   minHrlyCustomers: 3,
//   maxHrlyCustomers: 24,
//   avgCookiesPerCust: 1.2,
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
//     console.log(customersPerHr);
//   },
//   cookiesPerHr:  function() {
//     return customersPerHr * avgCookiesPerCust;
//   },
// };
//
// var seattleCenter = {
//   name: 'Seattle Center',
//   minHrlyCustomers: 23,
//   maxHrlyCustomers: 65,
//   avgCookiesPerCust: 6.5,
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
//   },
//   cookiesPerHr:  function() {
//     return customersPerHr * avgCookiesPerCust;
//   },
// };
//
// var capitolHill = {
//   name: 'Capitol Hill',
//   minHrlyCustomers: 20,
//   maxHrlyCustomers: 38,
//   avgCookiesPerCust: 2.3,
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
//   },
//   cookiesPerHr:  function() {
//     return customersPerHr * avgCookiesPerCust;
//   },
// };
//
// var alki = {
//   name: 'Alki',
//   minHrlyCustomers: 2,
//   maxHrlyCustomers: 16,
//   avgCookiesPerCust: 4.6,
//   customersPerHr: function() {
//     return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
//   },
//   cookiesPerHr:  function() {
//     return customersPerHr * avgCookiesPerCust;
//   },
// };
//
// var cookieArr = [cookieStand.name];
//
// for (var i  = 0; i < cookieArr.length; i++) {
//
// }
