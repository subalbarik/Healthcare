import Header from './components/header';
import Sidebar from './components/sidebar';
import DashboardMainContent from './components/dashboardmaincontext';
import './styles/global.css';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
