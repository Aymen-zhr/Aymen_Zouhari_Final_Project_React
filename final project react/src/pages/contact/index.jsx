import { images } from "../../constants/images";
import Topbar from "../../components/Header/TopBar";
import Navbar from "../../components/Header/Navbar";
import Footer from "../../components/Footer/Footer";
import Map from "./partials/contact_map";

const Contact = () => {
    return (
        <div className="w-full">
            <Topbar />
            <Navbar />
            <div className="relative w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${images.carousel.carousel1})` }}>
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <h1 className="text-white text-5xl font-bold tracking-widest uppercase">CONTACT</h1>
                </div>
            </div>
        <Map />
        <Footer />
        </div>
    );
};

export default Contact;