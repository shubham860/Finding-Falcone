import React, {Component} from 'react';
import Header from './Landing page/Header/Header';
import PlanetPanel from './Landing page/Main Panel/Static panel/Dashboard';
import Dashboard from './Landing page/Main Panel/Dynamic Panels/PlanetPanel';
import Footer from './Landing page/Footer/Footer';

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
