export class ToDo{

    static fromJSON( {id,tarea,completado,creado} ){
        const tempToDo = new ToDo(tarea);

        tempToDo.id         = id;
        tempToDo.completado = completado;
        tempToDo.creado     = creado;

        return tempToDo;
    }


    constructor ( tarea ) {
        this.tarea = tarea;

        this.id    = new Date().getTime();
        this.completado = false;
        this.creado = new Date();
    }

    imprimirClase(){
        console.log( `${this.tarea} - ${this.id}` );
    }
}