import './App.css';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            element={<HomePage />}
          />
          <Route
            path="/:number"
            element={<DetailsPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
