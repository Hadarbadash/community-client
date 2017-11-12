import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Updates extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.getDavUpdates();
  }

  render(){

    let updateList = this.props.updates.map((update, index) => {
      return (<UpdateItem key={index} details={update} />);
    });
    return(
      <div>
        <h2 className="section-header">Update List</h2>
        <table className="table table-striped">
          <thead>
            <th scope="col">Date</th>
            <th scope="col">Description</th>
            <th scope="col">Actions</th>
          </thead>
          <tbody>
            {updateList}
          </tbody>
        </table>
      </div>
    );
  }
}

class UpdateItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <tr>
          <td>{this.props.details.createdAt}</td>
          <td>{this.props.details.description}</td>
          <td>Actions</td>
        </tr>
      </div>
    );
  }

}

Updates.propTypes = {
  updates: PropTypes.array,
  getDavUpdates: PropTypes.func
};

UpdateItem.propTypes = {
  details: PropTypes.object
};

export default Updates;