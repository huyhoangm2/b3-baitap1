import logo from './logo.svg';
import './App.css';
import styles from "./styles.module.css";

export default function App() {
  return (
    <div className={styles.Container}>
      <div className={styles.Sidebar}>
        LeftSide
      </div>
      <div className={styles.Content}>
      RightSide
      </div>
    </div>
  );
}
