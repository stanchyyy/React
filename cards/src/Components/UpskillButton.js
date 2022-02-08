import styles from  './UpskillButton.module.css';

const UpskillButton = ({skill, reduceSkillPoints, updateSkill})=>{
    return(
        <button className={styles.upskillbutton} disabled = {
            skill.defaultPoints>=skill.maxPoints} onClick={()=>{reduceSkillPoints(skill.id); updateSkill(skill.id)}}>Upgrade</button>
    )
}

export default UpskillButton;