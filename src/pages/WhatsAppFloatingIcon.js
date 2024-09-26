// WhatsAppIcon.js
import React from 'react';
import { Fab } from '@mui/material';  // Floating Action Button from Material-UI
import WhatsAppIcon from '@mui/icons-material/WhatsApp';  // WhatsApp icon

const WhatsAppFloatingIcon = () => {
  const handleWhatsAppClick = () => {
    // Replace 'YOUR_PHONE_NUMBER' with your actual WhatsApp number including country code
    window.open('https://wa.me/+919498478472', '_blank');
  };

  return (
    <Fab
      color="success"
      aria-label="whatsapp"
      onClick={handleWhatsAppClick}
      style={{
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        zIndex: 1000,  // Ensures it stays on top of other components
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};

export default WhatsAppFloatingIcon;
