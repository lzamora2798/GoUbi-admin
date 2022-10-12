import React , {useEffect,useReducer,useState}from 'react'

import {
  CAvatar,
  CButton,
  CIcon,
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


} from '@coreui/react'

import UserDataService from "../../services/users.service";

const Dashboard = () => {
  
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers();

  }, []);

  const getUsers = async () => {
    const data = await UserDataService.getAllUser();
    
    setUsers(data.docs.map((doc) => ({...doc.data(),id:doc.id})));
    console.log(users)
  };

  const disableUser = (id,flag) =>{
    console.log(id,flag)
  }
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
                <CTableHeaderCell scope="col">Acciones</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              
              {users.map((doc, index) => { 
                return(
                <CTableRow key={index}>
                <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                <CTableDataCell>{doc.name} {doc.lastname}</CTableDataCell>
                <CTableDataCell>{doc.email}</CTableDataCell>
                <CTableDataCell>{doc.phone}</CTableDataCell>
                <CTableDataCell>{doc.cedula}</CTableDataCell>
                <CTableDataCell>{doc.placa}</CTableDataCell>
                <CTableDataCell>
                  <CButton onClick={disableUser(doc.id,false)}>
                    disable
                  </CButton>
                </CTableDataCell>
              </CTableRow>)
              } )}
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
