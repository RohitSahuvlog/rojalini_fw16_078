import ReactDOM from 'react-dom/client';
import { ThemeProvider } from './contextProvider/ThemeProvider';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <ThemeProvider>
    <App />             
</ThemeProvider>    );
