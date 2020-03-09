import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import {
  Page,
  LeftSide,
  Menu,
  Main,
  NotFound
} from './reactComponentLib';
import All from './All';
import Public from './Public';


class App extends Component<any, any> {

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
      },
      {
        id: 3,
        caption: "Public",
        available: true,
        path: "/public"
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
                  path="/"
                  exact={true}
                  children={<All />}
              />
              <Route
                  path="/hello"
                  exact={true}
                  children={<Main><div>Hello</div></Main>  }
              />
              <Route
                  path="/public"
                  exact={true}
                  children={<Public/>}
              />
              
              <Route children={<NotFound />}
              />
          </Switch>
        </Page>
      </Router>
      
    );
  }
}

export default App;
