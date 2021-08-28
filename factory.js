class Factory{
  constructor(type, attrs, objs){
    this.type = type;
    this.attrs = attrs;
    this.objs = objs;
  }

  createObj(){
    return new this.objs[this.type](...this.attrs);
  }
}


function Info(name, color){
  this.name = name;
  this.color = color;
}

function Details(country, lang){
  this.country = country;
  this.lang = lang;
}

let dictOfObjs = {Info, Details};

let obj1 = new Factory("Info", ["JAM", "Dark"], dictOfObjs).createObj();

console.log(obj1)

let obj2 = new Factory("Details", ["Iran", "Persian"], dictOfObjs).createObj();

console.log(obj2)




