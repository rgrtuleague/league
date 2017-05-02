/**
 * Created by Sergey on 28.04.2017.
 */
$(function() {

    var RSSReader = function() {
        this.feedUrl = 'http://....';
        this.articlesList = $('.articles');
        this.articleTmpl = $('.article_tmpl');
        this.init();
    };

    RSSReader.prototype.init = function() {
        this.getFeed('sm');
    };

    RSSReader.prototype.getFeed = function(feedId) {
        $.ajax( {
            url: this.feedUrl,
            data: {kind: feedId},
            method: 'GET',
            dataType: 'json'
        })
        .success(this.onGetData.bind(this))
        .error(function(error) {
                console.log(error);
            });
    };

    RSSReader.prototype.onGetData = function(data) {
        this.renderFeed(data.items);
    };

    RSSReader.prototype.renderFeed = function(dataList) {
        dataList.forEach(function(item) {
            console.log(item.title);
        })
    };
});