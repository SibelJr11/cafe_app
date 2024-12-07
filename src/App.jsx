
import './App.css'
import Navbar from './components/Navbar'
import TableGestion from './components/TableGestion/Table'

function App() {

  return (
    <>
    <h1>HOLA que </h1>
    <div className='drawer bg-green-50 w-full h-screen lg:drawer-open'>
       <input id="my-drawer-3" type='checkbox'  className='drawer-toggle'/>
       <div className='drawer-content relative'>
           <Navbar/>
           <div className='w-full bg-grey-200 p-8 flex flex-col justify-center '>
                   
               <TableGestion/>
               
         </div>
        {/*<Footer/>*/}
       </div>
       <div className='drawer-side'>
       <label htmlFor="my-drawer-3" aria-label="close sidebar" className='drawer-overlay'></label>
          <ul className='menu bg-green-100 min-h-full  w-60 p-4 gap-2  text-emerald-950' >
              <li><a>Tabla de Contabilidad</a></li>
              <li><a>Gastos e Ingresos</a></li>
              <li><a>Datos de Mi finca</a></li>
              <li><a>Precios del Cafe</a></li>
          </ul>
      </div>         
    </div>
 
    </>
  )
}

export default App
