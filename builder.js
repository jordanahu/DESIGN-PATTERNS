//By Jordan(JAM)
function me(){
    return {
        joe(){
            this.name="jam"
            return {name:this.name}
        },
        mike(){
            this.age="20"
            return {age:this.age}
        },
        comp(){
            return {...this.joe(),
            ...this.mike()}
        }
    }
}

a = new me()
function dire(){
    this.yes=function(build){
        this.name=build.joe()
        this.age=build.mike()
        this.show=build.comp()
    }
}


b = new dire()
b.yes(a)
console.log(b)