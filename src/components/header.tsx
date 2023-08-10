import * as React from "react";
import Cta from "../components/cta";
import { Image } from "@yext/pages/components";

type Link = {
  label: string;
  url: string;
};

const links: Link[] = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "About",
    url: "/turtlehead-tacos",
  },
];

const Header = ({ _site }: any) => {
  const { c_header, c_header_anon } = _site;

  const linkDoms = links.map((link) => (
    <div key={link.label}>
      <a href={link.url} target="_blank" rel="noreferrer">
        {link.label}
      </a>
    </div>
  ));
  // console.log("values", c_header_anon);
  return (
    <>
      <div className="">
        <a href="">
          <Image image={c_header_anon}></Image>
        </a>
      </div>
      {/* <div className="centered-container">
        <nav className="py-6 flex items-center justify-between">
          <img
            src="https://cdn.fs.brandfolder.com/cache=expiry:604800/deY3VGFpSjC761Abjbfc"
            width="50"
            height="50"
          ></img>
          <div className="text-2xl font-semibold">Turtlehead Tacos</div>
          <div className="flex gap-x-10 text-lg font-semibold">{linkDoms}</div>
          <div className="space-x-5">
            <Cta buttonText="Order Pickup" url="#" style="primary-cta"></Cta>
            <Cta
              buttonText="Order Delivery"
              url="#"
              style="secondary-cta"
            ></Cta>
          </div>
        </nav>
      </div> */}
    </>
  );
};

export default Header;
