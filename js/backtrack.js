function updateBacktrack() {
    if (window.name == '') {
        var urls = [window.location["href"]];
        window.name = JSON.stringify(urls);
    }else{
        var urls = JSON.parse(window.name);
        urls.push(window.location["href"]);
        if(urls.length > 5) {
            urls.shift();
        }
        window.name = JSON.stringify(urls);
    }
}