import React from "react";
import "./card.css";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Card = (props) => {

    return (
        <div className="card card-anime" >
        <img src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.synopsis.substring(0, 199) + "..."}</p>
            <Link to={`/anime/${props.id}`} className="btn btn-primary">Go somewhere</Link>
        </div>
        </div>
    )

}

Card.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    title: PropTypes.string,
    synopsis: PropTypes.string
}

export default Card;