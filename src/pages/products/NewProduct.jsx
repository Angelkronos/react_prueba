import React, { useState } from 'react'

export default function NewProduct(){
  const [form, setForm] = useState({ name:'', price:'' })

  function onChange(e){
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function onSubmit(e){
    e.preventDefault()
    // Aquí normalmente haríamos una llamada para crear un producto.
    alert(`Creando producto: ${form.name} — $${form.price}`)
    setForm({ name:'', price:'' })
  }

  return (
    <div style={{padding:'1rem'}}>
      <h2>Nuevo Producto</h2>
      <form onSubmit={onSubmit} style={{display:'grid',gap:8,maxWidth:480}}>
        <label>
          Nombre
          <input name="name" value={form.name} onChange={onChange} />
        </label>
        <label>
          Precio
          <input name="price" type="number" value={form.price} onChange={onChange} />
        </label>
        <button type="submit">Crear</button>
      </form>
    </div>
  )
}
