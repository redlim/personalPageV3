import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        imageUrl: 'https://picsum.photos/200',
        tag: ['tag0','tag1', 'tag2']
    };

    styles = {
        fontSize: '18px'
    };

    render () {
        const classes = this.getTagClasses();

        return (
            <React.Fragment>
                <p style={this.styles} className={classes}>{this.formatCount()}</p>
                <button className="button is-primary">Increment</button>
                <ul>
                    {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
                </ul>
            </React.Fragment>
        );
    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
    getTagClasses () {
        return this.state.count === 0 ? 'tag is-warning': 'tag is-primary';
    }
}

export default Counter
