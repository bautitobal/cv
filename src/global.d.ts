// Extensión del objeto Window para las propiedades globales personalizadas
interface Window {
  translatorInitialized?: boolean;
  sectionTranslatorInitialized?: boolean;
}

// Declarar módulo para el traductor
declare module '*/i18n/translator.js' {
  export function updateAllTranslatedTexts(): void;
  export function initializeTranslator(): void;
}