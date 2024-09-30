import React, { ReactNode } from "react";

import "../styles/component/textimage.css";

interface Props {
  title: string;
  imageFirst: boolean;
  description: string;
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
    <div className="container">
      <div className="text-section">
        <h1 className="title">{title}</h1>
        <p className="description">{description}</p>
        <hr />
        {more ? <div>{extra}</div> : ""}
      </div>
      <div className="image-section">
        <img src={imageUrl} alt="description" />
      </div>
    </div>
  );
};

export default TextImage;
