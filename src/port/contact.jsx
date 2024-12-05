// src/pages/Languages.jsx
import React from "react";

const Contact = () => {
  return (
    <div className=" bg-slate-950">
    <div style={styles.body}>
     
      <div style={styles.card}>
       
        <h2 style={styles.title}>Contact Me</h2>
        <a href="mailto:redabouich@gmail.com" style={styles.link}>
         
          <img
            src="https://img.icons8.com/ios-glyphs/30/1a73e8/email.png"
            alt="Email Icon"
            style={styles.icon}
          />
          redabouich1999@gmail.com
        </a>
        <a
          href="https://www.instagram.com/rdbh._/"
          target="_blank"
          style={styles.link}
        >
         
          <img
            src="https://img.icons8.com/ios-glyphs/30/1a73e8/instagram-new.png"
            alt="Instagram Icon"
            style={styles.icon}
          />
          @rdbh._
        </a>
        <a
          href="https://wa.me/+212607787061"
          target="_blank"
          style={styles.link}
        >
         
          <img
            src="https://img.icons8.com/ios-glyphs/30/1a73e8/whatsapp.png"
            alt="WhatsApp Icon"
            style={styles.icon}
          />
          WhatsApp Me
        </a>
      </div>
    </div>
    </div>
  );
};



  const styles = {
    card: {
      backgroundColor: '#a0c4ff',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '400px',
      textAlign: 'center',
      margin: 'auto',
    },
    title: {
      margin: '0 0 10px',
      color: '#333',
      
    },
    link: {
      display: 'block',
      margin: '25px 0px',
      color: '#1a73e8',
      textDecoration: 'none',
    },
    icon: {
      marginRight: '8px',
      verticalAlign: 'middle',
    },
    body: {
      backgroundColor: 'rgb(2 6 23)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '92vh',
      margin: '0',
    }
  };

 
export default Contact;
