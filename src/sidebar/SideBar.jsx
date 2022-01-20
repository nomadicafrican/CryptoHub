import './sidebar.css'

export default function SideBar() {
  return <div className='sidebar'>
    <div className="sidebarItem">
      <span className="sidebartitle">About Me</span>
      <img className = "sidebarimg"src="https://cdn.pixabay.com/photo/2020/02/13/06/49/seascape-4844697__480.jpg" alt="" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi pariatur quis id rem accusamus adipisci assumenda odio voluptas. Fuga, laboriosam eos? Officiis rerum reprehenderit expedita sunt totam autem beatae provident.</p>
    </div>
    <div className="sidebarItem">
    <span className="sidebartitle">Categories</span>
    <ul className="sidebarlist">  
    <li className="sidebarlistitem">Bitcoin</li>
    <li className="sidebarlistitem">Doggo Coin</li>
    <li className="sidebarlistitem">Etheruim</li>
    <li className="sidebarlistitem">some coin</li>
    <li>hello</li>
    </ul>
    </div>
    <div className="sidebarItem">
    <span className="sidebartitle">Follow us</span>
    <div className="sidebarsocial">
    <i className=" sidebarIcon fab fa-facebook-square"></i>
    <i className=" sidebarIcon fab fa-twitter-square"></i>
    <i className=" sidebarIcon fab fa-instagram-square"></i>

    </div>
    </div>
  </div>;
}
