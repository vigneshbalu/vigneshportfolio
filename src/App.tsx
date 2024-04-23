import About from "./components/about";
import Connect from "./components/connect";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";

export default function App() {
  return (
    <div>
      <Header/>
      <Home/>
      <About/>
      <Connect/>
      <Footer/>
    </div>
  )
}