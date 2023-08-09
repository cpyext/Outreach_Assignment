/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import { fetch } from "@yext/pages/util";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TransformProps,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import Card from "../components/Card";
import Banner from "../components/banner";
import PageLayout from "../components/page-layout";
import { ExternalImage } from "../types/ExternalImage";
import { Image } from "@yext/pages/components";
import { SearchBar } from "@yext/search-ui-react";
import { SearchAction } from "schema-dts";
import CSearchBar from "../components/CSearchBar";

/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "turtlehead-tacos",
};

/**
 * A local type for transformProps. This could live in src/types but it's generally
 * best practice to keep unshared types local to their usage.
 */
type ExternalImageData = TemplateProps & { externalImage: ExternalImage };

/**
 * Used to either alter or augment the props passed into the template at render time.
 * This function will be run during generation and pass in directly as props to the default
 * exported function.
 *
 * This can be used when data needs to be retrieved from an external (non-Knowledge Graph)
 * source. This example calls a public API and returns the data.
 *
 * If the page is truly static this function is not necessary.
 */
export const transformProps: TransformProps<ExternalImageData> = async (
  data
) => {
  const url = import.meta.env.YEXT_PUBLIC_EXTERNAL_IMAGE_API_BASE_URL + "/2";
  const externalImage = (await fetch(url).then((res: any) =>
    res.json()
  )) as ExternalImage;
  return { ...data, externalImage };
};

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
};

type ExternalImageRenderData = TemplateRenderProps & {
  externalImage: ExternalImage;
};

/**
 * This allows the user to define a function which will take in their template
 * data and produce a HeadConfig object. When the site is generated, the HeadConfig
 * will be used to generate the inner contents of the HTML document's <head> tag.
 * This can include the title, meta tags, script tags, etc.
 */
export const getHeadConfig: GetHeadConfig<
  TemplateRenderProps
> = (): HeadConfig => {
  return {
    title: "Static Page Example",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
    tags: [
      {
        type: "meta",
        attributes: {
          name: "description",
          content: "Static page example meta description.",
        },
      },
      // {
      //   type: "link",
      //   attributes: {
      //     rel: "icon",
      //     type: "image/x-icon",
      //     href: Favicon,
      //   },
      // },
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  const { description, c_resources, primaryPhoto } = _site;

  return (
    <>
      <PageLayout _site={_site}>
        <div className="bg-[#5950FF]">
          <div className="centered-container flex flex-col p-44 text-center gap-12">
            <div className="text-8xl text-white font-bold">{description}</div>
            <div className="w-3/4 mx-auto">
              <CSearchBar />
            </div>
          </div>
        </div>
        <div className="centered-container grid grid-cols-3 justify-between p-44 gap-4">
          {c_resources.map((item: any, index: any) => (
            <div
              key={index}
              className="   p-16 font-bold text-4xl border-[#5950FF] border-4"
            >
              {item.name}
            </div>
          ))}
        </div>
        <div className="">
          <a href="">
            <Image image={primaryPhoto}></Image>
          </a>
        </div>
      </PageLayout>
    </>
  );
};

export default Static;
