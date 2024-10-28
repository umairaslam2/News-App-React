import defaultImage from "../assets/images.jpg";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "345px" }}
    >
      <img
        src={src || defaultImage} // Fallback if no image is provided
        className="card-img-top"
        alt="News thumbnail"
        style={{
          height: "200px",
          width: "100%", // Use 100% to make the image responsive
          objectFit: "cover", // Ensure the image covers the container without distortion
        }}
      />
      <div className="card-body">
        <h5 className="card-title">
          {title ? title.slice(0, 50) : "No title available"}
        </h5>
        <p className="card-text">
          {description
            ? description.slice(0, 90)
            : "Description not available. Click to read more."}
        </p>
        <a href={url} className="btn btn-primary" target="_blank" rel="noopener noreferrer">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
