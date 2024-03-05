import React from "react";
import { FaMicrosoft } from "react-icons/fa";
import { SiInfosys, SiWipro } from "react-icons/si";

const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Chennai, Tamil Nadu",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Infosys",
      location: "Chennai, Tamil Nadu",
      openPositions: 5,
      icon: <SiInfosys />,
    },
    {
      id: 3,
      title: "Wipro",
      location: "Chennai, Tamil Nadu",
      openPositions: 20,
      icon: <SiWipro />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
