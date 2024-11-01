import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Services = () => (
  <div style={{ padding: '20px' }}>
    <h2>Our Services</h2>
    <p>We offer a range of services tailored to meet the needs of our clients.</p>
    <nav style={{ marginBottom: '10px' }}>
      <NavLink to="design" style={{ marginRight: '10px' }}>Design</NavLink>
      <NavLink to="development">Development</NavLink>
    </nav>
    {/* Outlet renders the nested routes */}
    <Outlet />
  </div>
);

export default Services;
