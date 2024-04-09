import httpClient from "helpers/httpClient";

export const GetArticle = async (id) => {
  const result = await httpClient
    .get(`http://localhost:3000/articles/${id}`)
    .then((res) => {
      //   console.log("ARTICULO", JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
