import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

// Initialize Google Analytics
const trackingId = "G-LQRBBL6BM0"; // Replace with your Google Analytics tracking ID
ReactGA.initialize(trackingId);

// Create a function to track page views
const trackPageView = () => {
  ReactGA.pageview(window.location.pathname + window.location.search);
};

// Track the initial page load
trackPageView();

// Create a React component to wrap the App and handle routing changes
const AppWithRouter = () => {
  // Track page views on route changes
  React.useEffect(() => {
    window.addEventListener('popstate', trackPageView);
    return () => {
      window.removeEventListener('popstate', trackPageView);
    };
  }, []);

  return <App />;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppWithRouter />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();