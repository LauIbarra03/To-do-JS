import './styles.css';
import {ToDo, ToDoList} from './classes/index';
import { crearToDoHTML } from './JS/funciones';


export const toDoList = new ToDoList();

toDoList.toDos.forEach(toDo => crearToDoHTML( toDo ));

console.log(toDoList.toDos);
// toDoList.toDos[0].imprimirClase();

// const newToDo = new ToDo('La del diego');
// newToDo.imprimirClase();
// console.log('to-do:',toDoList.toDos)


// const tarea = new ToDo('Aprender JS');

// toDoList.nuevoToDo( tarea );

// crearToDoHTML( tarea );

// el session storage se borra todo cuando cierro el navegador
// el locale storage no posee tiempo de expiracion  

// localStorage.setItem('mi-key','ABC123');// crea un local storage con una key y un valor
// sessionStorage.setItem('mi-key','ABC123');// crea un session storage con una key y un valor

// setTimeout(()=>{

//     localStorage.removeItem('mi-key');// borra un item y le doy el valor de la llave que quiero borrar

// },1500);// va a ejectuar esta instruccion en 1 segundo y medio   