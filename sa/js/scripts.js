$(document).ready(function () {
  
  // 1. Activa el sidebar (menú móvil)
  $('.ui.sidebar').sidebar('attach events', '.toc.item');

  // 2. Activa los menús desplegables (si los usas)
  $('.ui.accordion').accordion();

  // 3. Activa las pestañas (Tabs) (si las usas)
  $('.menu .item').tab();
  
});