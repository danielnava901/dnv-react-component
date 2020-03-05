import React, { Component } from 'react';
import {
  FormLogin, 
  Page, 
  StepProgress, 
  Main, 
  Modal,
  LeftSide,
  Menu,
  TableHistory
} from './reactComponentLib';



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

    let data: Array<any> = [
      {"loan_id":"25","created_at":"2020-02-13 18:41:28","days":"9","require_amount":"120000.00","title":"Titulazo","description":"Nada nada, siguele","pointed":"1","point_balance":"28","status":"1","term":"12","credit_destination_name":null,"username":"rober1","names":"isaelasd","lastname_first":"Barrera","lastname_second":"Barrera","curp":"dadsda","rfc":"qqwqw","city":"Chilpancingo","state":"Guarrero","colony":"guerrero","street":"Blvd. Vicente Guerrero  Km 270, guerrero, guerrero","postal_code":"39010","status_text":"Pendiente","interest":null,"rate_type":null}
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

            <TableHistory columns={[
                            {
                                key: 'loan_id',
                                text: 'Id',
                                display: true
                            },
                            {
                                key: 'created_at',
                                text: 'Fecha de solicitud',
                                display: true,
                            },
                            {
                                key: 'status_text',
                                text: 'Status',
                                display: true,
                                render: (value: any, row: any) => {
                                    return <div className={`loan-state-${row.status}`}>{value}</div>
                                }
                            },
                            {
                                key: 'require_amount',
                                text: 'Monto',
                                display: true,
                            },
                            {
                                key: 'title',
                                text: 'Título',
                                display: true,
                            },
                            {
                                key: 'description',
                                text: 'Descripción',
                                display: true
                            }
                            ]}
                              data={data}
                              onClickTr={() => {}}
                              hide={[
                                  "pointed",
                                  "point_balance",
                                  "term",
                                  "credit_destination_name",
                                  "username",
                                  "names",
                                  "lastname_first",
                                  "lastname_second",
                                  "curp",
                                  "rfc",
                                  "city",
                                  "state",
                                  "colony",
                                  "street",
                                  "postal_code",
                                  "interest",
                                  "rate_type"
                              ]}
                        />


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

            <TableHistory columns={[
                            {
                                key: 'loan_id',
                                text: 'Id',
                                display: true
                            },
                            {
                                key: 'created_at',
                                text: 'Fecha de solicitud',
                                display: true,
                            },
                            {
                                key: 'status_text',
                                text: 'Status',
                                display: true,
                                render: (value: any, row: any) => {
                                    return <div className={`loan-state-${row.status}`}>{value}</div>
                                }
                            },
                            {
                                key: 'require_amount',
                                text: 'Monto',
                                display: true,
                            },
                            {
                                key: 'title',
                                text: 'Título',
                                display: true,
                            },
                            {
                                key: 'description',
                                text: 'Descripción',
                                display: true
                            }
                            ]}
                              data={data}
                              onClickTr={() => {}}
                              hide={[
                                  "pointed",
                                  "point_balance",
                                  "term",
                                  "credit_destination_name",
                                  "username",
                                  "names",
                                  "lastname_first",
                                  "lastname_second",
                                  "curp",
                                  "rfc",
                                  "city",
                                  "state",
                                  "colony",
                                  "street",
                                  "postal_code",
                                  "interest",
                                  "rate_type"
                              ]}
                        />

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

            <TableHistory columns={[
                            {
                                key: 'loan_id',
                                text: 'Id',
                                display: true
                            },
                            {
                                key: 'created_at',
                                text: 'Fecha de solicitud',
                                display: true,
                            },
                            {
                                key: 'status_text',
                                text: 'Status',
                                display: true,
                                render: (value: any, row: any) => {
                                    return <div className={`loan-state-${row.status}`}>{value}</div>
                                }
                            },
                            {
                                key: 'require_amount',
                                text: 'Monto',
                                display: true,
                            },
                            {
                                key: 'title',
                                text: 'Título',
                                display: true,
                            },
                            {
                                key: 'description',
                                text: 'Descripción',
                                display: true
                            }
                            ]}
                              data={data}
                              onClickTr={() => {}}
                              hide={[
                                  "pointed",
                                  "point_balance",
                                  "term",
                                  "credit_destination_name",
                                  "username",
                                  "names",
                                  "lastname_first",
                                  "lastname_second",
                                  "curp",
                                  "rfc",
                                  "city",
                                  "state",
                                  "colony",
                                  "street",
                                  "postal_code",
                                  "interest",
                                  "rate_type"
                              ]}
                        />
        </Main>
      </Page>
    );
  }
}

export default App;
