import styles from './ActionPane.module.css';

const ActionPane = (props) =>{
    return (
        <div>
            <div className={styles.ActionPane}>
                You have <span className={styles.ActionPanePoints}>{props.pointsToDistribute}</span> skill points to distribute.
            </div>
            <div className={styles.overview}>
                    {props.skills.map((skill)=>(
                        <div className={styles.column} key ={skill.id}  >
                        <h3>{skill.attributeName}</h3>
                        <p className={styles.defaultpoints}>{skill.defaultPoints}</p>
                        <button className={styles.upskillbutton} disabled = {skill.defaultPoints>=skill.maxPoints}>Upgrade</button>
                        </div>
                    ))}
            </div>
        </div>
    )
}

ActionPane.defaultProps = {
    pointsToDistribute : 0,
}

export default ActionPane;
