import "./App.css";
import Display from "./components/Display";
import Hero from "./components/Hero";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <div className="wrapper">
      <Hero />
      <Display />
    </div>
  );
}

export default App;
