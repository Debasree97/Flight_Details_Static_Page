import "./App.css";
import Body from "./components/Body/Body";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="bg-[#EBF0F5] rounded-2xl border border-[#EBF0F5] max-h-[723px] max-w-[1440px] flex  flex-col items-center mx-auto font-murecho">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
