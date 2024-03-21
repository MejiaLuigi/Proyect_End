import React from "react";
import { Cards } from "../components/Cards";
import linear from "../assets/img/linear.png"

export function Contacts ({contactList}){
    console.log(contactList)
    return(
        <>
        <section className="main-header">
            <h1>Contact List</h1>
            <div className="main-img">
            <img
                src={linear}
                width="1000px"
                height="3px"
                alt="linear"
            />
            </div>
        </section>
            <Cards/>
        </>
    )
}

//se usa para exportar un solo elemento
//Eslint herramienta para validar code & prettier

