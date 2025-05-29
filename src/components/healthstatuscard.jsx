import React from "react";

const HealthStatusCards = ({ cards }) => {
    const getStatusColor = (status) => {
    switch (status) {
      case 'Critical':
        return '#ff4d4f';
      case 'Healthy':
        return '#52c41a'; 
      case 'Warning':
        return '#faad14'; 
      default:
        return '#d9d9d9'; 
    }
  };
  
  return (
    <div className="health-cards">
      {cards.map((card, index) => (
        <div
          className={`health-card ${card.status}`}
          key={index}
          style={{
            backgroundColor: "white",
            marginTop: "20px",
            width: "150px",
            borderRadius: "18px",
            padding:"8px"
          }}
        >
          <div style={{display:"flex", gap:"2rem"}}>
          <img src={card.image} alt={card.title} style={{height:"40px",width:"40px"}} />
          <h3 >{card.title}</h3>
          </div>
          <h4 style={{margin:"0px",paddingBottom:"8px"}}>{card.date}</h4>
          <div
            className="status-bar"
            style={{
              height: "6px",
              borderRadius: "6px",
              backgroundColor: "#f0f0f0",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "80%",
                width: "80%",
                backgroundColor: getStatusColor(card.status),
                transition: "width 0.5s ease-in-out",
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HealthStatusCards;
