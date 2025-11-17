import React, {useState} from 'react'
import Wecome from '../../components/Wecome'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
function Forgotpassword() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();
     const handleSubmit = async ()=>{
          //  console.log("Entered email:", email);
             if (email === "akhtiarali@gmail.com") {
              navigate("/")
             } else{
              alert("Email incorrect");
             }
     }
  return (
    <div className='block font-Poppins md:flex '>
      <Wecome />
      <div className='md:w-12/20 md:h-1/1'>
        <div className='w-16/20 justify-self-center md:mt-30 mt-8'>
          <h1 className='text-dark font-medium font-Poppins  text-[26px] leading-[34px] tracking-normal'>Forgot Password</h1>
          <p className='text-sm  text-dark/60 leading-[100%] font-Arial tracking-normal mt-3' >Please enter your email below to reset your password.</p>
          <div className=' mt-7 sm:space-y-6 space-y-4'>
            <Input inputname="Email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
          <div className='sm:mt-[60px] mt-9' ><Button name="Submit" onClick={handleSubmit}  bg="bg-Secondary" /></div> 
           </div>
        </div>
      </div>
    </div>
  )
}

export default Forgotpassword
