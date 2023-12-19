import styles from "./tags.module.scss";

export default function Tags({ tags }) {
  return (
    <ul className={styles.tags}>
      {tags.map(item => <li className={styles.tag} key={item}>{item}</li>)}
    </ul>
  );
};
