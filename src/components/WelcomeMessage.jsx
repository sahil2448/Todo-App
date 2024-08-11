import styles from "./WelcomeMessage.module.css";
const WelcomeMessage = ({ todoItems }) => {
  return (
    todoItems.length === 0 && (
      <p className={styles.welcome}>
        Enjoy Your Day...! <br /> <i>No any task to do today.</i>
      </p>
    )
  );
};
export default WelcomeMessage;
