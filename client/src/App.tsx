import Canvas from "./components/Canvas/Canvas";
import SettingsBar from "./components/SettingsBar/SettingsBar";
import ToolsBar from "./components/ToolsBar/ToolsBar";

function App() {
  return (
    <div className="flex flex-col h-lvh">
      <ToolsBar />
      <SettingsBar />
      <div className="flex-grow mx-auto mt-5">
        <Canvas />
      </div>
    </div>
  );
}

export default App;
