import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
import {BrowserRouter} from "react-router-dom";
import App from './App';
import ThemesProvider from "./theme/ThemeProvider";

root.render (
    <BrowserRouter>
        <ThemesProvider>
            <App />
        </ThemesProvider>
    </BrowserRouter>
)