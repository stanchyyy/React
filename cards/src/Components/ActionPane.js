import styles from './ActionPane.module.css';
import Skill from './Skill.js';

const ActionPane = (props) =>{


    return (
        <div>
            <div className={styles.ActionPane}>
                You have <span className={styles.ActionPanePoints}>{props.pointsToDistribute}</span> skill points to distribute.
            </div>
        </div>
    )
}


ActionPane.defaultProps = {
    pointsToDistribute : 0,
}

export default ActionPane;
