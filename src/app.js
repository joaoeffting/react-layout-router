import React from 'react';
import ReactDom from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Home from './pages/Home';
import App from './pages/App';
import Cursos from './pages/Cursos';
import Sobre from './pages/Sobre';

import Curso from './components/Curso';

ReactDom.render((
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home} />
                <Route path="/cursos" component={Cursos}>
                    <Route path=":nome" component={Curso} />
                </Route>
                <Route path="/sobre" component={Sobre} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);