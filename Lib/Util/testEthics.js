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