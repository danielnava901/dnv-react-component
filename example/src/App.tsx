import React, { Component } from 'react';
import {FormLoginDNV} from './reactComponentLib';


class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    
    this.state = {
      email: "",
      password: ""
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSendForm = this.onSendForm.bind(this);
  }

  onChangeEmail(ev: any) {
    console.log("", ev.target.id);
    this.setState({
      [ev.target.id]: ev.target.value
    })
  }

  onSendForm() {
    console.log("enviar");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <FormLoginDNV 
              heading="Iniciar sesión"
              onSend={this.onSendForm}
              onChange={this.onChangeEmail} 
              email={this.state.email} 
              password={this.state.password}/>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
