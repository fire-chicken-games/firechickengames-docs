(function () {
    'use strict';
    app.document$.subscribe(function() {
        let tables = document.querySelectorAll("article table");
        tables.forEach(table => new Tablesort(table));
    })
})();