import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function MovieCard({ movies, type }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${type}/${movies.id}`);
  };

  return (
    <motion.div
      className="col-6 col-sm-4 col-md-3 mb-4 position-relative"
      onClick={handleClick}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }} // animates when 30% visible
    >
      <div
        className="card bg-dark text-white border-0 movie-card"
        style={{ height: "100%", cursor: "pointer" }}
      >
        <div className="card-hover">
          <img
            src={movies.poster_url}
            className="card-img rounded position-relative"
            alt={movies.title}
          />
        </div>
        <div className="position-absolute top-0 end-0 bg-dark px-2 py-1 rounded-start text-warning fw-bold">
          ⭐ {Number(movies.vote_average).toFixed(1)}
        </div>
      </div>
    </motion.div>
  );
}
