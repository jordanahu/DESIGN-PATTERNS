//BY JAM

var {log:l} = console;

class Mediator{
    constructor(){
        this.colleagues = {}
    }

    register(colleague){
        if(!this.colleagues[colleague.name]){
            this.colleagues[colleague.name] = colleague
        }
        colleague.mediator = this;
    }

    send(message, from, to){
        if(to){
            to.receive(message, from)
        }else{
            for(let key in this.colleagues){
                if(from !== this.colleagues[key]){
                    this.colleagues[key].receive(message, from)
                }
            }
        }
    }
}

class Boys{
    constructor(name){
        this.name = name;
        this.mediator = null;
    }

    send(message, to){
        this.mediator.send(message, this, to)
    }

    receive(message, from){
        l(`Message: ${message}\n from: ${from.name}`)
    }
}

class Girls{
    constructor(name){
        this.name = name;
        this.mediator = null;
    }

    send(message, to){
        this.mediator.send(message, this, to)
    }

    receive(message, from){
        l(`Message: ${message}\n from: ${from.name}`)
    }
}




let mediator = new Mediator()
let boy = new Boys("Jordan")
let girl = new Girls("Maryam")


mediator.register(boy)
mediator.register(girl)
boy.send("This is Jam", girl)
girl.send("hi Jam", boy)