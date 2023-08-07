import React from "react";

const EmployeeRow = ({
  firstName,
  lastName,
  position,
  description,
  imageSrc,
}) => {
  return (
    <div className="expert">
      <img
        src={imageSrc}
        alt={`${firstName} ${lastName}`}
        className="expert-img"
      />
      <div className="expert-info">
        <h3>
          {`${firstName} ${lastName}`} [{position}]
        </h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default EmployeeRow;
