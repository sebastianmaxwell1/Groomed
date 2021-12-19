import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import Breakroom from './pages/Breakroom'
ReactDOM.render(
    <Router>
      <App />
      <Breakroom />
    </Router>,
  document.getElementById('root')
)


// import React from 'react'
// import ReactDOM from 'react-dom'
// import { Provider } from 'react-redux';
// import store from './store';
// import { StoreContext } from './context';
// import { BrowserRouter as Router } from 'react-router-dom'
// import App from './App';
// ReactDOM.render(
//   <Provider store={store} context={StoreContext}>
//     <Router>
//       <App />
//     </Router>,
//   </Provider>,
//   document.getElementById('root')
// )