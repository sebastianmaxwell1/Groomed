import React from 'react';
// import Header from './utils/Header';
import { Routes, Route } from 'react-router-dom';
import * as actions from '../components/actions';
import { connect } from 'react-redux';
import M from 'materialize-css/dist/js/materialize.min.js';
import '../Styles/Breakroom.css';

import Welcome from './Welcome';
import League from './League';
import Team from './Team';
import Player from './Player';
import Soccer from './Soccer';
import EventDetails from './EventDetails';

class Breakroom extends React.Component {
  componentDidMount() {
    // this.props.fetchUser();
    // Sidebar
    var elems = document.querySelectorAll('.sidenav');
    M.Sidenav.init(elems, {});
  }

  render() {
    return (
      <div>
        <Routes>
          <Route exact path="/" component={Welcome} />
          <Route path="/soccer" component={Soccer} />
          <Route path="/league/:league" component={League} />
          <Route path="/team/:id" component={Team} />
          <Route path="/player/:id" component={Player} />
          <Route path="/eventDetails/:id" component={EventDetails} />
        </Routes>
      </div>
    );
  }
}

function mapStateToPros(state) {
  return { authenticated: state.auth.authenticated };
}

// export default connect(mapStateToPros, actions)(BreakRoom);
export default Breakroom;