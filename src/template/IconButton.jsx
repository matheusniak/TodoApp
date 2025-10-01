import React from "react";
import If from "./If";

/* IconButton: btnStyle, icon, onClick, hide */
export default function IconButton({
  btnStyle = "secondary",
  icon = "circle",
  onClick,
  hide,
}) {
  // adapta ícones antigos (trash-o, close) para nomes modernos
  const map = { "trash-o": "trash", close: "times" };
  const iconName = map[icon] || icon;

  return (
    <If test={!hide}>
      <button
        className={"btn btn-" + btnStyle}
        onClick={onClick}
        style={{ marginLeft: 6 }}
      >
        <i className={"fas fa-" + iconName}></i>
      </button>
    </If>
  );
}
