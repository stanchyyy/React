import ActionPane from "./Components/ActionPane";
let  pointsToDistribute = Math.floor(Math.random() * 20 + 1);
let defaultPoints = 1;
let maxPoints = 10;
let baseSkillPoints = 5;
let maxBaseSkillPoints = 25;

const skills = [{
  id : 1,
  imageSource : '/images/Illustration-de-Nutchapol-Thitinunthakorn_STRENGHT_.jpg',
  defaultPoints :  baseSkillPoints,
  maxPoints : maxBaseSkillPoints,
  attributeName : 'STRENGHT',
  },
  {
  id : 2,
  imageSource : '/images/Illustration-de-Slawomir-Maniak_AGILITY_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'AGILITY',
  },
  {
  id : 3,
  imageSource : '/images/Illustration-de-Milivoj-Ceran_INTELIGENCE_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'INTELIGENCE',
  },
  {
  id : 4,
  imageSource : 'images/Illustration-des-mondes-de-blizzard_VITALITY_.jpg',
  defaultPoints : defaultPoints,
  maxPoints : maxPoints,
  attributeName : 'VITALITY',
  },
];



function App() {
  return (
    <div>
      <ActionPane pointsToDistribute = {pointsToDistribute} skills = {skills}/>
    </div>
  );
}

export default App;
