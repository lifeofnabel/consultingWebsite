// global translations in languages.js setzen
// window.translations = { de: {...}, ar: {...} };

document.addEventListener('DOMContentLoaded', () => {
    // Cookie
    document.cookie = "cookie_consent=true; path=/; max-age=" + 60*60*24*365;

    const overlay = document.getElementById('lang-select');
    const buttons = overlay.querySelectorAll('.lang-select__btn');
    const html = document.documentElement;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.dataset.lang;
            // Direction
            html.lang = lang;
            html.dir = lang === 'ar' ? 'rtl' : 'ltr';
            // Apply translations
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                if (window.translations[lang][key]) {
                    el.textContent = window.translations[lang][key];
                }
            });
            overlay.remove();
        });
    });

    // Mobile menu toggle
    document.querySelector('.header__toggle').addEventListener('click', () => {
        document.querySelector('.header__nav').classList.toggle('header__nav--open');
    });

});

