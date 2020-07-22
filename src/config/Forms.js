import React from 'react'


export class CreateAccountForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        console.log(event.target)
        this.setState({
                [event.target.name]: event.target.value
            }
        )
        
    }
    handleSubmit(event){
        alert('Success! You have created an account. Go to the "Login" page and login.')
        event.preventDefault();
        console.log(this.state)
        this.props.addUser(this.state)
    }
    render(){
        return(
            <section>
                <form>
                    <label htmlFor="fname">First Name</label>
                    <input type="text" name="fname" id="fname" />
                    <br></br>
                    <label htmlFor="lname">Last Name</label>
                    <input type="text" name="lname" id="lname" />
                    <br></br>
                    <label htmlFor="email-address">Email Address</label>
                    <input type="email" name="email" id="email-address" 
                    value={this.state.email} onChange={this.handleChange} required/>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" 
                    value={this.state.password} onChange={this.handleChange} required/>
                    <br></br>
                    <input type="submit" value="submit" onClick={this.handleSubmit} />
                </form>
            </section>
        );
    }
}

export class LoginForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.emailCheck = this.emailCheck.bind(this);
    }
    handleChange(event){
        console.log(event.target)
        this.setState({
                [event.target.name]: event.target.value
            }
        )   
    }
    emailCheck(event){
        event.preventDefault();
        const email = this.state.email
        console.log(email)
        this.props.userLogin(email);
    }
   render(){
        return(
            <section>
                <form>
                    <label htmlFor="email-address">Email Address</label>
                    <input type="email" name="email" id="email" 
                    value={this.state.email} onChange={this.handleChange} required/>
                    <br></br>
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" required/>
                    <br></br>
                    <input type="submit" value="submit" onClick={this.emailCheck} />
                </form>
            </section>
        );
   }
}

export class ForgotPassForm extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            email: "",
            password: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.changePass = this.changePass.bind(this);
    }
    handleChange(event){
        console.log(event.target)
        this.setState({
                [event.target.name]: event.target.value
            }
        )   
    }
    changePass(event){
        event.preventDefault();
        const email = this.state.email
        const password = this.state.password
        console.log(email, password)
        this.props.userForgotPass(email, password);
    }
   render(){
    return(
        <section>
            <form>
                <h3>Change password link will be sent to your email.</h3>
                <label htmlFor="email-address">Email Address:</label>
                <input type="email" name="email" id="email" 
                value={this.state.email} onChange={this.handleChange} required/>
                <br></br>
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" id="password" 
                value={this.state.password} onChange={this.handleChange} required/>
                <br></br>
                <input type="submit" value="submit" onClick={this.changePass}/>
            </form>
        </section>
    );
   }
}

