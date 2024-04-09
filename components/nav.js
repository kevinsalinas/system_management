import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Artículos", href: "/" },
  { name: "Nuevo Artículo", href: "/newArticle" },
  { name: "Pedidos", href: "/pedidos" },
  { name: "Nuevo Pedido", href: "/newOrder" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Nav() {
  const pathname = usePathname();

  return (
    <Disclosure as="nav" className="bg-white shadow-sm">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="flex flex-shrink-0 items-center">
                  <Image
                    className="h-8 w-8 rounded-full object-contain"
                    src={
                      "https://centribal.com/wp-content/uploads/2020/03/logo-centribail-sticky.png"
                    }
                    height={32}
                    width={32}
                    alt={"logo"}
                  />
                </div>
                <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        pathname === item.href
                          ? "border-slate-500 text-gray-900"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300",
                        "inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium"
                      )}
                      aria-current={pathname === item.href ? "page" : null}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Disclosure>
  );
}
