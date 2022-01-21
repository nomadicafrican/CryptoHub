import "./write.css"


export default function Write () {
  return (
    <div classname = "write">
      <img className="writeImg" src="https://www.unicoindcx.com/img/blog/what-are-the-benefits-of-cryptocurrency-exchange.jpg" alt=""/>
     <form className="writeForm ">
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
          <i className="writeIcon" class="fas fa-plus"></i>
          </label>
          <input type="file" id="fileInput" style={{display:"none"}}/>
          <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>

        </div>
        <div className="writeFormGroup">
        <textarea placeholder="Tell your story..." type="text"
        className="writeInput writeText"></textarea>
        </div>
        <button className="writeSubmit">Publish</button>


     </form>


    </div>





  )
}