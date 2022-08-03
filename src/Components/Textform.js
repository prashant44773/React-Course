import React ,{useState} from 'react'


export default function Textform(props) {
  const [text , setText] = useState("Enter text");
	
  const handleUpclick = ()=>{
  console.log("UpperClick was Clicked"+text);
  let newtext = text.toLocaleUpperCase(); 
  setText(newtext);
  }
  
  const handlelowclick = ()=>{
  console.log("handlelowclick was Clicked"+text);
  let newtext1 = text.toLocaleLowerCase(); 
  setText(newtext1);
  }
  
  const handleOnchange = (event)=>{
  console.log("handleOnchange was Clicked");
  setText(event.target.value);
  }
  return (
	<>
		<div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
	    <h1>Enter Your Text</h1>
		  <textarea className="form-comtrol" value={text} style={{backgroundColor:props.mode==='dark'?'grey':'white', Color:props.mode==='dark'?'white':'black'}} onChange={handleOnchange} id="muBox" cols="190" rows="10"></textarea>
		<button className="btn btn-primary mx-2" onClick={handleUpclick}>Convert To UpperCase</button>
		<button className="btn btn-primary mx-2" onClick={handlelowclick}>Convert To LowerCase</button>
		</div>
		
		<div className="container" style={{Color:props.mode==='dark'?'white':'black'}}>
			<h1>Your Text Summary</h1>
			<p> {text.split(" ").length} words , {text.length} characters</p>
			<p> {0.008 * text.split(" ").length} Minutes to read</p>
			<h2>Preview</h2>
			<p>{text}</p>
	    </div>
	</>
  )
}
