import React from "react";

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        
        <h2 className="name">{props.name}</h2>
        <img className="secret" src={props.secret} alt="This is a secret image"/>

        <img className="circle-img" src={props.img} alt="avatar_img" />
      </div>
      <div className="bottom">
        <p className="info">{props.tel}</p>
        <p className="info">{props.email}</p>
        <a className="link" href={props.link}>This could be a Linked in profile.</a>
        
      </div>
      <div>

      </div>
    </div>
  );
}

export default Card;