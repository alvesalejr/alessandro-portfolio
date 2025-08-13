import { RiDownloadLine, RiWhatsappFill } from "@remixicon/react";
import React from "react";

const Button = ({ label, classes, icon, icon2, onClick, href, download }) => {
  const content = (
    <>
      {label}
      {icon && (
        <span>
          <RiDownloadLine />
        </span>
      )}
      {icon2 && (
        <span>
          <RiWhatsappFill />
        </span>
      )}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={`${classes} flex items-center gap-2`}
        onClick={onClick}
        download={download}
        target={download ? undefined : "_blank"}
        rel={download ? undefined : "noopener noreferrer"}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      className={`${classes} flex items-center gap-2`}
      onClick={onClick}
      type="button"
    >
      {content}
    </button>
  );
};

export default Button;
