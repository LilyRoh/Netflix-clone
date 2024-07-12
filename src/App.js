import './App.css';
import Header from './Header';
import Hero from './Hero';
import BodyImg from './Body';
import Footer from './footer';

function App() {
  //set variable to pass props
 let title = "Watch List";

 //call components
  return (
    <>
    
    <div className='main'>
    <Header></Header>
    <Hero ></Hero>
    </div>

    <div>
      <BodyImg title={title}></BodyImg>
      <Footer></Footer>
    </div>
    </>

  );
}

export default App;
