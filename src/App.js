
import './App.scss';
import Nav from './components/Nav';
import Content from './components/Content';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';




function App() {
  const { mode} = useTheme() //Context gets wwhether currently in light or dark
  
  return (
    <div className={`App-${mode}`}>
       <Nav />
       <Content />
      <Footer />
       
    </div>
  );
}

export default App;
