import React, {Component} from 'react';
import DatasetRow from './DatasetRow'
import { Table, Icon, Segment, Grid } from "semantic-ui-react";

export default class DatasetTable extends Component
{
    constructor(props)
    {
        super(props);
    }

    render()
    {
        //const element = (<div> Text from Element</div>)
        const rows = [];
        const filterText = this.props.filterText;
        this.props.datasets.forEach((dataset) => {


            rows.push(
                <DatasetRow
                dataset={dataset}
                />
                );
        }) ;
        return (
            <Table selectable>
                <Table.Body>{rows}</Table.Body>
            </Table>

        )
    }
}