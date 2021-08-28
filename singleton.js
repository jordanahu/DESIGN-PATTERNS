//By Jordan(JAM)
var me = (function(){
    var yes;
    var count= 0;
   function jam(){
       this.count= count;
        if(!yes){
        yes = this;
    }
    return yes
   }
   jam.prototype.you=function(){
       this.count++
   }
    return jam
})()


var obj = new me()
obj.you()
console.log(obj)
var obj1 = new me()
console.log(obj1)