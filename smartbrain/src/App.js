import React, { Component } from 'react'
import Particles from 'react-particles-js'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'

const ParticlesOptions = {
    particles: {
        number: {
            value: 90,
            density: {
                enable: true,
                value_area: 800,
            },
        },
    },
}
class App extends Component {
    render() {
        return (
            <div className='App w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 font-mono fixed -z-2'>
                <Particles className='fixed inset-0 -z-1' params={ParticlesOptions} />
                <Navigation />
                <Logo />
                <Rank />
                <ImageLinkForm />
                {/* <FaceRecognition />   */}
            </div>
        )
    }
}

export default App
