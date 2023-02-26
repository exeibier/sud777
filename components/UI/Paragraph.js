import styles from "./Paragraph.module.css";

const Paragraph = (props) => {
  return <p className={styles.paragraph}>{props.children}</p>;
};

export default Paragraph;
