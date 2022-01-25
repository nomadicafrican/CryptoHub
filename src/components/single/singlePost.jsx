import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import axios from "axios";
import './singlepost.css'

export default function SinglePost() {
  const location = useLocation()
  const path = location.pathname.split("/")[2]
  const [post, setPost] = useState({})

  useEffect(() => {
    const getPost = async () => {
      const res = await axios.get("/posts/" + path)
      setPost(res.data)
    }
    getPost()
  },[path])
  return <div className='singlepost'>

    <div className="singlepostwrapper">
      {post.photo && (
      <img src={post.photo} alt="" className="singlepostimg" />
      )}
    <h1 className="singleposttitle">
      {post.title} 
    <div className="singlepostedit">
    <i className=" singleposticon far fa-edit"></i>
    <i className=" singleposticon far fa-trash-alt"></i>
    </div>

    </h1>
    <div className="singlepostinfo">
      <span className='singlepostauthor'>Autor: <b>{post.username}</b></span>
      <span className='singlepostdate'>{new Date(post.createdAt).toDateString()}</span>
    </div>
    <p className='singlepostdesc'>{post.desc}</p>
    </div>
  </div>;
}
