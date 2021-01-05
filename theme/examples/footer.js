const scopedSelector = (queryString) => document.querySelector(queryString + '[data-abell-hCdFua]');const scopedSelectorAll = (queryString) => document.querySelectorAll(queryString + '[data-abell-hCdFua]'); 
    scopedSelector('.year').innerHTML = new Date().getFullYear();
  