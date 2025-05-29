// components/SimpleAppointmentCard.jsx
import React from 'react';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div
      className="appointment-card"
      style={{
        backgroundColor: '#f3f6fc',
        borderRadius: '12px',
        padding: '10px 14px',
        margin: '6px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        fontSize: '14px',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.05)',
        fontWeight: 500,
      }}
    >
      <span>{title}</span>
      <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
        {time}
        <span>{icon}</span>
      </span>
    </div>
  );
};

export default SimpleAppointmentCard;
