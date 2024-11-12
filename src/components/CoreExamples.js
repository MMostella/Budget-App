import React from 'react'
import { Link } from 'react-router-dom';
import './CoreExamples.css';

function CoreExamples() {
  const features = [
    {
      title: 'Savings', path: '/FIX ME', image: 'images/budgeting_pillar_1.png' },
    { title: 'Planning', path: '/FIX ME', image: 'images/budgeting_pillar_2.png' },
    { title: 'Tracking Expenses', path: '/FIX ME', image: 'images/budgeting_pillar_3.png' },
    { title: 'Balancing Budget', path: '/FIX ME', image: 'images/budgeting_pillar_4.png' },
  ];
  return (
    <div className="core-examples">
    <h1>Welcome to Our Budget Solutions</h1>
    <div className="feature-grid">
      {features.map((feature, index) => (
        <div key={index} className="feature-card">
          <img src={feature.image} alt={feature.title} />
          <h2>{feature.title}</h2>
          <Link to={feature.path} className="feature-link">Learn More</Link>
        </div>
      ))}
    </div>
  </div>
  )
}

export default CoreExamples