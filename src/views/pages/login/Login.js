import React, { useState,useEffect } from 'react'
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
import {auth} from '../../../firebase'
import {signInWithEmailAndPassword,signOut} from "firebase/auth"
import UserDataService from "../../../services/users.service";
import Swal from 'sweetalert2'

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState("");
  const [password,setPassword]=useState("");
  
  useEffect(() => {
    if(auth.currentUser){
      navigate("/solicitudes")
    }
  }, [])

  const showErrorLoad = (data) =>{

    let message = data;
    if (data.includes("auth/invalid-email")){
      message = "Usuario o Contrasena incorrectos"
    }
    if (data.includes("auth/wrong-password")){
      message = "Usuario o Contrasena incorrectos"
    }
    
    Swal.fire({
      title: 'Error!',
      text: message,
      icon: 'error',
      confirmButtonText: 'Ok',
      confirmButtonColor: "#181818", 
    })
  }
  
  const workin = () =>{
   
    Swal.showLoading()
    signInWithEmailAndPassword(auth,email,password).then((user)=>{
      if(user){
        UserDataService.getUser(user.user.uid).then((data)=>{
          const type = data.get("type")
          
          if (type === "admin"){
            Swal.close()
            navigate("/solicitudes")
          }else{
            showErrorLoad("Este usuario no esta permitido")
          }
        }).catch((err)=>{
          showErrorLoad(err.toString())
        })
        
      }
    }).catch((err)=>{
      showErrorLoad(err.toString())
    })
    
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
                      <CFormInput placeholder="Email" value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}  />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                       value={password}
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}  
                      />
                    </CInputGroup>
                    <CRow>
                    <CButton color="primary" className="px-4" onClick={workin}>
                          Iniciar sesion
                      </CButton>
                      
                    </CRow>
                    <CRow>
                    {/* <CButton color="link" className="px-0" >
                    Registrate
                    </CButton> */}
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
