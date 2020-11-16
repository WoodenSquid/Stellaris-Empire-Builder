combinedArticles = {

    init: function (obj){

        let obj2 = combinedArticles.cleanObj(obj);
        return obj2;
    },
    changeName: function (obj){

        //return obj2;
    },
    capitalizeFirstLetter: function (string){
        // noinspection JSUnresolvedFunction
        string = string.toLowerCase();
        return string.charAt(0).toUpperCase() + string.slice(1);
    },
    cleanName: function (obj){
        let arr = ['civic_', 'ethic_', 'auth_', 'HUM', 'NECROID', 'LITHOID', 'PLANT', 'FUN', 'MOL', 'ART', 'AVI', 'REP', 'MAM'];
        let newWordsObject = {};
        Object.keys(obj).forEach((key,  index) => {
            let oldKey = Object.keys(obj)[index];
            let newKey;
                arr.forEach(((value1, index1, array) => {
                    if(oldKey.includes(value1)){
                        if (key === oldKey) {
                            newKey = Object.keys(obj)[index];
                            if(index1 < 3) {
                                newKey = newKey.replace(value1, "");
                                newKey = newKey.replaceAll('_', " ");
                                newKey = this.capitalizeFirstLetter(newKey);
                            }else{
                                newKey = changeName(newKey);
                                newKey = this.capitalizeFirstLetter(newKey);
                            }
                            // create new object with new key values
                            let newPair = { [newKey]: obj[oldKey] };
                            newWordsObject = { ...newWordsObject, ...newPair }
                        } else {
                            newWordsObject = { ...newWordsObject, [key]: obj[key] }
                        }
                    }
                }));

        });
        //TODO Load and change these based on json file
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
        //The some() method tests whether at least one element in the array passes the test implemented by the provided function.
        //conditions.some(el => str1.includes(el));

        function contains(key, arr){
            arr.forEach(function(word){
                //value = value + target.includes(word);
            });
            return false;
        }
        return newWordsObject
    },
    contains: function (){

    },
    objDelete: function (obj, toDelete){
        for(let i = 0; i < toDelete.length; i++){
            [toDelete[i]].forEach(e => delete obj[e]);
        }
        return obj;
    },
    textCleaner: function(str) {
        return str.replace(/_/g, " ").replace(/(\b[a-z](?!\s))/g,
            function(x) {return x.toUpperCase();});
    },
    cleanObj: function (obj){
        let num = 0;
        let test = ["ethic_categories",]
        for(let x = 0; x < Object.keys(obj).length; x++){
            if(Object.keys(obj)[x] === "auth_ancient_machine_intelligence"){test.push(Object.keys(obj)[x])};
            if('playable' in Object.entries(obj)[x][1]){
                // noinspection JSUnresolvedVariable
                if('always' in Object.entries(obj)[x][1].playable){
                    // noinspection JSUnresolvedVariable
                    if(Object.entries(obj)[x][1].playable.always === false){test.push(Object.keys(obj)[x]);}
                }
            }
        }
        this.objDelete(obj, test);
        return this.cleanName(obj);
    },
    doCallBack: function (){

    }

}

