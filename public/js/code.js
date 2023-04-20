
                       

const modelodatospersonales = new bootstrap.Modal(document.getElementById('modelodatospersonales'))

const on = (element, event, selector, handler) => {
    element.addEventListener (event, e => {
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

           
on(document,'click','.btnEditar', e =>{
    const fila = e.target.parentNode.parentNode
    id_editar.value = fila.children[0].innerHTML
    apellido_editar.value = fila.children[1].innerHTML
    Precio_editar.value = fila.children[2].innerHTML
    telefono_editar.value = fila.children[3].innerHTML
    email_editar.value = fila.children[4].innerHTML
    modelodatospersonales.show()
})