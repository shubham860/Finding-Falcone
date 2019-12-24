import React, {Component} from 'react';
import './PlanetPanel.scss'

class PlanetPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planet1 : false,
            planet2 : false,
            planet3 : false,
            planet4 : false,
            planet5 : false,
            planet6 : false
        }
    }

    handler = (event) => {
       this.setState({
           [event.target.name] : ![event.target.value]
       })
    };

    render() {
        console.log(this.state);
        return (
            /* Planet panel :- it contains all the planets images and Names */
            <div className="planetPanel">
                <div className="row">
                    <div className="planet">
                        <button onClick={this.handler} name="planet1">Planet-1</button>
                    </div>
                    <div className="planet">
                        <button onClick={this.handler} name="planet2">Planet-2</button>
                    </div>
                </div>
                <div className="row">
                    <div className="planet">
                        <button onClick={this.handler} name="planet3">Planet-3</button>
                    </div>
                    <div className="planet">
                        <button onClick={this.handler} name="planet4">Planet-4</button>
                    </div>
                </div>
                <div className="row">
                    <div className="planet">
                        <button onClick={this.handler} name="planet5">Planet-5</button>
                    </div>
                    <div className="planet">
                        <button onClick={this.handler} name="planet6">Planet-6</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default PlanetPanel;
