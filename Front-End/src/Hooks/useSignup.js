import {useState} from 'react'
import toast from 'react-hot-toast';
const useSignup = () => {
    const [loading,setLoading]= useState(false);
    const dosignup = async({fullname,username,password,confirmpassword,gender})=>{
      const checkValue = handleInputError({fullname,username,password,confirmpassword,gender})
      if(!checkValue) return "checkvaluefalse";
      setLoading(true)
      try{
        const res = await fetch("/api/auth/signup",{
          method:"POST",
          headers:{"Content-Type":"application/json"},
          body:JSON.stringify({fullname,username,password,confirmpassword,gender})
        })
        if(res.error){
          throw new Error(res.error);
        }
        if(res) toast.success("Signup sucessful , Login Please! ")
      }
      catch(error){
        toast.error(error.message)
      } finally{
        setLoading(false)
      }
    };

    return {loading,dosignup}
}

export default useSignup

function handleInputError({fullname,username,password,confirmpassword,gender}){
  if(!fullname || !username || !password || !confirmpassword || !gender){
    toast.error("All field are required")
    return false;
  }
  if(password.length<6) {
    toast.error("Password must be 6 characters long")
    return false;
  }
  if(password !== confirmpassword) {
    toast.error("password don't match")
    return false;
  }
  return true;
}