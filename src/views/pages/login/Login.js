import React from 'react'
import { useNavigate } from "react-router-dom";
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import logo from 'src/assets/logo.png'
const Login = () => {
  const navigate = useNavigate();
  const workin = () =>{
    navigate("/solicitudes")
  }
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={5}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <div style={{display:"flex",justifyContent: "center",marginBottom:"2em" }}>
                    <img src={logo} alt="this is car image" width={100} height={100}/>
                  </div>
                  
                  <CForm>
                                 
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Email"  />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                    <CButton color="primary" className="px-4" onClick={workin}>
                          Iniciar sesion
                      </CButton>
                      
                    </CRow>
                    <CRow>
                    <CButton color="link" className="px-0" >
                    Registrate
                    </CButton>
                    <CButton color="link">
                         Recuperar Contrasena
                      </CButton>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
            
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
