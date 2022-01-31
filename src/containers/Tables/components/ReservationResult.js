import React from 'react'
import {
  Modal,
  Button,
  Form
} from 'react-bootstrap'
import _ from 'lodash'
import ReactTable from 'react-table'

const ReservationResult = ({
  result
}) => {
  return (      
    <>  
      <p>Please head to the following chairs listed below</p>    
      <ReactTable 
        defaultPageSize={ 10 }
        pagination={ true }
        data={ result }
        columns={[
          {
            Header: "Table",
            accessor: "tableLabel"
          },
          {
            Header: "Chair",
            accessor: "label"
          }          
        ]}/>
    </>
  )  
}

export default ReservationResult