import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2"

const FormComponent = ()=>{
    const [state,setState] = useState({
        title:"",
        content:"",
        author:""
    })
    const {title,content,author} = state

    //กำหนดค่า state
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value});
    }
    const submitForm = (e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API)
        axios
        .post(`${process.env.REACT_APP_API}/create`,{title,content,author})
        .then(response =>{
            Swal.fire(
                'ส่งข้อมูลแล้ว',
                'รอ Admin ตรวจสอบสักครู่นะ!',
                'success'
              )
              setState({...state,title:"",content:"",author:""});
        })
        .catch(err =>{
            Swal.fire('แจ้งเตือน',err.response.data.error,'error')
        })
    }
    return (
    <div className="container p-5">
        <h1>ลงขายไอดีเกม</h1>
        <form onSubmit={submitForm}>
            <div className="form-group">
                <label>ชื่อ</label>
                <input type="text" className="form-control" 
                value={title} 
                onChange={inputValue("title")}/>
            </div>
            <div className="form-group">
                <label>รายละเอียด</label>
                <textarea className="form-control" 
                value={content}
                onChange={inputValue("content")}/>
            </div>
            <div className="form-group">
                <label>ชื่อผู้ลงขาย</label>
                <input type="text" className="form-control" 
                value={author}
                onChange={inputValue("author")}/>
            </div>
            <input type="submit" value="ส่งข้อมูล" className="btn btn-primary mt-4"/>
        </form>
      </div>
    )
}

export default FormComponent;