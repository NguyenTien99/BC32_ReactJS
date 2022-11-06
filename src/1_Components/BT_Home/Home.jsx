import Header from "./Header";
import Content from "./Content";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import "./home.css";


const Home = () => {
  return (
    <div>
        <Header />
        <div className="wrapper">
            <Content />
            <Sidebar />
        </div>
        <Footer />
    </div>
  )
}

export default Home