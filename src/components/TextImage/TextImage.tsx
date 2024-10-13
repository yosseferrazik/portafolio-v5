import React, { ReactNode } from "react";
import styles from "./TextImage.module.css";

interface Props {
  title: string;
  imageFirst: boolean;
  description: any;
  imageUrl: string;
  alt: string;
  more?: boolean;
  extra?: ReactNode;
}

const TextImage: React.FC<Props> = ({
  title,
  description,
  imageUrl,
  more,
  extra,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textSection}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.description}>{description}</div>
        <hr />
        {more ? <div>{extra}</div> : ""}
      </div>
      <div className={styles.imageSection}>
        <img src={imageUrl} alt="description" />
      </div>
    </div>
  );
};

export default TextImage;
