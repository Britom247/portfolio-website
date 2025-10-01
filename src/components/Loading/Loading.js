import React, { useState, useEffect } from 'react';
import './Loading.css';

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-spinner">
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
          <div className="spinner-circle"></div>
        </div>
        <h2 className="loading-text">Bright Momoh</h2>
        <p className="loading-subtitle">fullstack Developer</p>

        <div className="progress-container">
          <div 
            className="progress-bar" 
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        
        <p className="loading-percentage">{Math.min(100, Math.round(progress))}%</p>
      </div>
    </div>
  );
};

export default Loading;