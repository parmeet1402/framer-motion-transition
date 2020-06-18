import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Card = ({ data: { id, title, category, backgroundURL } }) => {
  return (
    <Link to={`/${id}`}>
      <p>{title}</p>
    </Link>
  );
};

export default Card;
