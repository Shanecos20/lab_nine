import './App.css';
// Importing necessary modules from 'react-router-dom' to handle routing
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
// import Header from './components/Header'; // Header component is imported but currently commented out
import Content from './components/Content';
import Footer from './components/Footer';
import Read from './components/Read';
import Create from './components/Create';

function App() {
  return (
    // Wrapping the entire application with Router to enable routing
    <Router>
      {/* Navigation bar component that will be visible on all pages */}
      <NavigationBar />
      {/* Defining different routes for the application */}
      <Routes>
        {/* Route to the Home page, rendering Content component */}
        <Route path="/home" element={<Content />} />
        {/* Route to the Read page, rendering a simple message */}
        <Route path="/read" element={<Read />} />
        {/* Route to the Create page, rendering a simple message */}
        <Route path="/create" element={<Create />} />
      </Routes>
      {/* Footer component that will be visible on all pages */}
      <Footer />
    </Router>
  );
}

export default App;
