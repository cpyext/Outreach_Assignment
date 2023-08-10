import * as React from "react";
import { Image } from "@yext/pages/components";

const Footer = ({ _site }: any) => {
  const { c_footer, c_footerImage, c_signIn, c_supportInfo, c_logoshort } =
    _site;
  console.log(c_footer);

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          backgroundColor: "black",
          justifyContent: "space-around",
          height: "400px",
        }}
      >
        {/* <div className="text-base text-slate-100"> {c_footer.name}</div>
        <div className="text-base text-slate-100">{c_supportInfo.name}</div>
        <div className="text-base text-slate-100"> {c_signIn.name}</div> */}
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="text-slate-100 text-xs leading-10 mt-16"
        >
          <div style={{ fontWeight: "bold", marginBottom: "1em" }}>
            RESOURCES
          </div>
          {c_footer.map(function (item: any, i: any) {
            return (
              <a href={item.link} key={i}>
                {item.name}
              </a>
            );
          })}
          <div
            style={{ width: "100%", display: "flex", margin: "3em 0em" }}
            className=""
          >
            <div
              style={{
                width: "2em",
                marginTop: "5px",
                marginRight: "5px",
              }}
            >
              <a href="https://www.outreach.io/">
                <Image image={c_logoshort}></Image>
              </a>
            </div>
            <div>© 2023 OUTREACH.IO</div>
          </div>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="text-slate-100 text-xs leading-10 mt-16"
        >
          <div style={{ fontWeight: "bold", marginBottom: "1em" }}>
            SUPPORT INFO
          </div>
          {c_supportInfo.map(function (item: any, i: any) {
            return (
              <a href={item.link} key={i}>
                {item.name}
              </a>
            );
          })}
        </div>
        <div
          style={{ display: "flex", flexDirection: "column" }}
          className="text-slate-100 text-xs leading-10 mt-16"
        >
          <div style={{ fontWeight: "bold", marginBottom: "1em" }}>
            SIGN IN →
          </div>
          {c_signIn.map(function (item: any, i: any) {
            return (
              <a href={item.link} key={i}>
                {item.name}
              </a>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Footer;
