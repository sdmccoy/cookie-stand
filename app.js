'use strict';

var cookieStand = {
  name: '1st and Pike',
  minHrlyCustomers: 23,
  maxHrlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  customersPerHr: function() {
    return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
  },
  cookiesPerHr:  function() {
    return customersPerHr * avgCookiesPerCust;
  },
};

var cookieStand = {
  name: 'SeaTac Airport',
  minHrlyCustomers: 3,
  maxHrlyCustomers: 24,
  avgCookiesPerCust: 1.2,
  customersPerHr: function() {
    return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
  },
  cookiesPerHr:  function() {
    return customersPerHr * avgCookiesPerCust;
  },
};

var cookieStand = {
  name: 'Seattle Center',
  minHrlyCustomers: 23,
  maxHrlyCustomers: 65,
  avgCookiesPerCust: 6.5,
  customersPerHr: function() {
    return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
  },
  cookiesPerHr:  function() {
    return customersPerHr * avgCookiesPerCust;
  },
};

var cookieStand = {
  name: 'Capitol Hill',
  minHrlyCustomers: 20,
  maxHrlyCustomers: 38,
  avgCookiesPerCust: 2.3,
  customersPerHr: function() {
    return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
  },
  cookiesPerHr:  function() {
    return customersPerHr * avgCookiesPerCust;
  },
};

var cookieStand = {
  name: 'Alki',
  minHrlyCustomers: 2,
  maxHrlyCustomers: 16,
  avgCookiesPerCust: 4.6,
  customersPerHr: function() {
    return Math.floor(Math.random() * (maxHrlyCustomers - minHrlyCustomers + 1)) + minHrlyCustomers;
  },
  cookiesPerHr:  function() {
    return customersPerHr * avgCookiesPerCust;
  },
};
