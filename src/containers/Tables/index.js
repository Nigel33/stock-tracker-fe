import React, { Component } from 'react'
import { compose } from 'redux'

import WithTables from './actions'
import WithChairs from './actions/chairs'
import ReactTable from 'react-table'

import Create from './Create'
import Update from './Update'
import Reservation from './Reservation'
import Queues from 'containers/Queues'

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

class Tables extends Component {
  componentDidMount = () => {
    this.props.getTables()
  }
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={ 7 }>
              <h1 className="mb-3">Table modules</h1>
              <div className="mb-3">
                <Button 
                  style={{ marginRight: '15px' }} 
                  variant="primary"
                  onClick={() => {
                    this.props.onChangeTablesHOC( 'showCreateTable', true )
                    }}>Create a table</Button>
                <Button 
                  variant="success"
                  onClick={() => {
                    
                    this.props.checkAvailableTables()
                  }}>
                  Make Reservations
                </Button>
              </div>
              <ReactTable 
                data={ this.props.tables }
                columns={[
                  {
                    Header: "Label",
                    accessor: "label"
                  },
                  {
                    Header: "Max Chairs",
                    Cell: row => {
                      return row.original.chairs.length
                    }
                  },
                  {
                    Header: "Chairs Available",
                    Cell: row => {
                      return row.original.chairs.filter(x => x.isAvailable).length
                    }
                  },
                  {
                    Header: "Actions",
                    Cell: row => {
                      return (
                        <Button 
                          variant="primary"
                          onClick={ () => this.props.getSelectedTable( row.original._id )}>Edit</Button>
                      )
                    }
                  }
                ]}/>
            </Col>
            <Col md={ 5 }>
              <Queues />
            </Col>
          </Row>
        </Container>          
        <Create { ...this.props }/>
        <Update { ...this.props }/>           
        <Reservation { ...this.props }/>      
      </>
    )
  }
}

export default compose(
  WithTables,
  WithChairs,
)( Tables )