function foo(){
    this.a = "jam"
}

obj = new foo()
console.log(obj.a)

function objDeco(obj){
    obj.a += " jordan"
}

objDeco(obj)

console.log(obj.a)