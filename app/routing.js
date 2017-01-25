import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Donate from './pages/donate';
import FAQ from './pages/faq';
import RecentNews from './pages/recentnews';
import Sponsors from './pages/sponsors';
import App from './app';

render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home}/>
      <Route path="about" component={About}/>
      <Route path="contact" component={Contact}/>
      <Route path="faq" component={FAQ}/>
      <Route path="donate" component={Donate}/>
      <Route path="recentnews" component={RecentNews}/>
      <Route path="sponsors" component={Sponsors}/>
    </Route>
  </Router>
), document.getElementById('app'))