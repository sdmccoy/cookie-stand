'use strict';

var storeHrs = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var body = document.getElementsByTagName('body')[0];

var oneAndPike = {
  name: '1st and Pike',
  minHrlyCustomers: 23,
  maxHrlyCustomers: 65,
  avgCookiesPerCust: 6.3,
  total: 0,
  salesArr: [],
  customersPerHr: function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  },

  dailyCookies: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  },

  createListItems: function() {
    var listHeading = document.createElement('h2');
    listHeading.innerText = this.name;
    body.appendChild(listHeading);
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHrs.length; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
      firstUL.appendChild(newEl);
    }
    body.appendChild(firstUL);
  },
};
oneAndPike.dailyCookies();
oneAndPike.createListItems();

var seaTacAirport = {
  name: 'SeaTac Airport',
  minHrlyCustomers: 3,
  maxHrlyCustomers: 24,
  avgCookiesPerCust: 1.2,
  total: 0,
  salesArr: [],
  customersPerHr: function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  },

  dailyCookies: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  },

  createListItems: function() {
    var listHeading = document.createElement('h2');
    listHeading.innerText = this.name;
    body.appendChild(listHeading);
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHrs.length; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
      firstUL.appendChild(newEl);
    }
    body.appendChild(firstUL);
  },
};
seaTacAirport.dailyCookies();
seaTacAirport.createListItems();

var seattleCenter = {
  name: 'Seattle Center',
  minHrlyCustomers: 11,
  maxHrlyCustomers: 38,
  avgCookiesPerCust: 3.7,
  total: 0,
  salesArr: [],
  customersPerHr: function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  },

  dailyCookies: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  },

  createListItems: function() {
    var listHeading = document.createElement('h2');
    listHeading.innerText = this.name;
    body.appendChild(listHeading);
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHrs.length; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
      firstUL.appendChild(newEl);
    }
    body.appendChild(firstUL);
  },
};
seattleCenter.dailyCookies();
seattleCenter.createListItems();

var capitolHill = {
  name: 'Capitol Hill',
  minHrlyCustomers: 20,
  maxHrlyCustomers: 38,
  avgCookiesPerCust: 2.3,
  total: 0,
  salesArr: [],
  customersPerHr: function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  },

  dailyCookies: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  },

  createListItems: function() {
    var listHeading = document.createElement('h2');
    listHeading.innerText = this.name;
    body.appendChild(listHeading);
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHrs.length; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
      firstUL.appendChild(newEl);
    }
    body.appendChild(firstUL);
  },
};
capitolHill.dailyCookies();
capitolHill.createListItems();

var alki = {
  name: 'Alki',
  minHrlyCustomers: 2,
  maxHrlyCustomers: 16,
  avgCookiesPerCust: 4.6,
  total: 0,
  salesArr: [],
  customersPerHr: function() {
    return Math.floor(Math.random() * (this.maxHrlyCustomers - this.minHrlyCustomers + 1) + this.minHrlyCustomers);
    console.log(customersPerHr);
  },

  dailyCookies: function() {
    for (var i = 0; i < storeHrs.length; i++) {
      var cookiesPerHr = Math.floor(this.customersPerHr() * this.avgCookiesPerCust);
      this.salesArr.push(cookiesPerHr);
      this.total += cookiesPerHr;
    }
  },

  createListItems: function() {
    var listHeading = document.createElement('h2');
    listHeading.innerText = this.name;
    body.appendChild(listHeading);
    var firstUL = document.createElement('ul');
    for (var i = 0; i < storeHrs.length; i++) {
      var newEl = document.createElement('li');
      newEl.innerText = storeHrs[i] + ': ' + this.salesArr[i] + ' cookies.';
      firstUL.appendChild(newEl);
    }
    body.appendChild(firstUL);
  },
};
alki.dailyCookies();
alki.createListItems();
