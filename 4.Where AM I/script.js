"use strict";
const container = document.querySelector(".container");
const latInput = document.querySelector("#Lat");
const lngInput = document.querySelector("#Lng");
const btn = document.querySelector(".btn");
const detail = document.querySelector(".detail");

const city = document.querySelector(".city");
const country = document.querySelector(".country");
const continent = document.querySelector(".continent");

let map;
let latlng;

if (navigator.geolocation)
  navigator.geolocation.getCurrentPosition(
    function (Position) {
      const { latitude } = Position.coords;
      const { longitude } = Position.coords;

      latlng = [latitude, longitude];
      showMap(latlng);
    },
    function () {
      console.log("Could not get your Position");
    }
  );
btn.addEventListener("click", function (e) {
  e.preventDefault();
  const lat = +latInput.value;
  const lng = +lngInput.value;
  latlng = [lat, lng];

  fetch(
    `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`
  )
    .then((response) => {
      if (!response.ok) return;

      return response.json();
    })
    .then((data) => {
      console.log(data);
      renderData(data);
    });

  L.marker(latlng).addTo(map);

  map.setView(latlng, 13, {
    animate: true,
    pan: {
      duration: 1,
    },
  });
});

const renderData = function (data) {
  detail.classList.remove("hidden");
  city.textContent = data.city;
  continent.textContent = data.continent;
  country.textContent = data.countryName;
};

const showMap = function (latlng) {
  map = L.map("mapview").setView(latlng, 13, {
    animate: true,
    pan: {
      duration: 1,
    },
  });

  L.tileLayer("https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
};
