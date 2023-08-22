/**
 * This is an example of how to create a static template that uses getStaticProps to retrieve data.
 */
import * as React from "react";
import "../index.css";
import {
  Template,
  GetPath,
  GetHeadConfig,
  HeadConfig,
  TemplateConfig,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/page-layout";
import { ExternalImage } from "../types/ExternalImage";
import { Image } from "@yext/pages/components";
import CustomHeader from "../components/CustomHeader";
import { PiArrowLineUpRightLight } from "react-icons/pi";
/**
 * Not required depending on your use case.
 */
export const config: TemplateConfig = {
  // The name of the feature. If not set the name of this file will be used (without extension).
  // Use this when you need to override the feature name.
  name: "Outreach",
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

/**
 * Defines the path that the generated file will live at for production.
 *
 * NOTE: This currently has no impact on the local dev path. Local dev urls currently
 * take on the form: featureName/entityId
 */
export const getPath: GetPath<ExternalImageData> = () => {
  return `index.html`;
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
    title: "Outreach | Home",
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
    ],
  };
};

/**
 * This is the main template. It can have any name as long as it's the default export.
 * The props passed in here are the direct result from `transformProps`.
 */
const Static: Template<TemplateRenderProps> = ({ document }) => {
  const { _site } = document;
  const {
    description,
    c_resources,
    primaryPhoto,
    c_header_anon,
    c_footerImage,
  } = _site;
  // console.log("values", c_header_anon, c_footerImage, primaryPhoto);
  return (
    <>
      <PageLayout _site={_site}>
        <div className="bg-[#5950FF]">
          <CustomHeader description={description}></CustomHeader>
        </div>
        <div className="centered-container grid grid-cols-3 justify-between p-44 gap-4">
          {c_resources.map((item: any, index: any) => (
            <div
              key={index}
              className="pb-6 font-bold text-3xl border-[#5950FF] border-4"
            >
              <div className="w-fit ml-auto pr-4 pt-4 text-6xl font-semibold text-[#5950FF]">
                <a href={item.link}>
                  <PiArrowLineUpRightLight />
                </a>
              </div>
              <div className="px-16">{item.name}</div>
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
