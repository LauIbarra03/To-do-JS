import { ToDo } from "./to-do.class";

export class ToDoList{


    constructor(){
        // this.toDos = [];
        this.cargarLocalStorage();
    }

    nuevoToDo(toDo){
        this.toDos.push(toDo);
        this.guardarLocalStorage();

    }
    eliminarToDo( id ){
        this.toDos = this.toDos.filter( toDo => toDo.id != id );// el filter crea un nuevo array con todos los elementos que cumplan la condición implementada por la función dada
        this.guardarLocalStorage();
    }

    marcarCompletado( id ){

        for (const todo of this.toDos){

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }

        }


    }

    eliminarCompletado (  ) {
        this.toDos = this.toDos.filter( toDo => !toDo.completado );
        this.guardarLocalStorage();
    }

    guardarLocalStorage(){
        localStorage.setItem('to-do', JSON.stringify(this.toDos));// me le JSON.stringfy, me convierte el arreglo a una JSON perfecto

    }
    cargarLocalStorage(){
        // if (localStorage.getItem('to-do')){// le pregunto si existe el to-do
        //     this.toDos = JSON.parse(localStorage.getItem('to-do'));// lo vuelve a transformar en lo que era antes
        // } 
        // else{
        //     this.toDos = [];
        // }
        this.toDos = (localStorage.getItem('to-do')) 
                    ? JSON.parse(localStorage.getItem('to-do')) 
                    : [];
        this.toDos = this.toDos.map( obj => ToDo.fromJSON(obj) );// me permite barrera cada uno de los elementos del array y retornar un nuevo array con cada uno de sus objetos mutados
    }
} 