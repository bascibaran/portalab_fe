import React, {Component} from 'react';
import { Table, Icon, Segment, Grid, Input, Dropdown, Button } from "semantic-ui-react";

export default class FilterRow extends Component
{
    uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
    var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
    });
    }
    constructor(props)
    {
        super(props);
        this.state = {expanded:true, name:''};
        this.id = this.uuidv4();
        this.saveRow = this.saveRow.bind(this);
        this.handleFilterNameChange = this.handleFilterNameChange.bind(this);
        this.featureOptions = [
        {
            key: 'age',
            text:'age',
            value:'age'
        },
        {
            key: 'personality',
            text:'personality',
            value:'personality'
        }
        ];
        this.conditionOptions = [
        {
            key: 'contains',
            text:'contains',
            value:'contains'
        },
        {
            key: 'does not contain',
            text:'does not contain',
            value:'does not contain'
        },
        {
            key: 'equal to',
            text:'equal to',
            value:'equal to'
        },
        {
            key: 'does not equal',
            text:'does not equal',
            value:'does not equal'
        },
        {
            key: 'less than',
            text:'less than',
            value:'less than'
        },
        {
            key: 'less than or equal to',
            text:'less than or equal to',
            value:'less than or equal to'
        },
        {
            key: 'greater than',
            text:'greater than',
            value:'greater than'
        },
        {
            key: 'greater than or equal to',
            text:'greater than or equal to',
            value:'greater than or equal to'
        }

        ];
    }

    handleFilterNameChange(e)
    {
        this.setState({name:e.target.value})
    }

    renderExpanded()
    {
        return (
        <html>
        <Table.Row key={"filter-name-input-"+this.id}>
            <Table.Cell>name:  <Input placeholder='Filter name....'
            value={this.state.name}
            onChange={this.handleFilterNameChange}/></Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>
                <Dropdown
                placeholder='feature'
                fluid
                selection
                options={this.featureOptions}/>
            </Table.Cell>
            <Table.Cell>
                <Dropdown
                placeholder='condition'
                fluid
                selection
                options={this.conditionOptions}/>

            </Table.Cell>
            <Table.Cell>
                Value:  <Input placeholder='value...'/>
            </Table.Cell>
            <Button content='save' onClick={this.saveRow}/>
            </Table.Row>
            </html>
        );
    }

    expandRow()
    {
        this.expanded = true;

    }

    saveRow()
    {
        this.setState({expanded: false})
    }

    renderNonexpanded()
    {
        return (
            <Table.Row key={"filter-row-"+this.id}>
            <Table.Cell>{this.state.name}</Table.Cell>
            </Table.Row>
            )

    }

    render()
    {
        return this.state.expanded? this.renderExpanded() : this.renderNonexpanded();
    }
}