import React, {Component} from 'react';

class Pokecard extends React.Component {
    render() {
        return(
            <div className="Pokecard">
                <h1>{this.props.name}</h1>
            </div>
        )
    }
}

export default Pokecard;