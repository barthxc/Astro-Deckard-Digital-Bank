import './Navbar.css';
import Logo from "../Logo/Logo";
import { useState } from 'react';
const Navbar = () => {
  const [isopen,setIsopen] = useState(false);

  return (
    <>
    <header className="flex justify-around items-center mt-4 max-[978px]:flex-col mb-20">
      <img src="toolsimg/AbstractNav.png" className="absolute top-0 left-0 -z-20" alt="Adorno Abstacto arriba-izquierda" />
      <div className="flex flex-row gap-3 items-center">
        <Logo />
        <p className="text-2xl text-[#9E30A9]">
          D<span className="text-[#4090b5]">D</span>B
        </p>
      </div>
      <nav className="flex justify-between text-2xl text-white max-[760px]:hidden">
        <ul className="flex justify-start gap-10 menu ">
          <li><a href="" className="efecto-azul">Inicio</a></li>
          <li><a href="" className="efecto-azul">Productos</a></li>
          <li><a href="" className="efecto-azul">Nosotros</a></li>
          <li><a href="" className="efecto-azul">Seguridad</a></li>
          <li><a href="" className="efecto-morado">Regístrate</a></li>
          <li><button className="efecto-morado" onClick={()=>{setIsopen(true)}}>Login</button></li>
        </ul>
      </nav>
    </header>
    {/* MODAL */}
    {isopen &&(
      <div className="fixed z-10 left-1/2 top-1/2 m-w-[900px] p-5 bg-[#27262C] overflow-auto translate-y-[-50%]	translate-x-[-50%]	rounded-xl	 ">
      <div className="flex flex-row justify-end m-5 ">
          <button className="text-[#4090B5] font-bold text-2xl p-2 px-4 rounded-full border border-[#4090B5] hover:bg-[#4090b540]"
            onClick={()=>{setIsopen(false)}}
          >
                  X
          </button>
      </div>
      <div className="flex flex-col justify-center items-center gap-5">
          <form action="" className='flex flex-col gap-10 text-2xl'>
              <div>
              <input type="text" placeholder="Username" className='text-[#B3B3B3] bg-transparent border-b border-gray-500 focus:outline-none' />
              </div>
              <div>
              <input type="text" placeholder="Password" className='text-[#B3B3B3] bg-transparent border-b border-gray-500 focus:outline-none'/>
              </div>
              <button className='text-white bg-[#4090B5] rounded-xl py-2 hover:bg-[#4fb1df]'>
                  Iniciar Sesión
              </button>
          </form>
          <a href="#" className="text-[#4090B5] text-lg underline">¿Has olvidado tu contraseña?</a>
      </div>
  </div>



    )}
    </>
  );
};

export default Navbar;
