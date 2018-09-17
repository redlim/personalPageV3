import React, { Component } from 'react';
import '../App.css';
import 'bulma/css/bulma.css';
import Counter from './counter';

class Counters extends Component {
    state = {
        counters: [
            {id:1,count:0},
            {id:2,count:0},
            {id:3,count:0},
            {id:4,count:0}
        ]
    };
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome Will, ya sabes React</h1>
                </header>
                <p className="App-intro">
                    {this.state.counters.map(counter =>
                        <Counter id={counter.id} value={counter.count} >
                            <h4>Title</h4>
                        </Counter>
                    )}
                </p>
            </div>
        );
    }
}

export default Counters;
