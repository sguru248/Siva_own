require([
  "esri/config",
  "esri/Map",
  "esri/views/MapView",
  "esri/WebMap",
], function (esriConfig, Map, MapView, WebMap) {
  esriConfig.apiKey =
    "AAPK5b725875236f40d18ef7cc45035903619TNEXa4YqtVuVxfRss6S6JBJV01w9tmdOciLUaJC_tM0HAUGiJU3pbPLjrYa3_Id";

  /* const map = new Map({
    basemap: "arcgis-imagery", // basemap styles service
  });
 */

  const webmap = new WebMap({
    portalItem: {
      // autocasts as new PortalItem()
      id: "a725ab8ec7b848f595baa720481afd5e",
    },
  });

  const view = new MapView({
    map: webmap,
    center: [78.96, 20.59], // Longitude, latitude
    zoom: 5, // Zoom level
    container: "viewDiv", // Div element
  });
});
