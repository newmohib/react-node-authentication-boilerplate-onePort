import React from 'react';
import { Switch, Route } from 'react-router';

import Home from '../components/home';
import { Menu } from '../components/menu';
import { Registration, Login } from '../components/account';

class Routes extends React.Component {
  render() {
    const { token } = this.props;

    return (
      <div>
        <Menu token={token} />
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/Registration' component={Registration} />
          <Route exact={true} path='/Login' component={Login} />
        </Switch>
      </div>
    );
  }
}

export default Routes;
