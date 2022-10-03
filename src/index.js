import "./index.css";
import { createRoot } from 'react-dom/client';
import Quotes from "./components/Quotes/Quotes";
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Quotes />);
