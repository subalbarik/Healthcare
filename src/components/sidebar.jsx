// import styles from '../styles/sidebar.module.css';


// function Sidebar() {
//   return (
//     <header className={styles.header}>
//       <div className={styles.logo}>
//         <div className={styles.logo1}>Health</div>
//         <div className={styles.logo2}>care .</div>
//       </div>
//       <div className={styles.dashboard}>Dashboard</div>
//       <div className={styles.calender}>Calender</div>
//       <div className={styles.appointments}>Appointments</div>
//       <div className={styles.history}>History</div>
//       <div className={styles.support}>Support</div>
//       <div className={styles.chat}>Chat</div>
//       <div className={styles.setting}>Setting</div>
//     </header>
//   );
// }

// export default Sidebar;


import React from 'react';
import '../styles/sidebar.css';
import { FaTachometerAlt,FaHome, FaHistory, FaCalendarAlt, FaUserMd, FaChartBar, FaVials, FaComments, FaLifeRing, FaCog } from 'react-icons/fa';

const Sidebar = () => {
  const navLinks = [
    { icon: <FaHome />, label: 'Dashboard' },
    { icon: <FaHistory />, label: 'History' },
    { icon: <FaCalendarAlt />, label: 'Calendar' },
    { icon: <FaUserMd />, label: 'Appointments' },
    { icon: <FaChartBar />, label: 'Statistics' },
    { icon: <FaVials />, label: 'Tests' },
   
  ];
  const navbars = [
   
    { icon: <FaComments />, label: 'Chat' },
    { icon: <FaLifeRing />, label: 'Support' },
    { icon: <FaCog />, label: 'Setting' },
  ];

  return (
    <aside className="sidebar">
      <div className="logo"><span className='logoname'>Health</span>care<span>.</span></div>
      <div className="nav-section">
        <p className="nav-title">General</p>
        <ul>
          {navLinks.map((link, index) => (
            <li key={index} className="nav-item">
              {link.icon}<span className='contents'>{link.label}</span>
            </li>
          ))}
        </ul>
        <p className="nav-title">Tools</p>
        <ul>
          {navbars.map((link, index) => (
            <li key={index} className="navbar-item">
              {link.icon}<span className='contents'>{link.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default Sidebar;
