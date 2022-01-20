import "./post.css"

export default function Post() {
  return <div className="post">

    <img className="postimg"
    src="https://images.barrons.com/im-439982?width=1280&size=1" alt="" />

    <div className="postinfo">
      <div className="postcats">
        <span className="postcat">Bitcoin</span>
        <span className="postcat">Etheruim</span>
        <span className="postcat">doggo coin</span>
      </div>
      <span className="posttitle">Lorem ipsum, dolor sit amet </span>
      <hr/>
      <span className="postdate">
      1 hour ago  
      </span>

    </div>
    <p className="postdesc">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit rem ducimus quasi laboriosam cum voluptas dolorum dolorem ipsa, earum blanditiis tempora facilis hic. Iusto, sint. Repudiandae neque iste amet doloremque.</p>
  </div>;
}
