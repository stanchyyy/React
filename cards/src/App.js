import ActionPane from "./Components/ActionPane";
import Card from "./Components/Card";


function App() {
  return (
    <div>
      <ActionPane pointsToDistribute = {Math.floor(Math.random() * 20 + 1)}/>
      <Card/>
    </div>
  );
}

export default App;
