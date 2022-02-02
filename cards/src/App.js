import BarCharts from "./Components/BarCharts";
import ActionPane from "./Components/ActionPane";



function App() {
  return (
    <div>
      <BarCharts/>
      <ActionPane pointsToDistribute = {Math.floor(Math.random() * 20 + 1)}/>
    </div>
  );
}

export default App;
