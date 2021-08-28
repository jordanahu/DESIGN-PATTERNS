//Fluid API(interface)


class Country{
    constructor(name){
        this.name = name
    }
}


var BuilderCountry = (function(){
    function BuilderCountry(name){
        this.name = new Country(name);
    }
    BuilderCountry.prototype = {
        getRace(race){
            this.name.race = race;
            return this;
        },
        getNumber(num){
            this.name.num = num;
            return this;
        },
        getLang(lan){
            this.name.lang = lan;
            return this;
        },
        build(){
            return this.name;
        }
    }

    return BuilderCountry;
})();

var country = new BuilderCountry("Ghana")
console.log(country)
country.getRace("African").getLang("British English")
console.log(country.build())