// Defindo objecto em javascript

const Danielson = {
    firstName:"Danielson",
    lastName:"Cardoso",
    name:"Da",
    age:20,
    fullName:function(){
        return this.firstName + " " +this.lastName;
        
    },
    getAge: function (){
        return this.age;
    },
    showName(template){
       console.log(template + " " + this.firstName)
    },
    getName(){
        return this.name;
     }
}
 



// si nu cre muda informação de um objecto usamos objecto.propriedade é igual a valor que nu cre,exemplo:
Danielson.name="De"
Danielson.age=21;
Danielson.adress="Santiago"
console.log(Danielson.name)
console.log(Danielson.age)
console.log(Danielson.adress)

console.log(Danielson.getAge());
console.log(Danielson.getName());
console.log(Danielson.fullName());
Danielson.showName("Sou");

function Person(firstName,lastName){
   this.firstName = firstName;
   this.lastName = lastName;
}

const denise= new Person("Denise", "Carvalho");
const analina= new Person("Analina", "Robalo");
console.log(" Seu nome é ", denise.firstName + " " + denise.lastName);
console.log(" Seu nome é ", analina.firstName + " " + analina.lastName);

function course(){


}
 console.log("Fora da função",this);
 console.log("Fora da função",this.firstName);

 // criando classe em javscript

 class People{
    constructor(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setName(name){
        this.name.name;
    }
 }
