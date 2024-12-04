const user ={
    name: "João",
    age: 20,

    showName(){
        console.log(this.name)
    }
}

const otherUser ={
    name: "Maria",
    age: 28,

    showName(){
        console.log(this.name)
    }
}


console.log(user.name);
user.showName()

otherUser.showName()


class User{
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    name: string = 'Fabio'
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    age: number = 42

    showName(){
        console.log(this.name)
    }
}

const userN = new User()
userN.showName()


class User2{
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    name: string = 'Fabio'
    // biome-ignore lint/style/noInferrableTypes: <explanation>
    age: number = 42

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    
    showName(){
        console.log(this.name)
    }
}

const userN2 = new User2("Fabio", 43)    
userN.showName()