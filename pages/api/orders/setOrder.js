import httpClient from "helpers/httpClient";

export const SetOrder = async (props) => {
  console.log("props en set order", props);

  const { id } = props;
  const result = await httpClient
    .put(`http://localhost:3000/orders/${id}`, props)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      console.log("error handling", error);
    });

  return result;
};
