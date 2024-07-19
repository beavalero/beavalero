// script.js
function setLanguage(lang) {
    document.documentElement.lang = lang;
    updateActiveButton(lang);
  }
  
  function updateActiveButton(lang) {
    var btnEn = document.getElementById('btn-en');
    var btnEs = document.getElementById('btn-es');
    
    if (lang === 'en') {
      btnEn.classList.add('active');
      btnEs.classList.remove('active');
    } else if (lang === 'es') {
      btnEn.classList.remove('active');
      btnEs.classList.add('active');
    }
  }
  
  // Set the initial active button based on the current language
  document.addEventListener('DOMContentLoaded', function() {
    updateActiveButton(document.documentElement.lang);
  });
  