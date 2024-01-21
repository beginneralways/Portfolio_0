// CVDownload.js
const CVDownload = () => {
    return (
      <section style={sectionStyle }>
        <h2>Download CV</h2>
        <a href="link/to/your_cv.pdf" download="Your_CV.pdf" style={linkStyle}>
          Download CV
        </a>
      </section>
    );
  };

  //add a section css style 

  const sectionStyle = {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
  }
  
  const linkStyle = {
    display: 'block',
    backgroundColor: '#4caf50',
    color: '#fff',
    padding: '0.5rem',
    textAlign: 'center',
    textDecoration: 'none',
    borderRadius: '5px',
  };

  export default CVDownload