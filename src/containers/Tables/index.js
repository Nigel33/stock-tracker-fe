import React, { Component } from 'react'

import WithTables from './actions'

class Tables extends Component {
  componentDidMount = () => {
    this.props.getTables()
  }
  
  render() {
    return (
      <>
        <div>This is tables module</div>
      </>
    )
  }
}

export default WithTables( Tables )