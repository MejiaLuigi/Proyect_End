export async function getDataApi() {
  const urlApi = "https://reqres.in/api/users/";

  try {
    const responseDataApi = await fetch(urlApi);
    return await responseDataApi.json();
  } catch (error) {
    console.log("there is an error", error);
  }
}
