// i18n.js
function loadTranslations(lang) {
    return fetch(`/locales/${lang}.json`)
        .then(response => response.json());
}

function initializeI18n() {
    const defaultLang = 'es';
    const langSelector = document.getElementById('lang-selector');

    loadTranslations(defaultLang).then(resources => {
        i18next.init({
            lng: defaultLang,
            debug: true,
            resources: {
                [defaultLang]: { translation: resources }
            }
        }, function(err, t) {
            jqueryI18next.init(i18next, $);
            $('body').localize();
        });
    });

    langSelector.addEventListener('change', function() {
        const selectedLang = this.value;
        loadTranslations(selectedLang).then(resources => {
            i18next.changeLanguage(selectedLang, (err, t) => {
                if (err) return console.log('something went wrong loading', err);
                i18next.addResourceBundle(selectedLang, 'translation', resources, true, true);
                $('body').localize();
            });
        });
    });
}

document.addEventListener('DOMContentLoaded', initializeI18n);