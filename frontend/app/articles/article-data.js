System.register([], function(exports_1) {
    var ArticleData;
    return {
        setters:[],
        execute: function() {
            ArticleData = (function () {
                function ArticleData() {
                }
                ArticleData.prototype.createDb = function () {
                    var articles = [
                        { "id": "1", "title": "test one", "content": "Il a pas dit bonjour" },
                        { "id": "2", "title": "test two", "content": "Il a pas dit bonjour" },
                        { "id": "3", "title": "test three", "content": "Il a pas dit bonjour" },
                        { "id": "4", "title": "test four", "content": "Il a pas dit bonjour" }
                    ];
                    return { articles: articles };
                };
                return ArticleData;
            })();
            exports_1("ArticleData", ArticleData);
        }
    }
});
//# sourceMappingURL=article-data.js.map