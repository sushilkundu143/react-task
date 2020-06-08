import React from 'react';
import './Card.css';
import {Link} from 'react-router-dom';

function Card(props) {
    return (
        <div className="column is-3">
            <div className="card r-raduis">
                <div className="card-image">
                    <figure className="image">
                        <img src={require("../assests/img/" + props.data.img + ".jpg")} alt="placeholder" className="img-radius"/>
                    </figure>
                </div>
                <div className="card-content p-1">
                    <div className="media">
                        <div className="media-content m-width">
                            <p className="title is-5">{props.data.title}</p>
                            <p className="subtitle is-6">{props.data.subtitle}</p>
                        </div>
                        <div className="media-right icon-p">
                            <span className="icon has-text-warning w-auto">
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star" aria-hidden="true"></i>
                                <i className="fa fa-star-half-o" aria-hidden="true"></i>
                                <i className="fa fa-star-o" aria-hidden="true"></i>
                            </span>
                            <span className="pl-10">{props.data.rating}</span>
                        </div>
                    </div>
                    <div className="content">
                        {props.data.offers.title && (<h5>{props.data.offers.title}</h5>)}
                        <p>{props.data.offers.des}
                        </p>
                    </div>
                </div>
                <div className="card-footer no-border p-1">
                    <span className="icon has-text-danger is-large">
                        <i className="fa fa-heart-o fa-2x" aria-hidden="true"></i>
                    </span>
                    <button className="button ml-auto"><Link to={"/details/" + props.data.id} target="_black">Buy Now</Link></button>
                </div>
            </div>
        </div>
    )
}

export default Card;