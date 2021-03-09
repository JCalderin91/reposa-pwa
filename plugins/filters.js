import Vue from 'vue'

// Usamos el formato de EEUU porque el de MXM no da formato a los montos de 4 caracteres.
Vue.filter('mxCurrency', val => new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
}).format(val))
