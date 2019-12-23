import React, {Component} from 'react';
import { Table, Icon, Segment, Grid } from "semantic-ui-react";
import FilterRow from './FilterRow'
export default class FilterTable extends Component
{
    constructor(props)
    {
        super(props);
    }


    render()
    {
        const rows = [];
        this.props.filters.forEach((filter) => {
            rows.push(
                <FilterRow
                filter={filter}/>
                )
        });
        return (
            <Table selectable>
            <Table.Body>{rows}</Table.Body>
            </Table>
            )
    }
}