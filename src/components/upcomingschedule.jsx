import React from 'react';
import '../styles/upcomingschedule.css';
import SimpleAppointmentCard from './simpleappointmentcard';
import { upcomingAppointments } from '../data/appointmentdata';

const UpcomingSchedule = () => {
  return (
    <>
      <h2>The Upcoming Schedule</h2>

    <div className="upcoming-schedule">
      {Object.entries(upcomingAppointments).map(([day, items], index) => (
        <div key={index} className="day-schedule">
          <h3>{day}</h3>
          {items.map((appt, idx) => (
            <SimpleAppointmentCard
              key={idx}
              title={appt.title}
              time={appt.time}
              icon={appt.icon}
            />
          ))}
        </div>
      ))}
    </div>
    </>
  );
};

export default UpcomingSchedule;
