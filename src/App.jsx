import Footer from "./components/Footer";
import Hobby from "./components/Hobby.jsx/Hobby";
import Img from "./components/Img";
import Navbar from "./components/Navbar/Navbar";
import Testimonials from "./components/Testimonials/Testimonials";
import YourListing from "./components/YourListing/YourListing";
import TabContent from "./components/tabContent/TabContent";

function App() {
  return (
    <div className="container-xxl mx-auto">
      <Navbar></Navbar>
      <div className="d-md-flex flex-row justify-content-center mt-5">
        <Hobby></Hobby>
        <TabContent></TabContent>
      </div>
      <Img></Img>
      <YourListing></YourListing>
      <Testimonials></Testimonials>
      <Footer></Footer>
    </div>
  );
}

export default App;
