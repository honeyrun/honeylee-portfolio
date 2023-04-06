import { BrowserRouter } from "react-router-dom";
import { Navbar, MainVisual, About, Contact, Skills, Works, MoreWorks, Footer} from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div>
          <Navbar />
          <MainVisual />
        </div>
        <About/>
        <Skills />
        <Works />
        <MoreWorks />
        <div className='relative z-0'>
          <Contact />
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
