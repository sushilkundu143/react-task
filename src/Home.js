import React, {PureComponent} from 'react';
import './App.css';
import Card from './components/Card'
import Data from './databases/data.json'

class App extends PureComponent {
    constructor() {
        super()
        this.state = {
            data: Data
        }
    }
    // componentDidMount() {
    //   // console.log('data:', Data)
    //     fetch('./databases/data.json')
    //         .then(res => res.json())
    //         .then(data => {
    //             console.log('response data:', data)
    //             return this.setState({data});
    //         }, error => console.log(error))
    // }
    render() {
      //console.log('updated data:', this.state.data)
      const cardElements = this.state.data.map((item, i) => <Card data={item} key={i}/>)
        return (
            <div className="contianer">
                <section className="section">
                    <div className="columns is-multiline">
                        {cardElements}
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
