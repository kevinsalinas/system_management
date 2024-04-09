import { Button, List, ListItem, NumberInput, TextInput } from "@tremor/react";
import { useRouter } from "next/router";
import { DeleteOrder } from "pages/api/orders/deleteOrder";
import { SetOrder } from "pages/api/orders/setOrder";
import { MultiSelect, MultiSelectItem } from "@tremor/react";

import Alert from "./alert";
import { useEffect, useState } from "react";

export default function OrderForm(props) {
  const { orderid, articleData } = props;
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const [orderData, setOrderData] = useState(orderid);
  const [articlesinorder, setArticlesInOrder] = useState([]);
  const [orderSummary, setOrderSummary] = useState();
  const [orderPrice, setOrderPrice] = useState();
  orderData.articles.map((item) => articlesinorder.push(item.id));

  useEffect(() => {
    updatePrice();
    setArticlesInOrder([]);
  }, [orderData]);

  const handleSubmit = (e) => {
    e.preventDefault();

    orderData?.id ? SetOrder(orderData) : null;
    setOpen(true);
    setTimeout(() => {
      router.push("/pedidos");
    }, 2000);
  };

  const handleDelete = () => {
    DeleteOrder(orderData.id);
    router.push("/pedidos");
  };

  const handleSelect = (e) => {
    // IF all items are romved then empty the array of articles
    if (e.length == 0) {
      orderData.articles = [];
      let neworder = orderData;
      setOrderData(neworder);
      updatePrice();
    }

    // In the case of add or remove an item, this must be removed
    // in the articles array. then update the list of products and quantities
    let diff = e
      .filter((x) => !articlesinorder.includes(x))
      .concat(articlesinorder.filter((x) => !e.includes(x)));

    if (
      articlesinorder.length > 0 &&
      articlesinorder.find((item) => item == diff[0]) != undefined
    ) {
      // Case of adding an article
      orderData.articles = orderData.articles.filter(
        (article) => article.id !== diff[0]
      );
      let neworder = orderData;
      setOrderData(neworder);
      updatePrice();
    } else {
      // Case of removing an article
      let article = articleData.filter((item) => item.id == diff);

      orderData.articles.push({
        id: article[0].id,
        name: article[0].name,
        quantity: "1",
      });
      let neworder = orderData;
      setOrderData(neworder);
      updatePrice();
    }
    // Restart control vriables
    setArticlesInOrder([]);
    diff = [];
  };

  const updatePrice = () => {
    let summary = 0;
    for (let index = 0; index < orderData.articles?.length; index++) {
      let item = articleData.filter(
        (item) => item.id == orderData.articles[index].id
      );
      summary +=
        parseFloat(item[0]?.price) *
        parseInt(orderData.articles[index].quantity);
    }
    orderData.summary = summary;
    orderData.total = summary * parseFloat(1.21);
    setOrderSummary(summary);
    setOrderPrice(summary * parseFloat(1.21));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-sm space-y-8">
          {open && <Alert />}
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Referencia
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={orderData?.id}
              disabled
              name="id"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Artículos
            </p>
            <MultiSelect
              defaultValue={articlesinorder}
              onValueChange={handleSelect}
              name="articles"
            >
              {articleData?.map((article) => (
                <MultiSelectItem value={article.id}>
                  {article.id}: {article.name}
                </MultiSelectItem>
              ))}
            </MultiSelect>
          </div>
          <div>
            <h3 className="text-tremor-content-strong dark:text-dark-tremor-content-strong font-medium">
              Artículos en la orden
            </h3>
            <List className="mt-2">
              {orderData.articles?.map((item, key) => (
                <>
                  <ListItem className="my-4 justify-between" key={item.id}>
                    <span>{item.name}</span>
                    <NumberInput
                      defaultValue={item.quantity}
                      className="w-32"
                      min={1}
                      onValueChange={(e) => {
                        item.quantity = e;
                        updatePrice();
                      }}
                    />
                  </ListItem>
                </>
              ))}
            </List>
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Total (Sin IVA)
            </p>
            <TextInput
              mx-auto
              max-w-xs
              value={orderSummary}
              name="summary"
              disabled
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              Precio total
            </p>
            <TextInput
              mx-auto
              max-w-xs
              value={orderPrice}
              name="total"
              disabled
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <Button className="mt-8 w-full" type="submit">
            Guardar
          </Button>
        </div>
      </form>
      <div className="mx-auto max-w-sm space-y-8">
        {orderData?.id && (
          <Button
            className=" mx-auto max-w-sm space-y-8 mt-8 w-full"
            onClick={handleDelete}
            color="red"
          >
            Eliminar
          </Button>
        )}
      </div>
    </>
  );
}
