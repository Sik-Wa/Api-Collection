import "./App.css";
import UrlShortener from "./Components/UrlShortener";





function App() {
  return (
    <div className="min-h-screen bg-gradient-to-tr from-gray-100 to-gray-500 flex flex-col items-center justify-center">
      <div className="container">
       <UrlShortener/>
      </div>
    </div>
  );
}

export default App;
