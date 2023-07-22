import Demo from "./components/Demo"
import Navbar from "./components/Navbar.jsx";


const App = () => {
  return (
    <main>
      <div className="main flex-col">
        <Navbar/>
        <Demo />
      </div>
    </main>
  );
}

export default App