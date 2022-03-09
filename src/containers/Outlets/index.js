import React, { Component } from 'react'
import { compose } from 'redux'

import WithOutlets from './actions'
import ReactTable from 'react-table'

import Update from './Update'

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

class Ingredients extends Component {
  componentDidMount = () => {
    this.props.getOutlets()      
  } 
  
  render() {
    return (
      <>
        <Container>
          <Row>            
            <Col md={ 8 }>
              <h1 className="mb-3">Outlets</h1>                              
              <ReactTable 
                data={ this.props.outlets }
                columns={[
                  {
                    Header: "Name",
                    accessor: "name"
                  },     
                  {
                    Header: "GPS Location",
                    accessor: "gps"
                  },                
                  {
                    Header: "Actions",
                    Cell: row => {
                      return (
                        <Button 
                          variant="primary"
                          onClick={ () => this.props.getIngredientsInOutlet( row.original._id )}>View Stock</Button>
                      )
                    }
                  }
                ]}/>
            </Col>            
          </Row>
        </Container> 
        {
          this.props.showUpdateModal && (
            <Update { ...this.props }/>        
          )
        }                 
      </>
    )
  }
}

export default compose(
  WithOutlets, 
)( Ingredients )