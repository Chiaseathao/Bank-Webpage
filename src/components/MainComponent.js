import React, { Component } from 'react';
import Navigation from "./NavigationComponent";
import Footer from "./FooterComponent";

class Main extends Component {

    render() {
        return (
            <div>
                <Navigation />
                <Footer />
            </div>
        )
    }
}

export default Main;