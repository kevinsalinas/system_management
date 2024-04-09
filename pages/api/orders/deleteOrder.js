import httpClient from "helpers/httpClient";

export const DeleteOrder = async (id) => {
  const result = await httpClient
    .delete(`http://localhost:3000/orders/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
