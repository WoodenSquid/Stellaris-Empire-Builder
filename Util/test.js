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
        let key = Object.keys(obj);
        let arr = ['civic_', 'ethic_', 'auth_', '_'];
        for(let x = 0; x < Object.keys(obj).length; x++){
            console.log(contains(key[x], arr));
        }

        function contains(target, pattern){
            var value = 0;
            pattern.forEach(function(word){
                value = value + target.includes(word);
            });
            return (value === 1)
        }
        return obj;
    },
    cleanObj: function (obj){
        let num = 0;
        //console.log(obj);
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
        for(let i = 0; i < test.length; i++){
            [test[i]].forEach(e => delete obj[e]);
        }
        let obj2 = combinedArticles.cleanName(obj);
        return obj;
    },
    doCallBack: function (){

    }

}

