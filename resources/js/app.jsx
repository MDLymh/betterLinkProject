import React from 'react'
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicLayout from '@layouts/PublicLayout.jsx';
import Home from '@public_pages/Home.jsx';
import '../css/app.css'; 

export const App = () => {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<PublicLayout/>}>
                <Route index element={<Home />} />
            </Route>
        </Routes>
    </Router>
  )
}

if (document.getElementById('root')) {
    const Index = ReactDOM.createRoot(document.getElementById("root"));

    Index.render(
        <React.StrictMode>
            <App/>
        </React.StrictMode>
    )
}
