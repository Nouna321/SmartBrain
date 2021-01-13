import React from 'react'

class signin extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            signInEmail: '',
            signInPassword: '',
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/signin', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword,
            }),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data === 'success') {
                    this.props.onRouteChange('home')
                }
            })
    }

    render() {
        return (
            <div className='bg-white shadow-md rounded px-6 pt-6 pb-8 mb-4 flex flex-col mr-96 ml-96'>
                <div className='mb-4'>
                    <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='email'>
                        Email
                    </label>
                    <input
                        onChange={this.onEmailChange}
                        className='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
                        id='email'
                        type='email'
                        placeholder='email'
                    />
                </div>
                <div className='mb-6'>
                    <label className='block text-grey-darker text-sm font-bold mb-2' htmlFor='password'>
                        Password
                    </label>
                    <input
                        onChange={this.onPasswordChange}
                        className='shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3'
                        id='password'
                        type='password'
                        placeholder='******************'
                    />
                </div>
                <div className='flex items-center justify-between'>
                    <button onClick={this.onSubmitSignIn} className='bg-blue-600 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded' type='button'>
                        Sign In
                    </button>
                    <p onClick={() => this.props.onRouteChange('register')} className='text-grey-darker text-sm font-bold cursor-pointer'>
                        Register
                    </p>
                </div>
            </div>
        )
    }
}

export default signin
