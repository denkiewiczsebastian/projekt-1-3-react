import React from "react";
import "./ExpertsSection.css";
import EmployeeRow from "./EmployeeRow";
import employees from "../../data/employees";

const ExpertsSection = () => {
  return (
    <section id="about" className="experts-section">
      <div className="container">
        <h2 className="experts-header">Nasi specjaliści</h2>
        <ul className="experts-list">
          {employees.map((employee, index) => (
            <EmployeeRow
              key={index}
              firstName={employee.firstName}
              lastName={employee.lastName}
              position={employee.position}
              description={employee.description}
              imageSrc={employee.imageSrc}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ExpertsSection;
