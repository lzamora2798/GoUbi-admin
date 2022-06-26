import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CFormInput,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableRow,
  CTableHeaderCell,
  CTableDataCell,
  CCardText


} from '@coreui/react'

const Dashboard = () => {

  const button_style = {
    width: "90px",
    color: "primary"
  }

  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <CRow>
            <CCol xs={5}>
              <strong style={{ fontSize: "25px" }} >Usuarios</strong>
            </CCol>
            <CCol xs={1}>
              <CButton style={button_style} >Todo</CButton>
            </CCol>
            <CCol xs={1}>
              <CButton style={button_style} >Gas</CButton>
            </CCol >
            <CCol xs={1}>
              <CButton style={button_style} >Agua</CButton>
            </CCol>
            <CCol xs={1}>
              <CButton style={button_style} >Chatarra</CButton>
            </CCol>
            <CCol xs={3}>
              <CFormInput
                type="email"
                id="exampleFormControlInput1"
                placeholder="Escribe un Nombre"
                aria-describedby="exampleFormControlInputHelpInline"
              />
            </CCol>
          </CRow>
        </CCardHeader>

        <CCardBody>

        <CRow>
          
        </CRow>
        <CRow >

          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell scope="col">No</CTableHeaderCell>
                <CTableHeaderCell scope="col">Conductor</CTableHeaderCell>
                <CTableHeaderCell scope="col">Email</CTableHeaderCell>
                <CTableHeaderCell scope="col">Numero</CTableHeaderCell>
                <CTableHeaderCell scope="col">Cedula</CTableHeaderCell>
                <CTableHeaderCell scope="col">Placa</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Marisara Melendez</CTableDataCell>
                <CTableDataCell>tnegore@gmail.com</CTableDataCell>
                <CTableDataCell>098123456</CTableDataCell>
                <CTableDataCell>2000118292</CTableDataCell>
                <CTableDataCell>ABC-999</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Ana Guevara</CTableDataCell>
                <CTableDataCell>mmsanchez@gmail.com</CTableDataCell>
                <CTableDataCell>098123456</CTableDataCell>
                <CTableDataCell>2000118292</CTableDataCell>
                <CTableDataCell>ABC-999</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Ernesto Cuevas</CTableDataCell>
                <CTableDataCell>jaypalrn@gmail.com</CTableDataCell>
                <CTableDataCell>098123456</CTableDataCell>
                <CTableDataCell>2000118292</CTableDataCell>
                <CTableDataCell>ABC-999</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          </CRow>

        </CCardBody>
        <CCardFooter>
         
        </CCardFooter>
      </CCard>

    </>
  )
}

export default Dashboard
