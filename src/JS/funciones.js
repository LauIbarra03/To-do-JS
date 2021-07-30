// referencia en HTML
import {ToDo} from '../classes'

import {toDoList} from '../index'

const divToDoList   = document.querySelector('.todo-list');
const txtInput      = document.querySelector('.new-todo');
const btnBorrar     = document.querySelector('.clear-completed');
const ulFiltros     = document.querySelector('.filters');
const anchorFiltros = document.querySelectorAll('.filtro');
export const crearToDoHTML = (toDo) =>{
    const htmlToDo = 
    `<li class="${ (toDo.completado) ? 'completed':''}" data-id="${toDo.id}"> 
        <div class="view">
            <input class="toggle" type="checkbox"${(toDo.completado) ? 'checked':''}>
            <label>${ toDo.tarea }</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="Create a TodoMVC template">
    </li>`

    const div = document.createElement('div');
    div.innerHTML = htmlToDo;

    divToDoList.append( div.firstElementChild );

    return div.firstElementChild;
}

// Eventos 

txtInput.addEventListener('keyup',(event) =>{// el key up es la ultima letra que se apreto y el event, me muestra un array con lo hace  

    if(event.keyCode == 13 && txtInput.value.length > 0){// si la ultima letra que apreto fue enter, el keycode del enter es 13
        const nuevoToDo = new ToDo(txtInput.value); // el nuevo valor del ToDo
        toDoList.nuevoToDo(nuevoToDo);
        crearToDoHTML( nuevoToDo );// uso la funcion de antes para agregar el nuevo ToDo
        txtInput.value = '';
    }


});


divToDoList.addEventListener('click',(event) =>{

    const nombreElemento = event.target.localName;// me dice el nombbre dsp de que le haga click
    const todoElemento   = event.target.parentElement.parentElement;// me hace referencia completa al html, ya que si dsp borro esto, se borra el html
    const todoId         = todoElemento.getAttribute('data-id');// me da el atributo

    if (nombreElemento.includes('input')){// so el nombre del elemento incluye input
        toDoList.marcarCompletado(todoId);
        todoElemento.classList.toggle('completed');// el classList hace referencia a todas las clases 
    } else if (nombreElemento.includes('button')){ // si incluye un boton

        toDoList.eliminarToDo(todoId);
        divToDoList.removeChild(todoElemento);// remueve al que concida
    }
    
});

btnBorrar.addEventListener('click', ()=>{

    toDoList.eliminarCompletado();

    for(let i = divToDoList.children.length-1; i >= 0; i-- ){

        const elemento = divToDoList.children[i];// recupero todo el li y se imprimen en orden inverso

        if (elemento.classList.contains('completed')){// entro a las clases del elemento y pregunto si contiene esa clase
            divToDoList.removeChild(elemento);
        }
    }

})

ulFiltros.addEventListener('click',(event) =>{
    const filtro = event.target.text;
    if(!filtro){
        return;
    }


    anchorFiltros.forEach(elem => {
        elem.classList.remove('selected');
        
    });

    event.target.classList.add('selected');

    for (let elemento of divToDoList.children){
        elemento.classList.remove('hidden');
        const completado = elemento.classList.contains('completed');

        switch( filtro ){
            case 'Pendientes':
                if (completado){
                    elemento.classList.add('hidden');
                }
                break;
            case 'Completados':
                if (!completado){
                    elemento.classList.add('hidden');
                }
            break;
        }
    }
});