import httpClient from "helpers/httpClient";

export const SetArticle = async (props) => {
  console.log("props en set article", props);

  const { id } = props;
  const result = await httpClient
    .put(`http://localhost:3000/articles/${id}`, props)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
