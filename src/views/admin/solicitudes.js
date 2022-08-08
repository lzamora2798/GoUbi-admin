import React from 'react'
import {db} from "./firebase"

import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

import { useState, useEffect } from "react";

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

  const [orders, setOrders] = useState([]);


  useEffect(() => {
    const getOrders = async () => {

      const userCollectionRef = collection(db, "orders");

      const data = await getDocs(userCollectionRef);
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));

};
getOrders();
  }, []);

  const handleSubmit = async () => {

    const userCollectionRef = collection(db, "orders");

    const data = await getDocs(userCollectionRef);
      console.log("elemeto "+ data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };

  const handleSubmitGas =  async () => {

    const userCollectionRef = collection(db, "orders");

    const data = await getDocs(userCollectionRef);

    for(let key in data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))) {

      if ((data.docs.map((doc) => ({ ...doc.data(), id: doc.id }))[key].name) === "type") {
        setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       } else {
        setOrders(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
       }
    }
  };

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
            {orders.map((order) => (
                 <CTableRow key={order.id}>
                 <CTableDataCell>NO EXITE EN BD</CTableDataCell>
                 <CTableDataCell>NO EXISTE EN BD</CTableDataCell>
                 <CTableDataCell>{order.waterBottle}</CTableDataCell>
                 <CTableDataCell>NO EXITE EN BD</CTableDataCell>
                 <CTableDataCell>{order.date}</CTableDataCell>
                 <CTableDataCell>{order.type}</CTableDataCell>
               </CTableRow>

            ))}
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
