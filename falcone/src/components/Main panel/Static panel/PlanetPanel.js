import React, {Component} from 'react';
import './PlanetPanel.scss';
import axios from 'axios';
import planet1 from '../../../assets/images/5.png';
import planet2 from '../../../assets/images/6.png';
import planet3 from '../../../assets/images/7.png';
import planet4 from '../../../assets/images/8.png';
import planet5 from '../../../assets/images/9.png';
import planet6 from '../../../assets/images/10.png';

class PlanetPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            planets : [],
            planetsImages : [planet1,planet2,planet3,planet4,planet5,planet6],
            infoObject : {},
            class : false
        }
    }

    /* Fetching Planets Names From Planets API */
    componentDidMount() {
        axios
            .get(`https://findfalcone.herokuapp.com/planets`)
            .then(response => {
                this.setState({
                    planets: response.data
                })
            })
            .catch(error => {
                alert(error)
            });
    }



 render() {
        const {planets,planetsImages,infoObject} = this.state;
        let arr = [];
        planetsImages.forEach(function(k,i){
            infoObject[k] = planets[i];
        });

     for (let prop in infoObject) {
         if (infoObject.hasOwnProperty(prop)) {
             let innerObj = {};
             innerObj[prop] = infoObject[prop];
             arr.push(innerObj);
         }
     }

 return (
            /* Planet panel :- it contains all the planets images and Names */
            <div className="planetPanel">
                <div className="row">
                    {
                        arr.map((item,i) => {
                            return(
                                <button onClick={this.highlighter} className="panel">
                                    <div className="planetsPanel" key={i}>
                                        <img src={Object.keys(item)} alt="planets" className="planets" />
                                        {
                                            item[Object.keys(item)]===undefined ? null : (
                                                <div>
                                                    <p className="planetsDetails">{item[Object.keys(item)].name}</p>
                                                </div>
                                            )}
                                    </div>
                                </button>
                            )
                        })
                    }
                </div>
            </div>
        )
    }
}

export default PlanetPanel;
