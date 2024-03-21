import React from "react";
import "../assets/style.css";
import "../services/getDataApi";


export function Cards({contactList}) {
 console.log(contactList)
  return (
    <>
    <div className="content" >
      {contactList.map((card, index) => (
            <section className="card-container-main" key={index}>
              <div className="card-container">
                <img className="img-card" src={card.avatar} width="100px" height="100px" alt="" />
                <h2>
                  {card.first_name} {card.last_name}
                </h2>
                <p>{card.email}</p>
                <hr />
                <div className="buttons">
                  <button>like</button>
                  <button>delete</button>
                </div>
              </div>
            </section>
        ))}
    </div>
    </>
  );
}
