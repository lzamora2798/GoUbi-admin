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
              <strong style={{ fontSize: "25px" }} >Solicitudes</strong>
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
                <CTableHeaderCell scope="col">Ordenes Completas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ordenes Recibidas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                <CTableHeaderCell scope="col">Servicio</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              <CTableRow>
                <CTableHeaderCell scope="row">1</CTableHeaderCell>
                <CTableDataCell>Armau Tenas</CTableDataCell>
                <CTableDataCell>45</CTableDataCell>
                <CTableDataCell>58</CTableDataCell>
                <CTableDataCell>5/10/2022 15:30pm</CTableDataCell>
                <CTableDataCell>Gas</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>German Sanches</CTableDataCell>
                <CTableDataCell>34</CTableDataCell>
                <CTableDataCell>40</CTableDataCell>
                <CTableDataCell>5/10/2022 15:30pm</CTableDataCell>
                <CTableDataCell>Agua</CTableDataCell>
              </CTableRow>
              <CTableRow>
                <CTableHeaderCell scope="row">2</CTableHeaderCell>
                <CTableDataCell>Ernesto Cuevas</CTableDataCell>
                <CTableDataCell>35</CTableDataCell>
                <CTableDataCell>35</CTableDataCell>
                <CTableDataCell>5/10/2022 15:30pm</CTableDataCell>
                <CTableDataCell>Chatarra</CTableDataCell>
              </CTableRow>
            </CTableBody>
          </CTable>
          </CRow>

        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
           
          </CRow>
        </CCardFooter>
      </CCard>

    </>
  )
}

export default Dashboard
