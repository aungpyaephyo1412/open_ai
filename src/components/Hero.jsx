import Logo from '../assets/logo.svg'

const Hero = () => {
  return (
     <header className='w-full justify-center items-center flex-col'>
       <nav className='flex justify-between items-center flex-col'>
         <img src={Logo} alt="logo" className='w-28 object-contain'/>
         <a href="" target='_blank'>Github</a>
       </nav>
     </header>
  );
};

export default Hero;
