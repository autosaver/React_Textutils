import React from 'react'


export default function navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode==='dark'?'dark':'light'} bg-${props.mode==='dark'?'dark':'light'}`}>
  <div className="container-fluid">
    <a className="navbar-brand" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">{props.first}</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">{props.sec}</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">cc @copyright</a>
        </li>
      </ul>
      <div className="d-flex bg-white ">
        <img src={`${props.mode==='dark'?'light':'dark'}.png`} className="rounded float-end" onClick={props.toggle} alt="..." width="30" height="30"/>
      </div>

      
    </div>
  </div>
</nav>
  )
}
