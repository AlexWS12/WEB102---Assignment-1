function Card({ image, title, location, date, instructor, link }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h2>{title}</h2>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Instructor:</strong> {instructor}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <button>Learn More</button>
      </a>
    </div>
  );
}

export default Card;
