import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  Page,
  LeftSide,
  Menu,
  Main
} from './reactComponentLib';
import All from './All';


class App extends Component<any, any> {

  constructor(props: any) {
    super(props);
  }

  render() {
    let items = [
      {
        id: 1,
        caption: "Menu 1",
        available: true,
        path: "/"
      },
      {
        id: 2,
        caption: "Hello",
        available: true,
        path: "/hello"
      }
    ];


    return (
      <Router>
        <Page>
          <LeftSide imgSrc="">
            <Menu items={items} />
          </LeftSide>
          <Switch>
              <Route
                  path="/hello"
                  exact={true}
                  children={<Main><div>Hello</div></Main>  }
              />
              <Route
                  path="/"
                  exact={true}
                  children={<All />}
              />
          </Switch>
        </Page>
      </Router>
      
    );
  }
}

export default App;
