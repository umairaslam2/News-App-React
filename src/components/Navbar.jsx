import { useState } from 'react';

const Navbar = ({ setCategory }) => {
  const [activeCategory, setActiveCategory] = useState("general");

  const handleCategoryChange = (category) => {
    setCategory(category);
    setActiveCategory(category);
  };

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <span className="badge bg-light text-dark fs-4">News App</span>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "business" ? "active" : ""}`} onClick={() => handleCategoryChange("business")}>Business</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "entertainment" ? "active" : ""}`} onClick={() => handleCategoryChange("entertainment")}>Entertainment</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "health" ? "active" : ""}`} onClick={() => handleCategoryChange("health")}>Health</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "science" ? "active" : ""}`} onClick={() => handleCategoryChange("science")}>Science</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "sports" ? "active" : ""}`} onClick={() => handleCategoryChange("sports")}>Sports</div>
            </li>
            <li className="nav-item">
              <div className={`nav-link ${activeCategory === "technology" ? "active" : ""}`} onClick={() => handleCategoryChange("technology")}>Technology</div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
