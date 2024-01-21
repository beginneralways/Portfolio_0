import './App.css';
import Header from './components/Header.js'
import Skills from './components/Skills.js';
import Stack from './components/Stack.js';

function App() {
  return (
      <div style={appStyle}>
      <Header />
      <Skills />
      <Stack/>
    
    </div>
  );
}

const appStyle = {
  fontFamily: 'Arial, sans-serif',
};

export default App;
