import React from 'react';
import { IconButton } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const Brochure = () => {
  const brochureUrl = `${process.env.PUBLIC_URL}/BrochurePage.pdf`; // Make sure the path is correct

  return (
    <div style={styles.container}>
            <a href={brochureUrl} target="_blank" rel="noopener noreferrer">

      <h2>Our Brochure</h2>

      {/* Brochure Button */}
        <button style={styles.button}>
          Open Brochure
        </button>
      </a>
      </div>
  );
};

// Styles for the component
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '50px',
  },
  button: {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  icon: {
    fontSize: '30px',
    color: '#000',
  }
};
export default Brochure;
