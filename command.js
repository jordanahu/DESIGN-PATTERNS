class Subject{
    constructor(){
        this.names = []
        this.history = []
    }

    execute(command){
        command.execute(this.names)
        this.history.push(command)
    }

    undo(){
        var command = this.history.pop()
        command.undo(this.names)
    }
}

class RegisterNames{

    constructor(names){
        this.names = names;
    }
    execute(names){
         names.push(...this.names)
    }
    undo(names){
        // names.splice(names.indexOf(name), 1)
        names.pop()
    }

}

var people = new Subject();

var regisCommand = new RegisterNames(["Jordan", "Michael", "Edward"])

people.execute(regisCommand)

console.log(people.names)

people.undo()

console.log(people.names)

