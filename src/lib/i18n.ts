import { browser } from '$app/environment';
import { init, register } from 'svelte-i18n';

const defaultLocale = 'en';

register('en', () => import('$lib/locales/en.json'));
register('es', () => import('$lib/locales/es.json'));
register('ja', () => import('$lib/locales/ja.json'));
register('ko', () => import('$lib/locales/ko.json'));
register('hi', () => import('$lib/locales/hi.json'));
register('tl', () => import('$lib/locales/tl.json'));
register('vi', () => import('$lib/locales/vi.json'));
register('ar', () => import('$lib/locales/ar.json'));
register('hy', () => import('$lib/locales/hy.json'));
register('ru', () => import('$lib/locales/ru.json'));

init({
  fallbackLocale: defaultLocale,
  initialLocale: defaultLocale,
});
