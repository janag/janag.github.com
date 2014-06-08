define(function(require, exports, module) {

    var SlideData = {
        userId: '109002007738931233589',
        albumId: '6022390772665912193',
        picasaUrl: 'https://picasaweb.google.com/data/feed/api/user/',
        queryParams: '?alt=json&hl=en_US&access=visible&fields=entry(id,media:group(media:content,media:description,media:keywords,media:title))',
        defaultImage: 'https://lh5.googleusercontent.com/-hNYiCqa78No/U5PUf-9Xi4E/AAAAAAAABn4/vsFOTowxLc0/s160-c/PCCI.jpg'
    };

    SlideData.getUrl = function() {
        return SlideData.picasaUrl + SlideData.userId + '/albumid/' + SlideData.albumId + SlideData.queryParams;
    };

    SlideData.parse = function(data) {
        var urls = [];
        data = JSON.parse(data);
        var entries = data.feed.entry;
        for (var i = 0; i < entries.length; i++) {
            var media = entries[i].media$group;
            urls.push(media.media$content[0].url);
        }
        return urls;
    };

    module.exports = SlideData;
});
