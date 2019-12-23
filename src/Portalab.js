
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
//import NavBarComponent from './NavBarComponent'
import { Route, NavLink, HashRouter} from 'react-router-dom';

import Datasets from './Datasets';
import Filters from './Filters';
import Help from './Help';

export default class Portalab extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {filters:[], filteredDatasets:[]}
        this.handleFilterChange = this.handleFilterChange.bind(this);

    }

    filterDatasets()
    {
        return <b/>
    }

    handleFilterChange(filter) {}

    render () {
        return (
        <HashRouter>
        <div>
          <h1>coarse | PORTALAB</h1>
          <ul className="header">
            <li><NavLink exact to="/">DATASETS</NavLink></li>
            <li><NavLink to="/filters"></NavLink></li>
            <li><NavLink to="/help">HELP</NavLink></li>
          </ul>
          <div className="content">
             <Route exact path="/" render={(props) => <Datasets Datasets={this.state.datasets} />} />
             <Route path="/filters" component={Filters}/>
             <Route path="/help" component={Help}/>
          </div>
        </div>
      </HashRouter>
            )
    }
}