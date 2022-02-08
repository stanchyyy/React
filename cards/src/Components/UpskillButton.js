import styles from  './UpskillButton.module.css';

const UpskillButton = ({skill})=>{
    return(
        <button className={styles.upskillbutton} disabled = {skill.defaultPoints>=skill.maxPoints}>Upgrade</button>
    )
}

export default UpskillButton;