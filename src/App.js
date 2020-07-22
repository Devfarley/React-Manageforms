import React from 'react';
import Routes from './config/Routes'



class App extends React.Component {
state = {
  users: []
}
addUser(user){
  console.log(user)
    this.setState( {
      users: this.state.users.concat([user])
    },
    () => {console.log(this.state)}
  );
}
userLogin = (email) => {
  for(let i = 0; i < this.state.users.length; i++){
    if (this.state.users[i].email === email)
    return alert('Login Sucessfull');
  }  
    return alert('Email Does not exist');
  
}
userForgotPass = (email, password) => {
  for(let i = 0; i < this.state.users.length; i++){
    if(this.state.users[i].email === email){
      const userData = this.state.users.concat()
      userData[0].password = password
      this.setState({
          users: userData
        },
        () => {console.log(this.state.users)}
      );
    } 
      return alert('Email not found')
  }
}
render(){
    return (
      <div className="App">
        <Routes 
        addUser={user => this.addUser(user)} 
        userLogin={email => this.userLogin(email)}
        userForgotPass={(email, password) => this.userForgotPass(email, password)}  
        />
      </div>
    );
  }
}

export default App;
