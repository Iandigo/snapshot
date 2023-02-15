import React from "react";

function Nav({ onLoad }) {
  return (
    <div>
      <div className="categories">
        <ul>
          <li onClick={onLoad}>Birds</li>
          <li onClick={onLoad}>Food</li>
          <li onClick={onLoad}>Cars</li>
          <li onClick={onLoad}>Mountains</li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
