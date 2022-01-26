import logo from './logo.svg';
import './App.scss';
import Nav from './components/Nav';
import Content from './components/Content';
import { useTheme } from './hooks/useTheme';
import Footer from './components/Footer';



function App() {
  const { mode} = useTheme()
  
  return (
    <div className={`App-${mode}`}>
       <Nav />
       <Content />
     
       
    </div>
  );
}

export default App;
