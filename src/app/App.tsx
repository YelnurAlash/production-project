import {Link} from 'react-router-dom';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";

const App = () => {
    const {theme, toggleTheme} = useTheme();
    
    return (
      <div className={`app ${theme}`}>
        <button onClick={toggleTheme}>Toggle</button>
        <Link to={'/'}>Main</Link>
        <Link to={'/about'}>About</Link>
          <AppRouter />
      </div>
     
    )
}

export default App;