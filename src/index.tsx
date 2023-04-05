import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
import {BrowserRouter} from "react-router-dom";
import App from 'app/App';
import { ThemeProvider } from "app/providers/ThemeProvider";

import './shared/config/i18n/i18n'

root.render (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)