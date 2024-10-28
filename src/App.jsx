import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import NewsBoard from './components/NewsBoard';

function App() {
  // State to hold the current news category, defaulting to "general"
  const [category, setCategory] = useState("general");

  return (
    <>
      {/* Navbar component for category selection */}
      <Navbar setCategory={setCategory} />
      {/* NewsBoard component to display articles based on selected category */}
      <NewsBoard category={category} />
    </>
  );
}

export default App;
