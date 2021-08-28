

var Subject = (function(){
    function Subject(text){
        this.text = text;
        this.observers = [];

    }

    Subject.prototype = {
        subscribe(observer){
            this.observers.push(observer)
        },
        unsubscribe(observer){
            var index = this.observers.indexOf(observer)
            this.observers.splice(index, 1)
        },
        notify(observer){
            if(this.observers.indexOf(observer ) >= 0){
                 this.observers.find(x=>x==observer).text = this.text 
                 console.log("results")
            }
            else console.log("not subscribed")
        }
    }
    
    return Subject;
})();


var subject = new Subject("Hi friend!");

var sync = {}
subject.subscribe(sync)

subject.notify(sync)
console.log(subject.observers)










