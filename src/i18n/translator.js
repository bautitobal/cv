
function updateAllTranslatedTexts() {
  const htmlElement = document.documentElement;
  const lang = htmlElement.getAttribute('data-language') || 'en';
  console.log(`Updating all translated texts to: ${lang}`);
  
  const translatedElements = document.querySelectorAll('[data-en][data-es]');
  translatedElements.forEach(element => {
    const enText = element.getAttribute('data-en');
    const esText = element.getAttribute('data-es');
    
    if (enText && esText) {
      element.textContent = lang === 'es' ? esText : enText;
    }
  });
}

function initializeTranslator() {
  document.addEventListener('DOMContentLoaded', updateAllTranslatedTexts);
  
  document.addEventListener('languagechange', updateAllTranslatedTexts);
  
  if (document.readyState !== 'loading') {
    updateAllTranslatedTexts();
  }
}

export { updateAllTranslatedTexts, initializeTranslator };