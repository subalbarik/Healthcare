import React from 'react';
import AnatomySection from './anatomysection';
import HealthStatusCards from './healthstatuscard';
import CalendarView from './calenderview';
import UpcomingSchedule from './upcomingschedule';
import ActivityFeed from './activityfeed';
import '../styles/dashboardmaincontent.css';

import { anatomyIndicators, healthStatusCards } from '../data/healthdata';

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className='dashboard-up'>
      <div className="dashboard-top">
        <AnatomySection indicators={anatomyIndicators} />
        <HealthStatusCards cards={healthStatusCards} />
      </div>
        <ActivityFeed />
      </div>
      <div className="dashboard-middle">
        <CalendarView />
        <div className="dashboard-bottom">
        <UpcomingSchedule />
        
      </div>
      </div>
      
    </div>
  );
};

export default DashboardMainContent;
