// import bgNavBar from '../assets/images/bgNavBar.png'
import bgNavBar2 from '../assets/images/bgNavBar2.png'
import LOGO from '../assets/images/LOGO.webp'

export const NavBar = () => {
  return (
    <>
    <div className="h-[150px] mt-[-4px] letra-2 bg-cover bg-center px-[10%]" style={{ backgroundImage: `url(${bgNavBar2})` }}>
      <div className='flex items-center justify-between'>
        <div className='w-[200px]'>
          <img src={LOGO} alt="logo" />
        </div>
        <div className='flex gap-10 text-white'>
          <div>Inicio</div>
          <div>Productos</div>
          <div>Servicios</div>
          <div>Nosotros</div>
        </div>
      </div>
    </div>
    </>
  )
}