import styles from "../styles/calenderview.module.css";

const times = ["08:00", "09:00", "10:00", "11:00", "12:00", "14:00", "16:00"];
const days = [
  { day: "Mon", date: 25 },
  { day: "Tues", date: 26 },
  { day: "Wed", date: 27 },
  { day: "Thurs", date: 28 },
  { day: "Fri", date: 29 },
  { day: "Sat", date: 30 },
  { day: "Sun", date: 31 },
];

// Sample active appointments
const activeSlots = [
  { day: "Tues", time: "09:00" },
  { day: "Thurs", time: "11:00" },
  { day: "Sat", time: "12:00" },
  { day: "Sun", time: "09:00" },
];

const Calendar = () => {
  const isSlotActive = (day, time) => {
    return activeSlots.some(slot => slot.day === day && slot.time === time);
  };

  return (
    <div className={styles.calendarContainer}>
      <div className={styles.header}>
        <h3>October 2021</h3>
        <div className={styles.navButtons}>
          <button>{"<"}</button>
          <button>{">"}</button>
        </div>
      </div>

      <div className={styles.weekdays}>
        {days.map((d, idx) => (
          <div key={idx} className={styles.day}>
            <div>{d.day}</div>
            <div className={styles.date}>{d.date}</div>
          </div>
        ))}
      </div>

      <div className={styles.timeSlots}>
        {times.map((time, timeIdx) => (
          <div key={timeIdx} className={styles.timeRow}>
            {days.map((d, dayIdx) => (
              <div
                key={dayIdx}
                className={`${styles.timeCell} ${
                  isSlotActive(d.day, time) ? styles.active : ""
                }`}
              >
                {time}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
