import React ,{useEffect,useState}from 'react'

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

} from '@coreui/react'
import { useNavigate } from "react-router-dom";

import UserDataService from "../../services/users.service";
import OrderDataService from "../../services/orders.service";
import Swal from 'sweetalert2'
import {auth} from '../../firebase'
const Dashboard = () => {

  const button_style = {
    width: "90px",
    color: "primary"
  }

  const [users, setUsers] = useState([]);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    if(!auth.currentUser){
      navigate("/login")
    }else{
      getData();
    }
    
  }, []);

  const getData = async () => {
    Swal.showLoading();
    const data = await UserDataService.getAllUser();
    const data2 = await OrderDataService.getAllOrders();
    const lista = data.docs.map((doc) => ({...doc.data(),id:doc.id}));
    const lista2 = data2.docs.map((doc) => ({...doc.data(),id:doc.id}));
    setUsers(lista);
    setOrders(lista2);
    if(users && orders){
      Swal.close()
    }
  };

  const findName = (uid) =>{
    let name =""
    users.forEach((val)=>{
      if(val.id === uid){
        name = `${val.name} ${val.lastname}`
      }
    })
    return name;
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
                <CTableHeaderCell scope="col">Clinte</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ordenes Completas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Ordenes Recibidas</CTableHeaderCell>
                <CTableHeaderCell scope="col">Fecha</CTableHeaderCell>
                <CTableHeaderCell scope="col">Servicio</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              
              {orders.map((doc, index) => { 
                return(
                <CTableRow key={index}>
                <CTableHeaderCell scope="row">{index+1}</CTableHeaderCell>
                <CTableDataCell>{findName(doc.uid)}</CTableDataCell>
                <CTableDataCell>{findName(doc.dui)}</CTableDataCell>
                <CTableDataCell>Na</CTableDataCell>
                <CTableDataCell>Na</CTableDataCell>
                <CTableDataCell>10/06/2022 10:03 </CTableDataCell>
                <CTableDataCell>{doc.type}</CTableDataCell>
              </CTableRow>)
              } )}
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
