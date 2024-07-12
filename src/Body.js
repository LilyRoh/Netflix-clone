//define images
import img1 from './Netflix/Netflix1.png';
import img2 from './Netflix/Netflix2.png';
import img3 from './Netflix/Netflix3.png';
import img4 from './Netflix/Netflix4.png';
import img5 from './Netflix/Netflix5.png';
import img6 from './Netflix/Netflix6.png';
import img7 from './Netflix/Netflix7.png';
import img8 from './Netflix/Netflix8.png';
import './Body.css';

//function to display imges and get props title
//pass in title as prorperty
const BodyImg = (props) => {
  return (
    <>
      <div className='container'>
        <div className='item'>
          <img alt='img1' src={img1}></img>
        </div>
        <div className='item'>
          <img alt='img2' src={img2}></img>
        </div>
        <div className='item'>
          <img alt='img3' src={img3}></img>
        </div>
        <div className='item'>
          <img alt='img4' src={img4}></img>
        </div>
      </div>

      <h3>{props.title}</h3>
      <div className='container'>
        <div className='item'>
          <img alt='img5' src={img5}></img>
        </div>
        <div className='item'>
          <img alt='img6' src={img6}></img>
        </div>
        <div className='item'>
          <img alt='img7' src={img7}></img>
        </div>
        <div className='item'>
          <img alt='img8' src={img8}></img>
        </div>
      </div>
    </>
  );
};

export default BodyImg;
