import HeroVideo from '@/components/HeroVideo';
import Navbar2 from '../components/Navbar2';
import InfoSection2 from '../components/InfoSection2';
import WhyJoin from '../components/WhyJoin';
import "@/styles/global.css"
import "@/styles/stylesAlt.css"
import FooterAlt from '@/components/FooterAlt';
import HeroImageAlt from '@/components/HeroImageAlt';

const Home = () => {
    return (
        <div className='bg-white'>
            <Navbar2 />
            <HeroImageAlt />
            <WhyJoin
                subject="What is Thrive?"
                info="Thrive is a three-in-one training system focused on helping you live a happier, more fulfilling life. In order to change our lives into what we want them to be, we need to change how we’re living. Change is really just a two-part process. First is knowledge, followed by application. We need to know and understand what makes a good life and what our goals for our life should be. After that, we need to apply that knowledge in our lives."
                hasButton={false}
            />
            <div className='spacer layer1'></div>
            <InfoSection2 />
            <div className='spacer2 layer2'></div>
            <WhyJoin
                subject="Why Join?"
                info="Life is not something we should take for granted. We all want to make the most of the time we have here on earth, but it’s easy for us to get distracted. Thrive was created to help people live their best lives."
                hasButton={true}
            />
            <div className='spacer3 layer3'></div>
            <FooterAlt />
        </div>
    );
}

export default Home;