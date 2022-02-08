import styles from './Skill.module.css';
import UpskillButton from './UpskillButton';

const Skill = ({skills, reduceSkillPoints, updateSkill})=>{
    return(

        skills.map((skill)=>(
            <div  className={styles.column} key = {skill.id} >
            <h3>{skill.attributeName}</h3>
            <p className={styles.defaultpoints}>{skill.defaultPoints}</p>
            <UpskillButton skill={skill} reduceSkillPoints={reduceSkillPoints} updateSkill= {updateSkill}/>
        </div>
        ))

    )
}

export default Skill;