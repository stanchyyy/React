import ActionPane from "./Components/ActionPane";
import Skill from "./Components/Skill";
import {useState} from "react";

let defaultPoints = 1;
let maxPoints = 10;
let baseSkillPoints = 5;
let maxBaseSkillPoints = 25;


const App = ()=> {
  let [pointsToDistribute,setPointsToDistribute] = useState(Math.floor(Math.random() * 20 + 1));

  const [skills,setSkills] = useState([
  {
  id : 1,
  imageSource : '/images/Illustration-de-Nutchapol-Thitinunthakorn_STRENGHT_.jpg',
  defaultPoints :  baseSkillPoints,
  maxPoints : maxBaseSkillPoints,
  attributeName : 'STRENGHT',
  color: '#5271C2',
  },
  {
  id : 2,
  imageSource : '/images/Illustration-de-Slawomir-Maniak_AGILITY_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'AGILITY',
  color: '#35a541',
  },
  {
  id : 3,
  imageSource : '/images/Illustration-de-Milivoj-Ceran_INTELIGENCE_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'INTELIGENCE',
  color: '#bdb235',
  },
  {
  id : 4,
  imageSource : 'images/Illustration-des-mondes-de-blizzard_VITALITY_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'VITALITY',
  color: '#db6623',
  },
])

//Update skill
const reduceSkillPoints = (id) =>{
  setPointsToDistribute( pointsToDistribute-1)
}

const updateSkill= (id)=>{
  setSkills(skills.map((skill)=>skill.id===id
  ?{...skill,defaultPoints: skill.defaultPoints+1}:
  skill))
}

  return (
    <div>
      <ActionPane pointsToDistribute = {pointsToDistribute}/>
      <div className={'overview'}>
        <Skill skills = {skills} reduceSkillPoints={reduceSkillPoints} updateSkill = {updateSkill}/>
      </div>
    </div>
  );
}

export default App;
