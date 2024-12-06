import { useDispatch, useSelector } from 'react-redux';
import { actualizarPrecioArroba } from './store/slices/coffeePriceSlice';
import  {actualizarEstado} from './store/slices/stateSlice'


const Navbar=()=> {
  
      const dispatch = useDispatch();
      const estado = useSelector(state => state.estado);

      const handleSelectChange = (e) => {
        const precio = parseInt(e.target.value, 10); // Convierte el valor a número
        dispatch(actualizarPrecioArroba(precio)); // Despacha la acción de Redux
        dispatch(actualizarEstado());
      };

   

  return (
    <>
     <div className="navbar  bg-green-500 ">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl text-cyan-50">Cafe App</a>
  </div>

  <div className="flex-none gap-2">
      <select className="select w-full max-w-xs text-lg"  onChange={handleSelectChange}>
      <option value={'10000'}>$ 10.000</option>
      <option value={'12000'}>$ 12.000</option>
      <option value={'13000'}>$ 13.000</option>
      <option value={'14000'}>$ 14.000</option>
      <option value={'15000'}>$ 15.000</option>
    </select>
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Perfil
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Configuraciones</a></li>
        <li><a>Salir</a></li>
      </ul>
    </div>
  </div>
</div>
    </>
  )
}

export default Navbar
