import React, { Component } from "react"
import Header from '../components/header'
import Footer from '../components/footer'

class Home extends Component {
    render() {
        return (

            <div style={{ margin: `3rem auto`, maxWidth: 600 }}>
                <Header />
                <p>Welcome from Home</p>
                <Footer />
            </div>
        )
    }
}

export default Home;
