import React from "react";

const CustomerReview = ({ text, author }) => (
  <blockquote className="border rounded p-3 bg-light mt-3">
    <p>{text}</p>
    <footer className="blockquote-footer">{author}</footer>
  </blockquote>
);

export default CustomerReview;
