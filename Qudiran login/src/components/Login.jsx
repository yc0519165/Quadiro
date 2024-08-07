import 'bootstrap/dist/css/bootstrap.min.css';
import  { useState } from 'react'
import LoginData from './LoginData.json'
import { useNavigate } from  'react-router-dom';
const Login= () =>{
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: '',
    password:'',
  })
  const [errors, setErrors] = useState({})
  const [vaild, setVaild] = useState(true)

  function handleSibmit(e){
    e.preventDefault();
    let isvalid = true;
    let validationErron = {}
    
    if(formData.email ==="" || formData.email === null){
      isvalid = false
      validationErron.email = "Email required;"
    }else if(!/\S+@\S+\.\S+/.test(FormData.email)){
      isvalid = false
      validationErron.email = 'Email is not valid;'
    }
    if(formData.password === "" || formData.password===null){
      isvalid = false;
      validationErron.email = "Password requred;"
    }else if (formData.password.length < 6){
      isvalid = false;
      validationErron.password = 'password length at least 6 char';
    }
      LoginData.map(user => {
        if(user.email === formData.email){
          alert("login Successfully")
          navigate('/app')
        }
        else{
          isvalid = false;
          validationErron.password = 'Wrong Password;'
        } 
      })
      setErrors(validationErron)
      setVaild(isvalid)

    
    .catch(err => console.log(err))
  }
  return(
    <div className='d-flex vh-50 justify-content-center align-items-center assignment'>
      <div className='loging p-3 bg-white w-25 '>
        <form onSubmit={handleSibmit}>
          <div className='mb-3'>
            <h4 className='mb-5 text-secondary'>Assigmnent for Quadiro Technologies</h4>
            {vaild ? ( <></> ) : ( 
              <span className='text-danger'>
                {errors.fname} {errors.lname} {errors.email}
                {errors.password} {errors.password};
                
              </span>
            )}
            <label htmlFor="email">Email</label>
            <input type="email" placeholder='Enter Email' className='form-control' onChange={(event) => setFormData({...formData, email: event.target.value})}/>
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" placeholder='Enter Password' className='form-control' onChange={ (event) => setFormData({...formData,password: event.target.value})}/>
          </div>
          <button className='btn btn-success'>Login</button>
        </form>
      </div>

    </div>
  )
}
export default Login