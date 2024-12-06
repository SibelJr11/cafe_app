import React  from 'react'
import { useSelector } from 'react-redux';
import HeaderTable from './headerTable';
import FooterTable from './footerTable';
import { Modal1, Modal2 } from './modals';

const TableGestion = () => {
  const precioArroba = useSelector(state => state.precioArroba.precio);

  const empleados = [
    {
      id: 1,
      empleado: "Juan Perez",
      kilos: 61,
      salario: 2500,
    },
    {
      id: 2,
      empleado: "Maria Lopez",
      kilos: 110,
      salario: 2300,
    },
    {
      id: 3,
      empleado: "Carlos Ramirez",
      kilos: 333,
      salario: 2800,
    },
    {
      id: 4,
      empleado: "Ana Torres",
      kilos: 348,
      salario: 2200,
    },
   
  ];


  const convertirAPesosColombiano =(numero)=> {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0, // Para evitar decimales
    }).format(numero);
  }

  const calcularSalario =(kilos)=>{
    const valor_Kilo = precioArroba/12.5;
    const valor_Salario =kilos*valor_Kilo;
    return convertirAPesosColombiano(valor_Salario);
  }


  return (
    <div className="overflow-x-scroll ">
      <HeaderTable/>
      <Modal1/>
      <Modal2/>
      


    <div className='table size-full border-separate border-spacing-0 sm:table-md lg:table-lg '>
      <thead className='text-center bg-green-950 text-sm text-white '>
          <th>Id</th>
          <th>Empleado</th>
          <th>Kilos</th>
          <th>Salario</th>
          <th>Opciones</th>
      </thead>
      <tbody>
        {empleados.map((e)=>(
          <> 
         <tr>
            <th className= "border-b border-gray-300" >{e.id}</th>
              <td className="border-b border-gray-300">
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                        alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{e.empleado}</div>               
                  </div>
                </div>
              </td>
              <td className="border-b border-gray-300">
               {e.kilos}           
              </td>
              <td className='font-bold text-lg text-center border-b border-gray-300'>{calcularSalario(e.kilos)}</td>
              <th className='h-auto flex justify-center gap-2 flex-wrap border-b border-gray-300'>
                <button className="btn btn-sm text-white btn-success " onClick={()=>document.getElementById('my_modal_2').showModal()}> Kilos</button>
                <button className="btn btn-sm text-white btn-success ">Pagar</button>
              </th>
      
         </tr>
         </>
))}    
      </tbody>
    </div>
 
   

    </div>

  )
}

export default TableGestion