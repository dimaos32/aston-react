import styles from "./container.module.scss";

// eslint-disable-next-line react/prop-types
export default function Container({ children }) {
  return <div className={styles.container}>{children}</div>;
}
