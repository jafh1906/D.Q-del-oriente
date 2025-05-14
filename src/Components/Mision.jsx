import React from 'react'
import imgMision from '../assets/images/imgMision.webp'

export const Mision = () => {
  return (
    <>
    <section className='pl-[3%]'>
        <div className='bg-white w-[70%] flex items-center px-5 py-5 rounded-4xl'>
            <div className='px-5 flex flex-col items-center'>
                <h1 className='letra-1 text-center text-4xl'>
                    Misión
                </h1>
                <span className='bg-[#006b96] h-[3px] w-full my-5'></span>
                <p className='letra-3 w-[520px] text-justify'>
                    Distribución Química del Oriente tiene como misión la satisfacción oportuna y responsable a las necesidades del cliente, suministrando productos de optima calidad, garantizando su eficiencia para mantener el liderazgo en servicio.
                </p>
            </div>
            <div className='imgMision rounded-4xl'>
                <img className='rounded-4xl' src={imgMision} alt="" />
            </div>
        </div>
    </section>
    </>
  )
}
