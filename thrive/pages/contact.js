//styles
import "@/styles/global.css"

import Navbar3 from '../components/Navbar3';
import GoogleMaps from "@/components/GoogleMaps";
import { FaPhoneAlt, FaMapMarkerAlt, FaAt } from 'react-icons/fa';

function App() {

    return (
        <div>
            <Navbar3 />
            <div className="h-[50vh] bg-hero-gradient-end flex justify-center items-center flex-col p-40">
                <img src="../images/thrive_logo.png" alt="Logo" />
            </div>
            <div className="h-[50vh] grid grid-flow-col grid-cols-3">
                <div className="bg-black">
                    <GoogleMaps />
                </div>
                <div className="bg-white flex flex-col justify-center items-left">
                    <div className="m-auto">
                        <h1 className="text-6xl py-5">Contact Us</h1>
                        <div className="flex flex-row justify-left items-center py-5">
                            <span className="text-hero-gradient-end"><FaPhoneAlt /></span>
                            <p className="pl-2">+1 (123) 456-7890</p>
                        </div>
                        <div className="flex flex-row justify-left items-center py-5">
                            <span className="text-hero-gradient-end"><FaAt /></span>
                            <p className="pl-2">contact@thrivelifetraining.com</p>
                        </div>
                        <div className="flex flex-row justify-left items-center py-5">
                            <span className="text-hero-gradient-end"><FaMapMarkerAlt /></span>
                            <p className="pl-2">500 Terry Francine St. San Francisco, CA 94158</p>
                        </div>
                    </div>
                    
                </div>
                <div className="bg-gray-100 flex flex-col justify-center items-left">
                    <div className="m-auto">
                        <h1 className="text-6xl py-5">Quick Pitch</h1>
                        <div className="py-5">
                            <p className="pl-2">hello,</p>
                            <br />
                            <p>my name is your name and my email address is your email and I would like to discuss about this.</p>
                            <button>test</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;