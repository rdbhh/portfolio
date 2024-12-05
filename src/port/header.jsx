import { Link } from 'react-router-dom';
const Header = () => {
    return (
      <header style={styles.header} className='flex justify-around'>
        <div style={styles.name}>
       <Link to="/">  <span style={styles.firstName}>reda</span>
          <span style={styles.lastName}>bouich</span></Link>
        </div>
        <nav style={styles.nav} className='m-4 font-bold'>
          <Link to="/projects" style={styles.navItem}>Projects</Link>
          <Link to="/languages" style={styles.navItem}>Languages</Link>
          <Link to="/about-me" style={styles.navItem}>About me</Link>
          <Link to="/resume" style={styles.navItem}>Resume</Link>
          <Link to="/contact" style={styles.navItem}>Contact</Link>
        </nav>
       <div style={styles.separator}></div> 
      </header>
      
      
    );
  
  }; 
  const styles = {
    header: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: 'rgb(2 6 23)',
      padding: '17px 70px',
    },
    /*separator: { borderBottom: '1px solid white',
       margin: '0 20px', },*/
    name: {
      display: 'flex',
      alignItems: 'center',
    },
    firstName: {
      color: '#ffffff',
      fontSize: '24px',
      fontWeight: 'bold',
    },
    lastName: {
      color: '#a0c4ff',
      fontSize: '30px',
      fontWeight: 'bold',
      marginLeft: '5px',
    },
    nav: {
      display: 'flex',
      gap: '50px',
    },
    navItem: {
      color: '#ffffff',
      textDecoration: 'none',
      fontSize: '19px',
      marginLeft:'20px',
    },
  };
  export default Header;