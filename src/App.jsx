import Hobby from "./components/Hobby.jsx/Hobby";
import Img from "./components/Img";
import Navbar from "./components/Navbar/Navbar";
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
    </div>
  );
}

export default App;
