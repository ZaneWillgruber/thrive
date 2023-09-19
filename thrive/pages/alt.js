import HeroVideo from '@/components/HeroVideo';
import Navbar2 from '../components/Navbar2';
import "@/styles/global.css"
import "@/styles/stylesAlt.css"

const Home = () => {
    return (
        <div className='bg-hero-gradient-end'>
            <Navbar2 />
            <HeroVideo />
        </div>
    );
}

export default Home;