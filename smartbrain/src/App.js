import React, { Component } from 'react'
import Particles from 'react-particles-js'
import Clarifai from 'clarifai'
import './App.css'
import Navigation from './Components/Navigation/Navigation'
import Signin from './Components/SignIn/signin'
import Register from './Components/Register/register'
import Logo from './Components/Logo/Logo'
import ImageLinkForm from './Components/ImageLinkForm/ImageLinkForm'
import Rank from './Components/Rank/Rank'
import FaceRecognition from './Components/FaceRecognition/FaceRecognition'

const app = new Clarifai.App({
    apiKey: '31336ceab4104d52af4c3042a3e02ed5',
})

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
    constructor() {
        super()
        this.state = {
            input: '',
            imageUrl: '',
            box: {},
            route: 'signin',
            isSignin: false,
            user: {
                id: '',
                name: '',
                email: '',
                entries: 0,
                joined: '',
            },
        }
    }

    loadUser = (data) => {
        this.setState({
            user: {
                id: data.id,
                name: data.name,
                email: data.email,
                entries: data.entries,
                joined: data.joined,
            },
        })
    }

    calculateFaceLocation = (data) => {
        const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box
        const image = document.getElementById('inputimage')
        const width = Number(image.width)
        const height = Number(image.height)

        return {
            leftCol: clarifaiFace.left_col * width,
            topRow: clarifaiFace.top_row * height,
            rightCol: width - clarifaiFace.right_col * width,
            bottomRow: height - clarifaiFace.bottom_row * height,
        }
    }

    displayFaceBox = (box) => {
        this.setState({ box: box })
    }

    onInputChange = (event) => {
        this.setState({ input: event.target.value })
    }

    onButtonSubmit = () => {
        this.setState({ imageUrl: this.state.input })

        app.models
            .predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
            .then((response) => this.displayFaceBox(this.calculateFaceLocation(response)))
            .catch((err) => console.log(err))
    }

    onRouteChange = (route) => {
        if (route === 'signout') {
            this.setState({ isSignin: false })
        } else if (route === 'home') {
            this.setState({ isSignin: true })
        }
        this.setState({ route: route })
    }

    render() {
        const { isSignin, imageUrl, route, box } = this.state
        return (
            <div className='App w-full h-screen bg-gradient-to-r from-green-400 to-blue-500 font-mono fixed -z-2'>
                <Particles className='fixed inset-0 -z-1' params={ParticlesOptions} />
                <Navigation isSignin={isSignin} onRouteChange={this.onRouteChange} />
                {route === 'home' ? (
                    <div>
                        <Logo />
                        <Rank />
                        <ImageLinkForm onInputChange={this.onInputChange} onButtonSubmit={this.onButtonSubmit} />
                        <FaceRecognition box={box} imageUrl={imageUrl} />
                    </div>
                ) : this.state.route === 'signin' ? (
                    <Signin onRouteChange={this.onRouteChange} />
                ) : (
                    <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                )}
            </div>
        )
    }
}
export default App
