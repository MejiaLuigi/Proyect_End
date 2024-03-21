

export async function postDataApi (formData){
    const urlApiPost = "https://reqres.in/api/users";
    console.log("miro datos",formData)

    const peticonPost = {
        method : "POST",
        headers:{"Content-Type": "application/json"},
        body: JSON.stringify(formData)

    }

    try{
        const postResponseApi = await fetch(urlApiPost, peticonPost);
        console.log("aqui estan",postResponseApi)
        return await postResponseApi.json()
    }catch(error){
        console.log("se ha producido un error", error)
    }
}
