const jsonF = {
    "species": {
        "value": 0,
        "url": 'assets/species_classes/species_classes.json'
    },
    "archetype": {
        "value": 1,
        "url": 'assets/species_archetypes/species_archetypes.json'
    },

    "governments": {
        "value": 2,
        "url": 'assets/governments/governments.json'
    },
    "ethics":{
        "value": 3,
        "url": 'assets/ethics/ethics.json'
    },
    "authority": {
        "value": 4,
        "url": 'assets/governments/authorities/authorities.json'
    },
    "civics": {
        "value": 5,
        "url": 'assets/governments/civics/civics.json'
    }
};


combinedRequest = {

    init: function(urlArray, callback) {
        const theContent = [];
        combinedRequest.requestWrapper(urlArray, theContent, callback);
    },

    requestWrapper: function(urlArray, theContent, callback) {
        /*The closure inside which we place the XMLHttpRequest call*/
        const requestObject = makeRequestObject();
        requestObject.onreadystatechange = processRequest;
        /*(Defined below, as functions inside requestWrapper*/

        let url = urlArray[0];
        /*Get the first url out of the array*/

        requestObject.open("GET", url, true);
        requestObject.send(null);
        /*Does the actual opening of the connection*/

        function makeRequestObject() {
            /*This function forks for IE and returns the XMLHttpRequest object.*/
            if (window.XMLHttpRequest) {
                return new XMLHttpRequest();
            } else if (window.ActiveXObject) {
                return new ActiveXObject("Microsoft.XMLHTTP");
            }
        }

        function processRequest() {
            /*This function gets called when the XMLHttpRequest object reports a change in its state*/
            if (requestObject.readyState === 4) {
                /*We only care if it reports the state as 'finished'*/
                if (requestObject.status === 200) {
                    /*We only want to support actual page loads, not 404s etc.*/
                    combinedRequest.takeText(urlArray, theContent, JSON.parse(requestObject.responseText), callback);
                    /*Here we pass the parameters to the requestWrapper function, along with the text from the page we grabbed asynchronously, to takeText()*/
                }
            }

        }
    },

    takeText: function(urlArray, theContent, responseText, callback) {
        /*What gets called after each AJAX request completes*/
        //theContent += responseText;
        theContent.push(responseText);
        /*The basic operation we want to do, adding what we got from the asynchronous call to our theContent variable*/
        urlArray.shift();
        /*since we've gotten this far, we must have finished with the loading of the URL in the position urlArray[0], which we set the XMLHttpRequest object to fetch from in requestWrapper. So we remove it from the array.*/
        if (urlArray.length > 0) {
            /*If, after the shift, we still have URLs to process*/
            combinedRequest.requestWrapper(urlArray, theContent, callback);
            /*The core of the trickiness. We now send the altered urlArray and theContent variables back to requestWrapper, which will in turn load the next URL and kick off takeText() again with the responseText from that page load...*/
        } else {
            /*Or, if we have no more URLs to process*/
            combinedRequest.doCallback(theContent, callback, urlArray);
            /*doCallback doesn't care about anything except what we want it to alert*/
        }
    },

    doCallback: function(theContent, callback) {
        /*What gets called when the last AJAX request completes*/
        callback(theContent);
    }

}

combinedRequest.init([jsonF.species.url, jsonF.archetype.url, jsonF.governments.url, jsonF.ethics.url, jsonF.authority.url, jsonF.civics.url], function(data){
    populateHeader();
    const civ = Object.assign({}, combinedArticles.init(data[5]));
    //console.log(copy)
    const spec = combinedArticles.init(data[0]);
    //combinedArticles.init(data[3]);
    const auth = combinedArticles.init(data[4]);
    //combinedArticles.init(data[5]);
    //showCategories(data[4]);
    console.log(combinedArticles.init(data[3]))
    showCat(spec, 0);
    showCat(combinedArticles.init(data[3]), 3);
    showCat(auth, 4);
    showCat(civ, 5);
    //testEth(combinedArticles.init(data[3]), 3);

});

function saveJson(obj) {
    const obj3 = JSON.parse(JSON.stringify(obj));
    //console.log("test1");
    //console.log(obj);
    return obj3;
}

