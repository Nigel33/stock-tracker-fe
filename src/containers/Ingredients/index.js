import React, { Component } from 'react'
import { compose } from 'redux'

import WithIngredients from './actions'
import WithOutletsDictionary from 'actions/dictionary/outletsDictionary'
import ReactTable from 'react-table'

import View from './view'
import Create from './create'
// import Create from './Create'

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

class Ingredients extends Component {
  componentDidMount = () => {
    this.props.getIngredients()
    this.props.getOutletsDictionary()
  }
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={ 8 }>
              <h1 className="mb-3">Ingredients</h1>
              <div className="mb-3">
                <Button 
                  style={{ marginRight: '15px' }} 
                  variant="primary"
                  onClick={() => {
                    this.props.onChangeIngredientsHOC( 'showCreateModal', true )
                    }}>Create</Button>                
              </div>              
              <ReactTable 
                data={ this.props.ingredients }
                columns={[
                  {
                    Header: "Name",
                    accessor: "name"
                  },                  
                  {
                    Header: "Actions",
                    Cell: row => {
                      return (
                        <Button 
                          variant="primary"
                          onClick={ () => this.props.getAmountForAllOutlets( row.original._id )}>View stock</Button>
                      )
                    }
                  }
                ]}/>
            </Col>            
          </Row>
        </Container> 
        {
          this.props.showViewModal && (
            <View { ...this.props }/>        
          )
        }  
        {
          this.props.showCreateModal && (
            <Create { ...this.props }/>        
          )
        }            
        {/* <Create { ...this.props }/> */}             
      </>
    )
  }
}

export default compose(
  WithOutletsDictionary,
  WithIngredients, 
)( Ingredients )