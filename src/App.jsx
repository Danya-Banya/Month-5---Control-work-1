import "./App.css";
import Header from "./Header/Header";
import Home from "./Home/Home";
import Artifacts from "./Artifacts/Artifacts";
import NewArtifacts from "./newArtifacts/newArtifacts";
import SupportProject from "./supportProject/SupportProject";
import Footer from "./Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Home />
      <Artifacts />
      <NewArtifacts />
      <SupportProject />
      <Footer />
    </>
  );
}

export default App;
