import "./App.css";
import Header from "./components/header";
import Footer from "./components/Footer";
// function App() {
  //   return (
    //     <>
    //       <Header />
    //       <About />
    //       <Resume />
    //       <Contact/>
    //     </>
    
    //   );
    // }
    
    // export default App;
    
    import { Outlet } from 'react-router-dom';
    
    function App() {
      return (
        <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;