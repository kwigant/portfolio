import React from "react";

interface Props {
  documentUrl: string;
  linkText: string;
}

const DocumentLink: React.FC<Props> = ({ documentUrl, linkText }) => {
  const handleLinkClick = () => {
    window.open(documentUrl, "_blank");
  };

  return <button onClick={handleLinkClick}>{linkText}</button>;
};

export default DocumentLink;
