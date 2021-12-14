import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
import Welcome from './welcome';
class App extends Component {
  render() {
    const { location } = this.props;
    return (
      <div className="app">
        <Route
          path="/welcome"
          component={() => <Welcome location={location} />}
        />
        {/* <Route path="/eventslist" component={EventsList} /> */}
        <Route path="/register" component={() => <Auth register={true} />} />
        <Route
          path="/login"
          component={() => <Auth register={false} location={location} />}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  location: state.router.location
});

export default connect(mapStateToProps)(App);