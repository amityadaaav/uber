import React from 'react'

const Userlogout = () => {
    const token=localStorage.getItem("token");
    const navigate=useNavigate();
    axios.get(`${import.meta.env.VITE_BASE_URL}/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    .then((res)=>{
        if(res.status===200){
            localStorage.removeItem("token");
            navigate("/loginUser");
        }})
  return (
    <div>
      <Userlogout />
    </div>
  )
}

export default Userlogout
