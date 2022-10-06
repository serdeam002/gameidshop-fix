import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

function App() {
  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    axios
      .get(`${process.env.REACT_APP_API}/blogs`)
      .then(response => {
        setBlogs(response.data)
      })
      .catch(err => alert(err));
  }
  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className="container p-5">
      <div className="row">
        {blogs.map((blog, index) => (
          <div className="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
            <div className="card" style={{ width: '18rem', }}>
              <img src="" className="crad-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.content.substring(0, 50)}...</p>
                <p className="text-muted">ผู้ขาย : {blog.author} <br /> วันที่ลงขาย : {new Date(blog.createdAt).toLocaleString()}</p>
                <Link to={`/blog/${blog.slug}`} className="btn btn-outline-primary">รายละเอียด</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}


export default App;
