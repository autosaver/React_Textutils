import React,{useState} from 'react'

export default function Textarea(props) {
    const ontextchange=(event)=>{
        settext(event.target.value)

    }
    const onuppercase=()=>{
        const newtext=text.toUpperCase()
        settext(newtext)
    }
    const onlowercase=()=>{
        const newtext=text.toLowerCase()
        settext(newtext)
    }
    const onclearcase=()=>{
        settext('')
    }
    const [text,settext]=useState("This is a demo text.")

    // document.getElementById("exampleFormControlTextarea1").sty.cursor = "pointer";

    return (
        <>
            <div className={`bg-${props.mode} mb-3 my-3`}>
                <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{'color':`${props.mode==='dark'?'white':'black'}`}}><b>{props.innertext}</b></label>
                <textarea className="form-control bg-secondary" cursor='pointer' value={text} onChange={ontextchange} id="exampleFormControlTextarea1" rows="15"></textarea>
                <button type="button" onClick={onuppercase} className="btn btn-primary my-3 mx-2">To Uppercase</button>
                <button type="button" onClick={onlowercase} className="btn btn-primary my-3 mx-2">To Lowercase</button>
                <button type="button" onClick={onclearcase} className="btn btn-primary my-3 mx-2">Clear</button>
            </div>
            <div className="container" style={{'color':`${props.mode==='dark'?'white':'black'}`}}>
                <p>
                    Words Count : {text.split(' ').filter((elem)=>{return elem!==''}).length }
                    <br/>
                    Length of Text : {text.length}
                    <br/>
                    Preview : {text || 'Nothing to preview'}
                </p>
            </div>
        </>
    )
}
