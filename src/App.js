import "./App.css";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="h-[100vh] w-[100vw] bg-[#344151] flex flex-col justify-center items-center gap-10">
      <h1 className="text-[#0398D4] font-sans text-2xl font-medium">Increment & Decrement</h1>
      <Counter/>
    </div>
  );
}

export default App;
