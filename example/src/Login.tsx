import React, {Component} from 'react';
import {Main, FormLogin} from './reactComponentLib';


class Login extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      email: "",
      password: "",
      username: "",
      step: 1,
      showModal: false,
      showModalRecovery: false
    };

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onSendForm = this.onSendForm.bind(this);
    this.onClickStep = this.onClickStep.bind(this);
    this.onModal = this.onModal.bind(this);
  }

  onChangeEmail(ev: any) {
    console.log("", ev.target.id);
    this.setState({
      [ev.target.id]: ev.target.value
    })
  }

  onSendForm(val: any) {
    console.log("enviar", val);
  }

  onClickStep(step: number) {
    console.log("click", step);
    this.setState({
      step
    })
  }

  onModal(show: boolean) {
    this.setState({showModalRecovery: show});
  }

  render() {
    return <Main>
    <div className="col-sm-12">
        <FormLogin 
          heading="Iniciar sesión"
          onSend={this.onSendForm}
          onChange={this.onChangeEmail} 
          email={this.state.email} 
          password={this.state.password}
          onClickRecovery={() => {this.onModal(true)}}
          />
      </div>
  </Main>
  }
};


export default Login;