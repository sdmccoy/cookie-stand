'use strict';

var oneAndPike = {
  name: '1st and Pike',
  minHrlyCustomers: 23,
  maxHrlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  storeHrs: [1, 2, 3, 4, 5, 6],
  customersPerHr: function() {
    return Math.floor(Math.random() * ((this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers));
    console.log(customersPerHr);
  },
  cookiesPerHr: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      return this.customersPerHr() * this.avgCookiesPerCust;
    }
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
