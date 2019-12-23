import React, {Component} from 'react';

export default class AthleteSearchBar extends Component
{
    constructor(props)
    {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    }


    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }
    render () {
        return (
              <form>
                <input type="text" placeholder="Keyword Search..."
                    value={this.props.filterText}
                    onChange={this.handleFilterTextChange}
                />
                
                  <input type="checkbox" />
                  {' '}
                  Filter out ineligible athletes
                
              </form>
        )
    }
}