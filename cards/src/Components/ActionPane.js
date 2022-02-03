import styles from './ActionPane.module.css';

const ActionPane = (props) =>{

    return (
        <div>
            <div className={styles.ActionPane}>
                You have <span className={styles.ActionPanePoints}>{props.pointsToDistribute}</span> skill points to distribute.
            </div>
            <div className={styles.row}>
                    {props.skills.map((skill)=>(
                        <div className={styles.column} key ={skill.id} style={{backgroundImage : 'url('+skill.imageSource+')'}}>
                        <div className={styles.card}>
                        <h3>{skill.attributeName}</h3>
                        <p>{skill.defaultPoints}</p>
                        </div>
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
