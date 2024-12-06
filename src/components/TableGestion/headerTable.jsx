import React from 'react'

const HeaderTable = () => {
  return (
           <div className='w-full flex justify-between mb-4'>
               <h2 className='font-bold  text-black text-xl'>Tabla de Gestión</h2>
               <button className='btn btn-md  btn-accent' onClick={()=>document.getElementById('my_modal_1').showModal()}>Nuevo Empleado</button>
         </div> 
  )
}

export default HeaderTable