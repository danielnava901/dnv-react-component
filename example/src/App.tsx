import React, { Component } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Page, LeftSide, Menu, Main, NotFound } from './reactComponentLib';
import All from './All';
import Public from './Public';

class App extends Component<any, any> {
  render() {
    const items = [
      {
        id: 1,
        caption: 'Menu 1',
        available: true,
        path: '/',
      },
      {
        id: 2,
        caption: 'Hello',
        available: true,
        path: '/hello',
      },
      {
        id: 3,
        caption: 'Public',
        available: true,
        path: '/public',
        icon: 'fas fa-door-open',
      },
    ];

    return (
      <Router>
        <Page>
          <LeftSide imgSrc="">
            <Menu items={items} />
          </LeftSide>
          <Switch>
            <Route path="/hello" exact={true}>
              <Main>
                <div>Hello</div>
              </Main>
            </Route>
            <Route path="/public" exact={false}>
              <Public />
            </Route>
            <Route path="/" exact={true}>
              <All />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </Page>
      </Router>
    );
  }
}

export default App;
