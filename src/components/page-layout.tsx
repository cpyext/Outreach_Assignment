import * as React from "react";
import Header from "./header";
import Footer from "./footer";
import {
  SearchHeadlessProvider,
  provideHeadless,
} from "@yext/search-headless-react";
import searchConfig from "./searchConfig";
import { MyContextProvider } from "../context/context";
import { ChatHeadlessProvider } from "@yext/chat-headless-react";

type Props = {
  _site?: Site;
  children?: React.ReactNode;
};
const searcher = provideHeadless(searchConfig);
const PageLayout = ({ _site, children }: Props) => {
  return (
    <ChatHeadlessProvider
      config={{
        apiKey: "b0d72613268b540d06898fa6810ea98f",
        botId: "outreach-beta",
      }}
    >
      <MyContextProvider>
        <SearchHeadlessProvider searcher={searcher}>
          <div className="min-h-screen">
            <Header _site={_site} />
            {children}
            <Footer _site={_site}></Footer>
          </div>
        </SearchHeadlessProvider>
      </MyContextProvider>
    </ChatHeadlessProvider>
  );
};

export default PageLayout;
