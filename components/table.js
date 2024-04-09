import {
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Button,
} from "@tremor/react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Tables(props) {
  let { titles, items, view } = props;
  const t = useTranslations("Table");

  const isorder = titles.length == 5 ? true : false;

  return (
    <>
      <Table>
        <TableHead>
          <TableRow>
            {titles?.map((title) => (
              <TableHeaderCell>{t(title)}</TableHeaderCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {isorder &&
            items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>
                  {item.articles?.map((article) => (
                    <p>
                      artículo: {article.name}, cantidad: {article.quantity}
                    </p>
                  ))}
                </TableCell>
                <TableCell>
                  <Text>{item.summary}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.total}</Text>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <Link href={`${view}/${item.id}`}>
                      <Button variant="primary">{t("edit")}</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          {!isorder &&
            items?.map((item) => (
              <TableRow key={item.id}>
                <TableCell>{item.id}</TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  <Text>{item.description}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.price}</Text>
                </TableCell>
                <TableCell>
                  <Text>{item.tax}</Text>
                </TableCell>
                <TableCell>
                  <div className="flex">
                    <Link href={`${view}/${item.id}`}>
                      <Button variant="primary">{t("edit")}</Button>
                    </Link>
                  </div>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </>
  );
}
