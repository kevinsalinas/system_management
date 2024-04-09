import httpClient from "helpers/httpClient";

export const GetArticles = async () => {
  const result = await httpClient
    .get("http://localhost:3000/articles")
    .then((res) => {
      //   console.log("articulos", JSON.stringify(res.data));
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
