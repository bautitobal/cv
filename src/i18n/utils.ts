import type { HTMLAttributes } from 'astro/types';

interface TranslationProps extends HTMLAttributes<'span'> {
  en: string;
  es: string;
}

export function getTranslationByLanguage(key: string, lang = 'en', fallback = ''): string {
  if (lang === 'en') return key;
  
  const translations: Record<string, string> = {
    'summary': 'resumen',
    'label': 'etiqueta',
    'position': 'posicion',
    'highlights': 'destacados',
    'institution': 'institucion',
    'area': 'area_es',
    'studyType': 'tipoEstudio',
    'level': 'nivel',
    'language': 'idioma',
    'fluency': 'fluidez',
    'name': 'nombre',
    'description': 'descripcion',
    'keywords': 'palabras_clave'
  };
  
  return translations[key] || fallback || key;
}

export const defaultLang = 'en';

export function getCurrentLanguage(): string {
  if (typeof document !== 'undefined') {
    return document.documentElement.getAttribute('data-language') || 
           localStorage.getItem('preferred-language') || 
           defaultLang;
  }
  return defaultLang;
}

export function getPropertyBasedOnLanguage<T>(obj: any, key: string, lang?: string): T {
  const currentLang = lang || getCurrentLanguage();
  
  if (currentLang === 'en' || !obj) {
    return obj?.[key] as T;
  }
  
  const translatedKey = getTranslationByLanguage(key, currentLang);
  
  return (obj?.[translatedKey] !== undefined && obj?.[translatedKey] !== null) 
    ? obj[translatedKey] as T 
    : obj?.[key] as T;
}