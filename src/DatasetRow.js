import React, {Component} from 'react';
import { Table, Icon, Segment, Grid } from "semantic-ui-react";



export default class NavBarComponent extends Component
{
    constructor(props)
    {
        super(props)
        this.dataset  = this.props.dataset;
        this.state = {expanded : false};
    }

    renderItemCaret() {

        if (this.state.expanded) {
          return <Icon name="caret down"/>;
        } else {
          return <Icon name="caret right"/>;
        }
    }


    handleRowClick() {
        const newExpandStatus = this.state.expanded ? false : true;
        this.setState({expanded : newExpandStatus})
    }

    renderItemDetails() {
        return (
          <Segment basic>
            <Grid columns={3}>
          <Grid.Column>
          <Table.Row key={"row-data-" + this.name}>
            <Table.Cell>ds_type:{this.dataset.ds_type}</Table.Cell>
            <Table.Cell>Team:{this.dataset.team}</Table.Cell>
          </Table.Row>
          <Table.Row key={"row-data-" + this.name}>
            <Table.Cell>ds_type:{this.dataset.ds_type}</Table.Cell>
            <Table.Cell>Team:{this.dataset.team}</Table.Cell>
          </Table.Row>
          </Grid.Column>
          <Grid.Column>
                      <Table.Cell>personality:</Table.Cell>
                      <Table.Cell>{this.dataset.personality}</Table.Cell>
                      </Grid.Column>
            </Grid>
          </Segment>
        );
    }

    getSportIcon()
    {
        return (<Icon name="database"/>);
    }
    renderItem() {
        const clickCallback = () => this.handleRowClick();
        const sport_icon = this.getSportIcon();
        const itemRows = [
          <Table.Row onClick={clickCallback} key={"row-data-" + this.name}>
            <Table.Cell>{this.renderItemCaret()}</Table.Cell>
            <Table.Cell>{this.dataset.name}</Table.Cell>
            <Table.Cell>{sport_icon}{this.dataset.league}</Table.Cell>
          </Table.Row>
        ];

        if (this.state.expanded) {
          itemRows.push(
            <Table.Row key={"row-expanded-" + this.name}>
              <Table.Cell colSpan="4">{this.renderItemDetails()}</Table.Cell>
            </Table.Row>
          );
        }

        return itemRows;
      }


    render()
    {


        return this.renderItem()
    }
}