import Logo from "../assets/logo.svg";

const Navbar = () => {
  return(
      <header className='fixed top-[35px] left-0 right-0 flex justify-center items-center flex-col z-30 px-5 mb-10'>
          <nav className='container mx-auto flex justify-between items-center w-full '>
              <img src={Logo} alt="logo" className='w-28 object-contain'/>
              <button type={"button"} className='black_btn' onClick={()=>{window.open('https://github.com/aungpyaephyo1412/Open_AI')}}>Github</button>
          </nav>
          <h1 className='head_text'>
              Summarize Articles with <br/>
              <span className='orange_gradient'>Open AI ChatGPT-4</span>
          </h1>
          <h2 className='desc'>
              Simplify your reading with Summarize, an open-source article summarizer
              that transforms lengthy articles into clear and concise summaries
          </h2>
      </header>
  )
}
export default Navbar