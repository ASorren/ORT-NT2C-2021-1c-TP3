const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// variables a usar

const list = document.querySelector('#todo-list')
const itemCountSpan = document.querySelector('#item-count')
const uncheckedCountSpan = document.querySelector('#unchecked-count')

// se pone let y no const porque es variable (array donde acumulas tareas del prompt)
let tareas = [];


//clase que va al array

class Tarea {
  
  // constructor de la clase (viene por parametro el titulo)
  constructor(titulo){
    this.titulo = titulo;
    this.terminada = false;
  }

}

function agregarTarea(){
  const titulo = prompt('Ingrese tarea');
  // se crea una tarea con el contenido de lo que pongas en el prompt
  const tarea = new Tarea(titulo);

  // se agrega al Array
  tareas.push(tarea);

  renderizarArray();

}

function renderizarArray(){

  list.innerHTML = '';

  tareas.forEach((tarea)=>{
    // creo el checkbox de tarea cumplida o no
    const cb = document.createElement('input')
    // le doy atributos
    cb.type = 'checkbox';
    cb.checked = tarea.terminada;
    cb.onchange = togglebox.bind(tarea);

    // creo el span (donde va cada tarea);
    const span = document.createElement('span');
    span.className = classNames.TODO_TEXT;
    span.textContent = tarea.titulo;

      // creo la lista donde van a ir todos los span
    const li = document.createElement('li');
    li.className = classNames.TODO_ITEM;
    
        // le hago el append correspondiente de padre a hijos
        li.appendChild(span);
        li.appendChild(cb);
        list.appendChild(li);

          // Esto sirve para el contador de tareas que declaramos arriba 
          // uno solamente va con el .lenght(ya que es un array)
          // declaras un unchecjed y lo asignas a al span  y haces ++ si es no terminada
       itemCountSpan.innerHTML = tareas.length
       let unchecked = 0
       tareas.forEach((t)=> {
         if (!t.terminada)
            unchecked++
    })
    uncheckedCountSpan.innerHTML = unchecked




  } )

  
}

function togglebox(eventito) {

  this.terminada = eventito.target.checked
  renderizar()

}



