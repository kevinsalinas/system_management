import { Button, TextInput } from "@tremor/react";
import { Router, useRouter } from "next/router";
import { DeleteArticle } from "pages/api/articles/deleteArticle";
import { SetArticle } from "pages/api/articles/setArticle";
import { CreateArticle } from "pages/api/articles/createArticle";

import Alert from "./alert";
import { useState } from "react";
import { useTranslations } from "next-intl";

export default function ArticleForm(props) {
  const { articleid } = props;
  const router = useRouter();
  const t = useTranslations("Article");

  const [open, setOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Array.from(e.target.elements)
      .filter((input) => input.name)
      .reduce(
        (obj, input) => Object.assign(obj, { [input.name]: input.value }),
        {}
      );

    articleid?.id ? SetArticle(data) : CreateArticle(data);
    setOpen(true);
    setTimeout(() => {
      router.push("/");
    }, 1000);
  };

  const handleDelete = () => {
    DeleteArticle(articleid.id);
    router.push("/");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="mx-auto max-w-sm space-y-8">
          {open && <Alert />}
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {t("reference")}
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={articleid?.id || getRandomInt()}
              disabled
              name="id"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {t("name")}
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={articleid?.name}
              name="name"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {t("description")}
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={articleid?.description}
              name="description"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {t("price")}
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={articleid?.price}
              name="price"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <div>
            <p className="mt-2 leading-6 text-tremor-default text-tremor-content dark:text-dark-tremor-content">
              {t("tax")}
            </p>
            <TextInput
              mx-auto
              max-w-xs
              defaultValue={articleid?.tax}
              name="tax"
              // error={true}
              // errorMessage="Wrong username"
            />
          </div>
          <Button className="mt-8 w-full" type="submit">
            {t("save")}
          </Button>
        </div>
      </form>
      <div className="mx-auto max-w-sm space-y-8">
        {articleid?.id && (
          <Button
            className=" mx-auto max-w-sm space-y-8 mt-8 w-full"
            onClick={handleDelete}
            color="red"
          >
            {t("delete")}
          </Button>
        )}
      </div>
    </>
  );
}

function getRandomInt() {
  return Math.floor(Math.random() * 50000);
}
