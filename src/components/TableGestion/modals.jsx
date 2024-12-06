import React from 'react'

export const Modal1 = () => {
    return (

        <dialog id="my_modal_1" className="modal">
            <div className="modal-box max-w-sm">
                <form method="dialog">

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Nuevo Empleado!</h3>
                <label className="input input-bordered flex items-center mt-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 mr-3">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="text" className="grow" placeholder="Username" id='empleado' />
                </label>
                <div className="modal-action">
                    <button className="btn btn-primary" type='submit' >
                        Guardar
                    </button>
                </div>
            </div>
        </dialog>
    )
}

export const Modal2 = () => {
    return (

        <dialog id="my_modal_2" className="modal">
            <div className="modal-box max-w-sm">
                <form method="dialog">

                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h3 className="font-bold text-lg">Agregar Kilos!</h3>
                <label className="input input-bordered flex items-center mt-6">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70 mr-3">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
                    </svg>
                    <input type="number" className="grow" placeholder="Kilos" id='empleado' />
                </label>
                <div className="modal-action">
                    <button className="btn btn-primary" type='submit' >
                        Guardar
                    </button>
                </div>
            </div>
        </dialog>
    )
}
