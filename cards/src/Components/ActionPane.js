import styles from './ActionPane.module.css'; 
const ActionPane = (props) =>{
    return (
<div className={styles.ActionPane}>
You have <span className={styles.ActionPanePoints}>{props.pointsToDistribute}</span> skill points to distribute.
</div>
    )
}

ActionPane.defaultProps = {
    pointsToDistribute : 0,
}

export default ActionPane;