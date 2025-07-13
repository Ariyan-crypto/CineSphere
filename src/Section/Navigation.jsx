import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer style={footerStyle}>
      <div style={contentStyle}>
        {/* Left Section - Navigation Links */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Quick Links</h4>
          <ul style={ulStyle}>
            <li><Link to="/" style={linkStyle}>Trending</Link></li>
            <li><Link to="/movie" style={linkStyle}>Movies</Link></li>
            <li><Link to="/tvseries" style={linkStyle}>TV Series</Link></li>
            <li><Link to="/search" style={linkStyle}>Search</Link></li>
          </ul>
        </div>

        {/* Center Section - Social Media Links */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Follow Us</h4>
          <ul style={ulStyle}>
            <li>
              <a href="https://facebook.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Facebook</a>
            </li>
            <li>
              <a href="https://twitter.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Twitter</a>
            </li>
            <li>
              <a href="https://instagram.com" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
            </li>
          </ul>
        </div>

        {/* Right Section - Contact */}
        <div style={sectionStyle}>
          <h4 style={headingStyle}>Contact Us</h4>
          <ul style={ulStyle}>
            <li><span style={contactStyle}>Email: contact@cinesphere.com</span></li>
  
          </ul>
        </div>
      </div>
      <div style={footerBottomStyle}>
        <p style={footerTextStyle}>CineSphere. Powered by Movie Lovers, for Movie Lovers.</p>
      </div>
    </footer>
  );
}

// Footer styles
const footerStyle = {
  backgroundColor: '#1f1f1f',   // Dark background for footer
  color: '#f0f0f0',              // Light text color
  padding: '40px 20px',          // Padding to create space inside the footer
  fontFamily: 'Arial, sans-serif',
  textAlign: 'left',
};

const contentStyle = {
  display: 'flex',
  justifyContent: 'space-between',  // Distribute sections with equal space
  gap: '40px',                     // Appropriate gap between sections
  marginBottom: '30px',             // Space below the content section
};

const sectionStyle = {
  flex: 1,                          // Each section takes equal space
};

const headingStyle = {
  fontSize: '1.3rem',               // Slightly larger headings
  marginBottom: '15px',             // Space below the heading
  fontWeight: 'bold',
};

const ulStyle = {
  listStyleType: 'none',            // Remove default list bullets
  paddingLeft: '0',                 // Remove padding from the left
};

const linkStyle = {
  textDecoration: 'none',           // Remove underline
  color: '#FFD700',                 // Gold color for links
  fontSize: '1rem',                 // Adjust font size for links
  display: 'block',                 // Make links take full width for easy click
  marginBottom: '10px',             // Add gap between links
  transition: 'color 0.3s ease',    // Smooth color transition on hover
};

linkStyle[':hover'] = {
  color: '#FF6347',                 // Hover effect: change color to tomato
};

const socialLinkStyle = {
  textDecoration: 'none',           // Remove underline
  color: '#FFD700',                 // Gold color for social links
  fontSize: '1rem',
  marginBottom: '10px',
  display: 'block',
};

const contactStyle = {
  fontSize: '1rem',
  marginBottom: '10px',
};

const footerBottomStyle = {
  textAlign: 'center',              // Center the footer bottom text
  marginTop: '20px',
  borderTop: '1px solid #444',      // Add a subtle border to separate from content
  paddingTop: '10px',
};

const footerTextStyle = {
  fontSize: '0.9rem',               // Smaller text for copyright
  color: '#888',                    // Lighter text color
};

