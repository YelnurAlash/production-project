import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
import {BrowserRouter} from "react-router-dom";
import App from 'app/App';
import { ThemeProvider } from "app/providers/ThemeProvider";

root.render (
    <BrowserRouter>
        <ThemeProvider>
            <App />
        </ThemeProvider>
    </BrowserRouter>
)