window.addEventListener('load', function (){
    document.getElementById("duitang").addEventListener('click', function () {
        chrome.tabs.create({ url: 'http://www.duitang.com'});
    }, false);
    document.getElementById("baidu").addEventListener('click', function () {
        chrome.tabs.create({ url: 'http://www.baidu.com'});
    }, false);
}, false);