import React, { Component } from 'react'
import { gql } from 'apollo-boost'
import { graphql } from 'react-apollo'

/*	This is a sample container for rendering a list of Profiles
    using GraphQL for queries. To run this example, see instructions
    on the GQLIndex.js file under the 'src' directory.

    Feel free to remove this file if you do not intend to use GraphQL. */

const getProfiles = gql`
  {
    profiles {
      id
      email
    }
  }
`

class Profiles extends Component {

  render(){
    const profiles = this.props.data.profiles || []
    return (
      <div className="container">
        Profiles Container
        <ol>
          { profiles.map(profile => {
              return <li key={profile.id}>{profile.email}</li>
            })
          }
        </ol>
      </div>
    )
  }

}

export default graphql(getProfiles)(Profiles)
