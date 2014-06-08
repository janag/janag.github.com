define(function(require, exports, module) {
    var Engine = require('famous/core/Engine');
    var Utility = require('famous/utilities/Utility');

    var AppView = require('views/AppView');
    var SlideData = require('data/SlideData');

    var mainContext = Engine.createContext();
    mainContext.setPerspective(1000);

    console.log(SlideData.getUrl());

    // https://picasaweb.google.com/data/feed/api/user/109813050055185479846/album…(id,media:group(media:content,media:description,media:keywords,media:title))

    Utility.loadURL(SlideData.getUrl(), initApp);

    function initApp(data) {
        data = SlideData.parse(data);

        var appView = new AppView({ data : data });

        mainContext.add(appView);
    }
});


// https://picasaweb.google.com/data/feed/api/user109002007738931233589/albumid/6022390772665912193?alt=json&hl=en_US&access=visible&fields=entry(id,media:group(media:content,media:description,media:keywords,media:title