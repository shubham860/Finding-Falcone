import React, {Component} from 'react';
import Header from '../Header/Header';
import PlanetPanel from '../Main panel/Static panel/PlanetPanel';
import Dashboard from '../Main panel/Dynamic panels/Dashboard';
import Footer from '../Footer/Footer';
import './LandingPage.scss'

class LandingPage extends Component {
    render() {
        return (

            <div className="mainContainer">
                <div className="header">
                    <Header/>
                </div>

                <div className="mainPanel">
                    <div className="staticPanel">
                        <PlanetPanel/>
                    </div>

                    <div className="dynamicPanel">
                        <Dashboard/>
                    </div>
                </div>

                <div className="footer">
                    <Footer/>
                </div>
            </div>

        );
    }
}

export default LandingPage;
