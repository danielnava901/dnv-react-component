import React, { Component } from 'react';
import {
  FormLogin, 
  Page, 
  StepProgress, 
  Main, 
  Modal,
  LeftSide,
  Menu
} from './reactComponentLib';
import { number } from 'yup';


class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
    
    this.state = {
      email: "",
      password: "",
      step: 1,
      showModal: false
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

  onSendForm() {
    console.log("enviar");
  }

  onClickStep(step: number) {
    console.log("click", step);
    this.setState({
      step
    })
  }

  onModal(show: boolean) {
    this.setState({showModal: show});
  }

  render() {
    let step = [
      {caption: "uni"},
      {caption: "dos"}
    ];

    let items = [
      {
        id: 1,
        caption: "Menu 1",
        available: true,
        path: "/"
      },
      {
        id: 2,
        caption: "Menu 2",
        available: true,
        path: "/"
      }
    ];

    return (
      <Page>
        <LeftSide imgSrc="">
          <Menu items={items} />
        </LeftSide>
        <Main>
          <StepProgress steps={step} current_step={this.state.step} last_step={3} onClickStep={this.onClickStep} finish={true}/>
          <div className="row">
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
          </div>

          {
            this.state.showModal ? <Modal title="Hola" onClose={() => {this.onModal(false)}}>
              Nuemo vmodal
            </Modal>: null
          }
        </Main>
      </Page>
    );
  }
}

export default App;
