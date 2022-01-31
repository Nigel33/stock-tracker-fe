import React, { Component } from 'react'
import { compose } from 'redux'

// import WithTables from './actions'
import WithQueues from './actions'
import WithTables from 'containers/Tables/actions'
import ReactTable from 'react-table'

import Reservation from './Reservation'

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

class Queues extends Component {
  componentDidMount = () => {
    this.props.getIncompleteQueues()
  }
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={ 5 }>
              <h1 className="mb-3">Queue modules</h1>
              <div className="mb-3">
                <Button 
                  variant="success"
                  onClick={() => {                    
                    this.props.checkAvailableTables()
                  }}>
                  Place Queue in Chairs
                </Button> 
              </div>
              <ReactTable 
                data={ this.props.queues }
                columns={[
                  {
                    Header: "Queue No",
                    accessor: "queueNo"
                  },                  
                ]}/>
            </Col>
          </Row>
        </Container>   
        <Reservation {...this.props} />            
      </>
    )
  }
}

export default compose(
  WithTables,
  WithQueues,
)( Queues )