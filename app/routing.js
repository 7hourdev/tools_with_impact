import React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import ScrollToTop from './helper/ScrollToTop';

import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Donate from './pages/donate';
import FAQ from './pages/faq';
import RecentNews from './pages/recentnews';
import Sponsors from './pages/sponsors';

import Header from './modules/header'
import Footer from './modules/footer'

import Contents from 'contents'

import {observer} from 'mobx-react';

@observer
class App extends React.Component{
  render(){
    return(
      <Router>
        <ScrollToTop>
          <div>
            <Header/>
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  classNames="fade"
                  timeout={300, 300}
                >
                  {Contents.contents!=undefined?<div>
                    <Switch>
                      <Route exact path="/about" component={About}/>
                      <Route exact path="/contact" component={Contact}/>
                      <Route exact path="/faq" component={FAQ}/>
                      <Route exact path="/donate" component={Donate}/>
                      <Route exact path="/recentnews" component={RecentNews}/>
                      <Route exact path="/sponsors" component={Sponsors}/>
                      <Route exact path="/" component={Home}/>
                    </Switch>
                  </div>:<div/>}
                </CSSTransition>
              </TransitionGroup>
            <Footer/>
          </div>
        </ScrollToTop>
      </Router>
    );
  }
}

render(<App/>, document.getElementById('app'))