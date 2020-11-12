combinedArticles = {

    init: function (obj){

        let obj2 = combinedArticles.cleanObj(obj);
        return obj2;
    },
    changeName: function (obj){

        //return obj2;
    },
    capitalizeFirstLetter: function (){

    },
    cleanName: function (obj){
        //let oldKey = Object.keys(obj);
        let arr = ['civic_', 'ethic_', 'auth_', ];

        //key.forEach(((value, index) => {
        //    arr.forEach(((value1, index1, array) => {
        //        let test = key[index].replace(value1, "");
        //        delete Object.assign(obj, {[test]: obj[value] })[value];
        //        //console.log(key[index] + " TO => " + test);
        //        //console.log(obj);
        //    }));

        //}));

        let newWordsObject = {};

        Object.keys(obj).forEach((key,  index) => {
            //console.log(key)
            let oldKey = Object.keys(obj)[index];
            let newKey;
            //Object.keys(obj).forEach(key => {
                arr.forEach(((value1, index1, array) => {
                    //console.log(oldKey, " ==> ", value1)
                    if(oldKey.includes(value1)){
                        //console.log("!!They Match!! ")
                        //console.log("OldKey == ", oldKey)
                        //console.log("NewKey === ", newKey)
                        //console.log("Key == ", key)
                        if (key === oldKey) {
                            newKey = Object.keys(obj)[index].replace(value1, "");
                            //console.log("new key == ", newKey)
                            //newKey = Object.keys(obj)[index].replace(value1, "");
                            let newPair = { [newKey]: obj[oldKey] };
                            newWordsObject = { ...newWordsObject, ...newPair }
                            //console.log("new Object == ", newWordsObject)
                        } else {
                            newWordsObject = { ...newWordsObject, [key]: obj[key] }
                        }

                    }//else{console.log("!!They dont match!!")}
                    //delete Object.assign(obj, {[test]: obj[value] })[value];
                            //console.log(key[index] + " TO => " + test);
                            //console.log(obj);

                    //console.log(newKey)
                    //console.log(newKey)
                }));

            //});
        });





        //console.log(key);
        //obj.forEach(console.log("test" ));
        //arr.forEach(function (val) {


        //conditions.some(el => str1.includes(el));
        //})
        let toDelete = [];
        //key.forEach(key2 => {
        //    if(arr.some(el => key2.includes(el))){
        //        toDelete.push(key2);
        //    }
        //});
        //key.forEach(key3 => {
        //    if(contains(key3, arr)){this.objDelete()}
        //});


        //for(let x = 0; x < Object.keys(obj).length; x++){
        //    let toDelete = [];
        //    if(arr.some(el => key[x].includes(el))){
        //        console.log(key[x], " true ")
        //        toDelete.push(key[x]);
        //    }
        //}

        function contains(key, arr){
            arr.forEach(function(word){
                //value = value + target.includes(word);
                //console.log(value);
            });
            return false;
        }
        return newWordsObject;
    },
    contains: function (){

    },
    objDelete: function (obj, toDelete){
        for(let i = 0; i < toDelete.length; i++){
            [toDelete[i]].forEach(e => delete obj[e]);
        }
        return obj;
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
        //console.log(test);
        this.objDelete(obj, test);
        //for(let i = 0; i < test.length; i++){
        //    [test[i]].forEach(e => delete obj[e]);
        //}

        return this.cleanName(obj);
    },
    doCallBack: function (){

    }

}

