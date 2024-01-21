// create a header component 

const Header = () => {
    return (
      <header style={headerStyle}>
        <h1>Your Name</h1>
      </header>
    );
  };

  const headerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '1rem',
    textAlign: 'center',
  };

export default Header
