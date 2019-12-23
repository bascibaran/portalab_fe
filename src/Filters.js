import React, {Component} from 'react';
import FilterTable from './FilterTable';
import { Button } from 'semantic-ui-react'

export default class HomeView extends Component
{
    constructor(props)
    {
        super(props)
        this.state = {filters:[]};
        this.addFilter = this.addFilter.bind(this)
    }

    addFilter()
    {
        const newFiltList = this.state.filters;
        newFiltList.push({name:'name',x:'feature',op:'is equal to',y:' something something'})
        this.setState({filters:newFiltList})
    }


    render()
    {
        const element = (<div> Text from Element</div>) 
        return (
            <h1>
            <Button 
                icon='plus'
                content='add filter'
                labelPosition='right'
                onClick={this.addFilter} />
            <div>
                <FilterTable filters={this.state.filters} />
            </div>

            </h1>
        )
    }
}