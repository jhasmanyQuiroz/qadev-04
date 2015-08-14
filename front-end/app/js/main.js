/**
 * Created by jhasmanyquiroz on 8/10/2015.
 */
var sayHello = function () {
    //Ctrl + alt + v
    var message = "Hi New World ...";
    console.log(message);

    // Las lineas 6 y 7 solo se ejecutan cuando el metodo es llamado
    //sayHello

    //Para debaguear recomendable poner en la primera linea de la funcion
    // en este caso 6

    //Al crear variables, estos se convierten en propiedades de Window
    // Determinar el tipo de una propiedad o funcion: Window.console [enter]
};

var sayHelloParameter = function(name){
    var message = "Mi nombre es: " + name;
    console.log(message);
};

// Creacion de objetos
    // pepe = new Object();
    //luis = {} -- tipo json
    // Person = function(){}
/**
 * Class Description ...
 * @param name
 * @param age
 * @constructor
 */
var Person = function(name, age){
    this.name = name;
    this.age = age;

    /**
     * Function to see the name of person
     */
    this.sayHello = function(){
        console.log("Hello, my name is: " + this.name);
    };
}