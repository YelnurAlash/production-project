import ReactDOM from 'react-dom/client';
const root = ReactDOM.createRoot(document.getElementById('root'));
import {BrowserRouter} from "react-router-dom";
import App from './App';

root.render (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)