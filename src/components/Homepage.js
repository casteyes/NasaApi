import React, {useState} from 'react'



export const Homepage = () => {
    const [content, setContent] = useState(null);


    let apiKey = "oNBkt1W6yBqiGgeuUi9OWUtdAgZcdM5vQ74cp8wq";

    const FetchData = async () => { const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${apiKey}`)
    const JSONData = await response.json();


    console.log(JSONData.hdurl)
    setContent(JSONData.hdurl)
    
}

    return (
        <div id="text_div center_all">
        <div className="center_all">
           
        <button className="button"  onClick={FetchData}> Fetch </button>
<div className="center_all" id="text_div center_all">
     <img src={content} alt="" style={{width:"300%" , height:"300%", justifyContent:"center", marginTop:"500px", textAlign:"center"}}></img>
 </div>  

    </div>
      </div>

    )
}

export default Homepage;


