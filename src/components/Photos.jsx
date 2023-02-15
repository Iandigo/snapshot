import React from "react";

function Photos({ data }) {
  return (
    <div className="content">
      {data?.map((item, index) => (
        <div className="card" key={index}>
          <img src={item.src.original} alt={item.id} />
        </div>
      ))}
    </div>
  );
}

export default Photos;
