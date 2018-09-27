import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import AppComponent from './App'
import Content from './Content'
import biaoge from './biaoge'

export default class RouteComponent extends React.Component {
    render() {
        return (
            <div>
                <React.Fragment>
                    <Router>
                        <React.Fragment>
                            <Switch>
                                <Route path='/' component={AppComponent}></Route>
                            </Switch>
                        </React.Fragment>
                    </Router>
                </React.Fragment>
            </div>
        );
    }
}