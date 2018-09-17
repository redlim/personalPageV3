import React, { Component } from 'react';

class Counter extends Component {
    state = {
       value: this.props.value
    };

    styles = {
        fontSize: '18px'
    };

    constructor () {
        super();
    }

    handleIncrement = () => {
        this.setState({
            value: this.state.value + 1
        })
    };

    render () {
        const classes = this.getTagClasses();
        console.log(this.props);
        return (
            <React.Fragment>
                <p style={this.styles} className={classes}>{this.formatCount()}</p>
                <button
                    className="button is-primary"
                    onClick={this.handleIncrement}>
                    Increment
                </button>
                    {this.renderTags()}
            </React.Fragment>
        );
    }

    formatCount() {
        const { value } = this.state;
        return value === 0 ? 'Zero' : value;
    }
    getTagClasses () {
        return this.state.count === 0 ? 'tag is-warning': 'tag is-primary';
    }
    renderTags () {
        if (this.state.tag.length === 0 ) return <p>There are no tags! </p>;
        return <ul> {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}</ul>
    }
}

export default Counter
