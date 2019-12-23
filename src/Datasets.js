import React, {Component} from 'react';
import DatasetTable from './DatasetTable'
import DatasetSearchBar from './DatasetSearchBar'

export default class DatasetView extends Component
{
    state = {filterText: '', datasets: []}

    componentDidMount() {
        this.url = 'http://127.0.0.1:5000/dataset';
        fetch(this.url)
        .then(res => res.json())
        .then((data) => {
            this.setState({datasets:data.result})
            console.log(this.state.datasets)
        })
        .catch(console.log)

    }

    handleFilterTextChange(filterText) {
    this.setState({
      filterText: filterText
    });
    }

    render()
    {
        //const element = (<div> Text from Element</div>) 
    



         return (
               <div className="container">
                <div className="col-xs-12">
                <h1>My datasets</h1>
                {JSON.stringify(this.state.datasets)}

                {this.state.datasets.map((dataset) => (
                  <div className="card">
                    <div className="card-body">
                      <h5 className="card-title">{dataset.name}</h5>
                      <h6 className="card-subtitle mb-2 text-muted">
                      { dataset.ds_type 
                      }             
                      </h6>
                    </div>
                  </div>
                ))}
                </div>
               </div>
            );
    }
}

