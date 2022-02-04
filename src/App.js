import './App.css';
import "../src/Assests/Styles/Master.scss"
import Profile from './Components/Profile';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as BrowserRouter} from "react-router-dom";
import AboutUs from './Components/AboutUs';
import ProvideFeatures from './ProvideFeatures';
import BestPlan from './Components/BestPlan';
import Testimonials from './Components/Testimonials';
import Blog from './Components/Blog';
import ContactForm from './Components/ContactForm';
import Subscribe from './Components/Subscribe';
import Footer from './Components/Footer';
function App() {
  return (
    <BrowserRouter>

    <Profile/>
    <AboutUs/>
    <ProvideFeatures/>
    <BestPlan/>
    <Testimonials/>
    <Blog/>
    <ContactForm/>
    <Subscribe/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
