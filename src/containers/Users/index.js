import React, { Component } from 'react'
import { compose } from 'redux'

import WithUsers from './actions'
import ReactTable from 'react-table'
import WithOutletsDictionary from 'actions/dictionary/outletsDictionary'

import Create from './Create'

import {
  Container,
  Row,
  Col,
  Button,
} from 'react-bootstrap'


class Users extends Component {
  componentDidMount = () => {
    this.props.getUsers()  
    this.props.getOutletsDictionary()
  }
  
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col md={ 8 }>
              <h1 className="mb-3">Users</h1>
              <div className="mb-3">
                <Button 
                  style={{ marginRight: '15px' }} 
                  variant="primary"
                  onClick={() => {
                    this.props.onChangeUsersHOC( 'showCreateModal', true )
                    }}>Add User</Button>                
              </div>              
              <ReactTable 
                data={ this.props.users }
                columns={[
                  {
                    Header: "Username",
                    accessor: "username"
                  },    
                  {
                    Header: "Type",
                    accessor: "userType"
                  },                            
                ]}/>
            </Col>            
          </Row>
        </Container>         
        {
          this.props.showCreateModal && (
            <Create { ...this.props }/>        
          )
        }                 
      </>
    )
  }
}

export default compose(
  WithOutletsDictionary,
  WithUsers, 
)( Users )