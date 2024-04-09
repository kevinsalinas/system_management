import httpClient from "helpers/httpClient";

export const DeleteArticle = async (id) => {
  const result = await httpClient
    .delete(`http://localhost:3000/articles/${id}`)
    .then((res) => {
      // console.log("ARTICULO", JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
