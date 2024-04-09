import Head from "next/head";
import Nav from "@components/nav";
import Tables from "@components/table";
import { Button } from "@tremor/react";
import Link from "next/link";
import { GetOrders } from "./api/orders/getOrders";
import { useEffect, useState } from "react";

export default function Index(props) {
  const { orders } = props;
  const titles = ["id", "articles", "summary", "total", "edit"];
  const view = "order";
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/orders`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <Head>
        <title>Centribal</title>
        <meta
          name="viewport"
          content="viewport-fit=cover, width=device-width,user-scalable=no, initial-scale=1.0, maximum-scale=1,user-scalable=0"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <Nav />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-8">
        <Link href="/newOrder">
          <Button variant="secondary">Nueva Orden</Button>
        </Link>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-12">
        <Tables items={data} titles={titles} view={view} />
      </div>
    </>
  );
}

// export const getStaticProps = async () => {
//   const ordersArray = await GetOrders();
//   //   console.log("index data", ordersArray);

//   return {
//     props: {
//       orders: ordersArray || {},
//     },

//     revalidate: 1, // In seconds
//   };
// };
