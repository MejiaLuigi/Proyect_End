import React, { useState } from "react";

export function FormRegister ({onFormSubmit}){

    const [name, setName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [email, setEmail] = useState ('')
    const [favorite, setFavorite] = useState(false);

    const handleSubmit = (event) =>{
        event.preventDefault();

        const formData = {

            
            email: email,
            first_name: name,
            last_name: lastName,
            // avatar: "https://reqres.in/img/faces/1-image.jpg",
            favorite: favorite,
        }

        onFormSubmit(formData);
    }

    return(
        <form className="form-content" onSubmit={handleSubmit}>
            <div className="form-content-input">
                    <input
                    className="name-content"
                    type="text"
                    name="name"
                    placeholder="Enter First Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    className="lastName-content"
                    type="text"
                    name="lastName"
                    placeholder="Enter Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    required
                />
                <input
                    className="email-content"
                    type="text"
                    name="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <div className="checkbox-content">
                    <p>Enable like favorite</p>
                    <input
                    className="checkbox-content"
                    type="checkbox"
                    name="favorite"
                    checked={favorite}
                    onChange={(e) => setFavorite(e.target.checked)}
                />
                </div>
            </div>
            <div className="button-content">
            <button className="button-form" type="submit">
                Send
            </button>
            </div>
        </form>
    )
}
