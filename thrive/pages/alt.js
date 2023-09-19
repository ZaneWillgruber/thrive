import HeroVideo from '@/components/HeroVideo';
import Navbar2 from '../components/Navbar2';
import InfoSection2 from '../components/InfoSection2';
import WhyJoin from '../components/WhyJoin';
import "@/styles/global.css"
import "@/styles/stylesAlt.css"

const Home = () => {
    return (
        <div className='bg-white'>
            <Navbar2 />
            <HeroVideo />
            <div className='spacer layer1'></div>
            <InfoSection2 />
            <div className='spacer2 layer2'></div>
            <WhyJoin />
        </div>
    );
}

export default Home;