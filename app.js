
const header = document.querySelector('header');
const section = document.querySelector('section');
//file location and value in arrays







function populateHeader() {
    const myH1 = document.createElement('h1');
    myH1.textContent = "Stellaris Builder";
    header.appendChild(myH1);
}
/*
function showCategories(obj) {
    const heroes = obj['members'];
    for(let i = 0; i < heroes.length; i++) {
        const myArticle = document.createElement('article');
        const myH2 = document.createElement('h2');
        const myPara1 = document.createElement('p');
        const myPara2 = document.createElement('p');
        const myPara3 = document.createElement('p');
        const myList = document.createElement('ul');
        myH2.textContent = heroes[i].name;
        myPara1.textContent = 'Secret identity: ' + heroes[i].secretIdentity;
        myPara2.textContent = 'Age: ' + heroes[i].age;
        myPara3.textContent = 'Superpowers:';
        const superPowers = heroes[i].powers;
        for(let j = 0; j < superPowers.length; j++) {
            const listItem = document.createElement('li');
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }
        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);
        section.appendChild(myArticle);
    }
}
 */

function capitalizeFirstLetter(string) {
    // noinspection JSUnresolvedFunction
    string = string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function changeName(name){

    switch (name){
        case 'MAM': return 'MAMMALIANS';
        case 'REP': return 'REPTILIAN';
        case 'AVI': return 'AVIAN';
        case 'ART': return 'ARTHROPOID';
        case 'MOL': return 'MOLLUSCOID';
        case 'FUN': return 'FUNGOID';
        case 'PLANT': return 'PLANTOIDS';
        case 'LITHOID': return 'LITHOIDS';
        case 'NECROID': return 'NECROIDS';
        case 'HUM': return 'HUMANOIDS';
        default: return name;
    }
}




function showCat(obj, num) {

    let center = 'text-align: center';
    const myH2 = document.createElement('h2');
    const myArticle = document.createElement('article');
    const ul = document.createElement('ul');
    //const li = document.createElement('li');
    //const td = document.createElement('td');
    //console.log(Object.keys(obj));
    myH2.textContent = capitalizeFirstLetter(Object.keys(jsonF)[num]);
    myH2.style.cssText = center;

    myArticle.appendChild(myH2);
    /*switch (num) {
        case 3:
            for (let x = 0; x < Object.keys(obj).length; x++){
                // remove unwanted key from json object
                if(Object.keys(obj)[x] === "ethic_categories"){
                    delete obj[Object.keys(obj)[x]];
                    //json = _.omit(json, Object.keys(json)[x]);
                }
            }
            break;
        case 0:
            let toDelete = [];
            for(let x = 0; x < Object.keys(obj).length; x++){
                if('playable' in Object.entries(obj)[x][1]){
                    // noinspection JSUnresolvedVariable
                    if('always' in Object.entries(obj)[x][1].playable){
                        // noinspection JSUnresolvedVariable
                        if(Object.entries(obj)[x][1].playable.always === false){
                            toDelete.push(Object.keys(obj)[x]);
                        }
                    }
                }
            }
            // delete stored values from object
            for(let i = 0; i < toDelete.length; i++){
                [toDelete[i]].forEach(e => delete obj[e]);
            }
            break;
        case 4:
            for (let x = 0; x < Object.keys(obj).length; x++){
                // remove unwanted key from json object
                if(Object.keys(obj)[x] === "auth_ancient_machine_intelligence"){
                    delete obj[Object.keys(obj)[x]];
                    //json = _.omit(json, Object.keys(json)[x]);
                }
            }
            break;
    }

     */

    //check if species(index 0 value) is not playable and remove it from list
    if(num === 0){

    }

    const key = Object.keys(obj);
    for(let i = 0; i < key.length; i++) {
        const input = document.createElement("input");
        const br = document.createElement("br");
        const label = document.createElement("label");
        const span = document.createElement("span");
        let pair = Object.keys(obj)[i];
        let temp;
        switch (Object.keys(jsonF)[num]) {
            case 'ethics':
                temp = key[i].replace("ethic_", "");
                temp = temp.replace("_", " "); // replace "_" with spaces
                // noinspection JSUnresolvedVariable
                input.value = obj[pair].cost;
                break;
            case 'species':
                temp = changeName(key[i]);
                break;
            case 'authority':
                temp = key[i].replace("auth_", "");
                temp = temp.replace("_", " "); // replace "_" with spaces
                break;
            case 'civics':
                temp = key[i].replace("civic_", "");
                temp = temp.replace("_", " "); // replace "_" with spaces
                temp = temp.replace("_", " "); // replace "_" with spaces
                break;
            default: temp = key[i];
        }
        /*
                if (Object.keys(jsonF)[num] == 'ethics'){
                    temp = key[i].replace("ethic_", "");
                    temp = temp.replace("_", " "); // replace "_" with spaces
                }else if (Object.keys(jsonF)[num] == 'archetypes'){
                    temp = key[i];
                }else{
                    temp = key[i];
                }
         */

        input.type = "checkbox";
        input.className = "tooltip";
        //input.textContent = "test";
        input.name = temp;
        input.id = key[i];
        label.textContent = capitalizeFirstLetter(temp); //set label with object key name
        input.style.cssText = center;
        //ul.className = "tooltip";
        span.textContent = "test this bitch";
        span.className = "tooltiptext";
        input.appendChild(span);
        ul.appendChild(input)
        ul.appendChild(label)
        ul.appendChild(br);
        //myArticle.appendChild(myH2);
        myArticle.appendChild(ul);
        section.appendChild(myArticle);
    }
}

function testEth(obj, num){

    //let baseUrl = "https://stellaris.paradoxwikis.com/Ethics#/media/File:";
    //let ext = ".png";
    let noOfCircles;
    let fan = [];
    let moder = [];
    //let testFan = {};
    for(let i = 0; i < Object.keys(obj).length; i++){
        let ket = Object.keys(obj)[i];

        // noinspection JSUnresolvedVariable
        switch (obj[ket].cost) {
            case 2:
                ket = ket.replace("ethic_", "");
                fan.push(ket);
                //testFan.push(Object.entries(obj)[i]);
                //console.log(Object.entries(obj)[i]);
                break;
            case 1:
                moder.push(ket);
                break;
            default: break;
        }
    }
    //console.log(testFan);
    noOfCircles = fan.length;
    //var noOfCircles = Object.entries(obj).length;
    /* equally divide 360 by the no of circles to be drawn */
    let degreeAngle = 360 / noOfCircles;
    /* get handle on the wrapper canvas */
    let wrapper = $(".circle-container");
    /* clear it first */
    wrapper.html("");
    /* initialize angle incrementer variable */
    let currAngle = 0;
    /* draw each circle at the specified angle */
    for (let i = 0; i < fan.length; i++) {
        //console.log(fan);
        //let val;
        /* add to the wrapper */
        wrapper.append(getDiv(currAngle, i));
        /* increment the angle incrementer */
        currAngle = currAngle + degreeAngle;
    }


    /*
        Function returns a new DIV with the angles translation using CSS.
        It also applies a random color for fun.
        stole the CSS from :http://stackoverflow.com/questions/12813573/position-icons-into-circle
    */
    function getDiv(currAngle, i) {
        const div = document.createElement("div");
        const img = document.createElement("img");
        const span = document.createElement("span");
        const br = document.createElement("br");
        div.className = 'circle';
        div.style.transform = "rotate(" + currAngle + "deg) translate(12em) rotate(-" + currAngle + "deg)";
        img.src = 'http://www.stellariswiki.com/images/thumb/5/55/Fanatic_Militarist.png/42px-Fanatic_Militarist.png';
        span.className = "tooltiptext";
        span.innerHTML = getToolTip(obj, i);
        div.appendChild(img);
        div.appendChild(span);
        return div;

    }
    function getToolTip(obj, i) {
        let value = "<h3>" + Object.keys(obj)[i] + "</h3>";
        let modi = Object.entries(obj)[i][1].country_modifier;
        for(let z = 0; z < Object.keys(modi).length; z++){
            let temp = 0;
            let temp2 = "";
            temp = Object.entries(modi)[z][1];
            if(Number.isInteger(temp) == false){
                temp = temp * 100;
                temp2 = temp.toString();
                temp2 += "%";
            }else{ temp2 = temp.toString();};
            value += Object.keys(modi)[z] + ": " + temp2 + "<br />"
        }
        return value;
    }
}


var EthosIconURLs = {
    fanatic_militarist: 'http://www.stellariswiki.com/images/thumb/5/55/Fanatic_Militarist.png/42px-Fanatic_Militarist.png',
    militarist: 'http://www.stellariswiki.com/images/thumb/4/44/Militarist.png/42px-Militarist.png',
    spiritualist: 'http://www.stellariswiki.com/images/thumb/b/be/Spiritualist.png/42px-Spiritualist.png',
    fanatic_spiritualist: 'http://www.stellariswiki.com/images/thumb/1/11/Fanatic_Spiritualist.png/42px-Fanatic_Spiritualist.png',
    xenophobe: 'http://www.stellariswiki.com/images/thumb/e/ed/Xenophobe.png/42px-Xenophobe.png',
    fanatic_xenophobe: 'http://www.stellariswiki.com/images/thumb/8/81/Fanatic_Xenophobe.png/42px-Fanatic_Xenophobe.png',
    collectivist: 'http://www.stellariswiki.com/images/thumb/5/5c/Collectivist.png/42px-Collectivist.png',
    fanatic_collectivist: 'http://www.stellariswiki.com/images/thumb/e/e4/Fanatic_Collectivist.png/42px-Fanatic_Collectivist.png',
    individualist: 'http://www.stellariswiki.com/images/thumb/0/0c/Individualist.png/42px-Individualist.png',
    fanatic_individualist: 'http://www.stellariswiki.com/images/thumb/0/0c/Fanatic_Individualist.png/42px-Fanatic_Individualist.png',
    xenophile: 'http://www.stellariswiki.com/images/thumb/b/b0/Xenophile.png/42px-Xenophile.png',
    fanatic_xenophile: 'http://www.stellariswiki.com/images/thumb/6/68/Fanatic_Xenophile.png/42px-Fanatic_Xenophile.png',
    materialist: 'http://www.stellariswiki.com/images/thumb/e/ef/Materialist.png/42px-Materialist.png',
    fanatic_materialist: 'http://www.stellariswiki.com/images/thumb/3/3e/Fanatic_Materialist.png/42px-Fanatic_Materialist.png',
    pacifist: 'http://www.stellariswiki.com/images/thumb/4/4a/Pacifist.png/42px-Pacifist.png',
    fanatic_pacifist: 'http://www.stellariswiki.com/images/thumb/a/ab/Fanatic_Pacifist.png/42px-Fanatic_Pacifist.png'
};
/*
$(function () {
    // add onchange listener
    $("#NoOfCircles").change(function () {
        // get the value in the textbox
        var noOfCircles = $("#NoOfCircles").val();
        // equally divide 360 by the no of circles to be drawn
        var degreeAngle = 360 / noOfCircles;
        // get handle on the wrapper canvas
        var wrapper = $(".circle-container");
        // clear it first
        wrapper.html("");
        // initialize angle incrementer variable
        var currAngle = 0;
        // draw each circle at the specified angle
        for (var i = 0; i < noOfCircles; i++) {
            //add to the wrapper */
/*
            wrapper.append(getDiv(currAngle));
            // increment the angle incrementer
            currAngle = currAngle + degreeAngle;
        }
    });
        Function returns a new DIV with the angles translation using CSS.
        It also applies a random color for fun.
        stole the CSS from :http://stackoverflow.com/questions/12813573/position-icons-into-circle
    function getDiv(currAngle) {
        return "<div class='circle' style='transform: rotate(" + currAngle + "deg) translate(12em) rotate(-" + currAngle + "deg);background-color:" + getRandomColor() + "'></div>"
    }
    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
*/