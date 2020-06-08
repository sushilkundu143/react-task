import React, {PureComponent} from 'react';
import './App.css';
import Data from './databases/data.json';

class Details extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: Data
        }
    }

    render() {
        const id = this.props.match.params.id;
        const cardElement = this
            .state
            .data
            .filter((item, i) => item.id === Number(id) && item);
        const card = cardElement.map((data, i) => (
            <div className="container">
                <figure className="image is-16by9"><img src={require("./assests/img/" + data.img + ".jpg")} alt=""/></figure>
            </div>
        ))
        console.log('details component is loaded')
        return (
            <div className="contianer">
                <section className="section">
                    <div className="columns is-multiline">
                        {card}
                    </div>
                </section>
            </div>
        );
    }
}

export default Details;
