import {Suspense} from 'react';
import './styles/index.scss';
import {useTheme} from "app/providers/ThemeProvider";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import {Sidebar} from "widgets/Sidebar";

const App = () => {
    const {theme} = useTheme();
    
    return (
        <div className={`app ${theme}`}>
            <Suspense fallback={'loading'}>
                <Navbar />
                <div className={'page-content'}>
                    <Sidebar />
                    <AppRouter />
                </div>
            </Suspense>
        </div>
    )
}

export default App;