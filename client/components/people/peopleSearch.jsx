import React from 'react';
import Relay from 'react-relay';

class PeopleSearch extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {this.props.viewer.people.map(edge => edge.node).map(person =>
          `${person.first_name} - ${person.last_name}`
        )}
      </div>
    )
  }
}

PeopleSearch.propTypes = {
  viewer: React.PropTypes.object
};

export default Relay.createContainer(
  PeopleSearch,
  {
    fragments: {
      viewer: () => Relay.QL`
          fragment on Viewer {
              people {
                  edges {
                      node {
                          id,
                          first_name,
                          last_name,
                          gender,
                          occupation
                      }
                  }
              }
          }
      `
    }
  }
);