/*
By Jordan(JAM)
*/
class Main{
    constructor(){
        this.name="Jordan"
    }

    names(){
        return this.name
    }

    countries(){
        return "Ghana"
    }

}


function mainProxy(){
    var cacheData = {}

    var main = new Main()

    return {
        names(){
            if(!cacheData["names"]) cacheData["names"] = main.names()

            return cacheData["names"]
        },
        countries(){
            if(!cacheData["countries"]) cacheData["countries"] = main.countries()

            return cacheData["countries"]
        },

        numReq(){
            return Object.keys(cacheData).length;
        }

    }
}

obj = new mainProxy()

console.log(obj.countries() ) 
console.log(obj.countries() ) 
console.log(obj.countries() ) 
console.log(obj.countries() ) 
console.log(obj.countries() ) 
console.log(obj.countries() ) 
console.log(obj.names() ) 
console.log(obj.names() ) 
console.log(obj.names() ) 
console.log(obj.names() ) 
console.log(obj.numReq() ) 










