(function () {
    'use strict';

    // Lightbox
    lightbox.option({
        imageFadeDuration: 200,
        resizeDuration: 200,
        wrapAround: true,
    });

    // Tables
    app.document$.subscribe(() => {
        let tables = document.querySelectorAll('article table');
        tables.forEach(table => new Tablesort(table));
    });
})();