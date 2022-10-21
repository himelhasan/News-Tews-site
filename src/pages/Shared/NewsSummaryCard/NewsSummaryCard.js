import React from "react";
import { Card } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import { FaBookmark, FaEye, FaShareAlt, FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const NewsSummaryCard = ({ news }) => {
  const { _id, title, image_url, details, total_view, thumbnail_url, author, rating } =
    news;
  return (
    <Card>
      <Card.Header className="d-flex justify-content-between align-items-center">
        <div className="d-flex">
          <Image
            className="me-2"
            roundedCircle
            src={author?.img}
            style={{ height: "60px" }}
          ></Image>
          <div>
            <p className="mb-0 ">{author?.name}</p>
            <p className="text-muted">{author?.published_date}</p>
          </div>
        </div>{" "}
        <div>
          <FaShareAlt className="me-2" />
          <FaBookmark className="me-2" />
        </div>
      </Card.Header>
      <Card.Title>{title}</Card.Title> <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Text>
          {details.slice(0, 250) + "..."} <Link to={`/news/${_id}`}>Read more</Link>
        </Card.Text>
      </Card.Body>
      <Card.Footer className="d-flex justify-content-between">
        <div>
          <FaStar className="text-warning me-2"></FaStar>
          <span>{rating?.number}</span>
        </div>

        <div>
          <FaEye className="text-warning me-2"></FaEye>
          <span>{total_view}</span>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsSummaryCard;
