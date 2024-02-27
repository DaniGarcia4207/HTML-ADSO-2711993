//variables
const formulario = document.querySelector('#formulario')
const tituloFormulario = document.querySelector('#titulo-formulario')
const task = document.querySelector('.tareas')
const no_hay_tareas = document.querySelector('#no-hay-tareas')
const total = document.querySelector('#total')
const completados = document.querySelector('#completados')
let tareas=[]
let cont = 0;
let completada = 0;

//Eventos
formulario.addEventListener("submit", validarFormulario)
task.addEventListener("click", eliminarTarea)
task.addEventListener("click", tareaCompletada)


//funciones
function validarFormulario(e){
    e.preventDefault()
    //validar los datos
    const tarea = document.querySelector('#tarea').value
    if(!tarea.trim()){//El metodo trim() elimina los espacios en blanco en ambos extremos del string.
        //alert("formulario vacio")
        tituloFormulario.textContent = "Formulario vacio"
        setTimeout(()=>{
            tituloFormulario.textContent = "Formulario"
        },2000)
        return
    }

    //crear un objeto para guardar la tarea ingresada por teclado
    const objTarea ={
        id: Date.now(),
        tarea: tarea,
        estado: false
    }
    tareas =[...tareas, objTarea]
    cont = cont+1;
    total.textContent = `Total: ${cont}`
    formulario.reset()
    mostrarHtml()
}

function mostrarHtml(){
    task.innerHTML=""
    if(tareas.length === 0){
        const mensaje = document.createElement("h2")
        mensaje.textContent = "No hay tareas"
        return
    }
    else{
        tareas.forEach((item) => {
            const itemTareas = document.createElement("div")
            itemTareas.classList.add("item-tarea")
            itemTareas.innerHTML=`
            ${item.estado ? (`<p class="completa">${item.tarea}</p>`) : (`<p>${item.tarea}</p>`)}
            <div class="botones">
                <button data-id="${item.id}" class="eliminar">X</button>
                <button data-id="${item.id}" class="completada">?</button>
            </div>
            `
            task.appendChild(itemTareas)
        })
    }
}

function eliminarTarea(e){
    if(e.target.classList.contains("eliminar")){
        const tareaId = Number(e.target.getAttribute("data-id"))
        //eliminando Tarea
        const newTask = tareas.filter((item) =>item.id !== tareaId)
        tareas = newTask
        cont --;
        total.textContent = `Total: ${cont}`
        mostrarHtml()
    }
}

function tareaCompletada(e){
    if(e.target.classList.contains("completada")){
        const tareaId = Number(e.target.getAttribute("data-id"))
        //completando tarea
        const newTask = tareas.map((item) =>{
            if(item.id == tareaId){
                item.estado = !item.estado
                completada ++;
                completados.textContent = `Completadas: ${completada}`
                return
            }
            else{
                return item
            }
        })

        mostrarHtml()
    }
}