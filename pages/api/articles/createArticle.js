import httpClient from "helpers/httpClient";

export const CreateArticle = async (data) => {
  const result = await httpClient
    .post("http://localhost:3000/articles", data)
    .then((res) => {
      //   console.log("articulos", JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
