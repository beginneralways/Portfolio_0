// Skills.js
// Skills.js
const Skills = () => {
    return (
      <section style={sectionStyle}>
        <h2>Skills</h2>
        <ul style={listStyle}>
          <li>Skill 1</li>
          <li>Skill 2</li>
          {/* Add more skills */}
        </ul>
      </section>
    );
  };
  
  const sectionStyle = {
    backgroundColor: '#f4f4f4',
    padding: '1rem',
  };
  
  const listStyle = {
    listStyleType: 'none',
  };

  export default Skills