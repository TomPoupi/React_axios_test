
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from "react-dom";
import App from "./App";


const rootElement = document.getElementById("root");
ReactDOM.render(
//<StrictMode> : ne marche pas avec hookrouter
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    rootElement
);
