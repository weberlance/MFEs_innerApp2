import React from 'react';
import { Router, Switch, Route, Redirect, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Navbar from './Navbar/Navbar';
import Loader from './Loader/Loader';
import Home from '../Pages/Home';
import Page from '../Pages/Page';
import NotFound from '../Pages/NotFound';

class App extends React.Component {
  render() {
    const { loader, history } = this.props;

    return (
      <Router history={history}>
        <div>
          {loader ? <Loader /> : null}
          <Navbar />
          <Switch>
            <Route path="/innerApp2/innerRoute1" component={Page} />
            <Route path="/innerApp2" component={Home} />
            <Route path="/" component={Home} />
            <Route path="*" component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = ({ loader }) => ({
  loader,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {

    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
