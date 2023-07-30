import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import Welcome from './pages/Welcome';
import PlanLayout from './pages/Layouts/PlanLayout';
import PhoneConfirmation from './pages/PhoneConfirmation';
import CodeConfirm from './pages/CodeConfirm';
import AllowNotification from './pages/AllowNotification';
import AppLayout from './pages/Layouts/AppLayout';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <PlanLayout>
                <Welcome />
              </PlanLayout>
            }
          />
          <Route
            path="/invite"
            element={
              <PlanLayout>
                <PhoneConfirmation />
              </PlanLayout>
            }
          />
          <Route
            path="/code_confirm"
            element={
              <PlanLayout>
                <CodeConfirm />
              </PlanLayout>
            }
          />
          <Route
            path="/allow_notification"
            element={
              <PlanLayout>
                <AllowNotification />
              </PlanLayout>
            }
          />
    {/* here below we are showing home page for loggedin users hence when /home then it has to show a different layout styled page for loggedin user(which will have some header for loggedin) and thus using AppLayout which in turn will render Home component for /home routing */}

    <Route
            path="/home"
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
            <Route
            path="/explore"
            element={
              <AppLayout>
                <Explore/>
              </AppLayout>
            }
          />
            <Route
            path="/profile"
            element={
              <AppLayout>
                <Profile/>
              </AppLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
