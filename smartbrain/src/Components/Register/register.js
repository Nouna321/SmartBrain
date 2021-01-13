import React from 'react'

class register extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }

    onSubmitSignIn = () => {
        fetch('http://localhost:3000/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: this.state.name,
                email: this.state.email,
                password: this.state.password,
            }),
        })
            .then((response) => response.json())
            .then((user) => {
                if (user) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home')
                }
            })
    }

    render() {
        const { onRouteChange } = this.props
        return (
            <div className='bg-grey-lighter min-h-screen flex flex-col'>
                <div className='container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2'>
                    <div className='bg-white px-6 py-8 rounded shadow-md text-black w-full'>
                        <h1 className='mb-8 text-3xl text-center'>Sign up</h1>
                        <input onChange={this.onNameChange} type='text' className='block border border-grey-light w-full p-3 rounded mb-4' name='name' placeholder='Name' />

                        <input onChange={this.onEmailChange} type='text' className='block border border-grey-light w-full p-3 rounded mb-4' name='email' placeholder='Email' />

                        <input
                            onChange={this.onPasswordChange}
                            type='password'
                            className='block border border-grey-light w-full p-3 rounded mb-4'
                            name='password'
                            placeholder='Password'
                        />

                        <button
                            onClick={this.onSubmitSignIn}
                            type='submit'
                            className='w-full text-center py-3 rounded bg-green-600 text-white hover:bg-green-dark focus:outline-none my-1'>
                            Create Account
                        </button>

                        <div className='text-center text-sm text-grey-dark mt-4'>
                            By signing up, you agree to the
                            <a className='no-underline border-b border-grey-dark text-grey-dark' href='#'>
                                Terms of Service
                            </a>
                            and
                            <a className='no-underline border-b border-grey-dark text-grey-dark' href='#'>
                                Privacy Policy
                            </a>
                        </div>
                    </div>

                    <div className='text-grey-dark mt-6'>
                        Already have an account?
                        <a className='no-underline border-b border-blue text-blue' href='../login/'>
                            Log in
                        </a>
                        .
                    </div>
                </div>
            </div>
        )
    }
}

export default register
