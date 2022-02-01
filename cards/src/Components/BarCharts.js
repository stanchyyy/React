import { useState } from "react";


const BarCharts = ()=>{
const [barWidth,setBarWidth] = useState(50);
let barChartsStyle = {
  width: '50px',
  height:  barWidth +'px',
  backgroundColor: '#555',
  color : '#fff',
  position: 'absolute',
  bottom: 0,
  left: 0
}
    return(
    <>
    <div style = {{position : "relative", minHeight: '150px'}}>
    <div style={barChartsStyle}>Energy</div>
    </div>
    <button onClick={()=> setBarWidth(barWidth+50)}>Uplift</button>
    </>
    )
}


export default BarCharts;