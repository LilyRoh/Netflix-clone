import HeroImg from './Netflix/NetflixHero.png'
import './Hero.css';


//hero img functiom
const Hero = () => {

    return(
        <div className='hero-img'>
        <img src={HeroImg} alt='Hero img'></img>
        </div>
    );
}

export default Hero;