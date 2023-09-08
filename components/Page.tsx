import Head from "next/head";
import { onlyText } from "react-children-utilities";
import { formatDate } from "@/lib/formatDate";
import siteConfig from "@/data/siteConfig";
import { Prose } from "@/components/Prose";
import { cx } from "@/lib/utils";

interface PageProps {
  date?: string;
  lastUpdated?: string | React.ReactNode;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
  thumbnail?: string;
  children?: React.ReactNode;
  heading?: string | React.ReactNode;
}

export const Page: React.FC<PageProps> = ({
  date,
  title,
  description,
  thumbnail,
  children,
  lastUpdated,
  heading,
}) => {
  const metaTitle = onlyText(title);
  const metaDescription = description
    ? onlyText(description)
    : siteConfig.siteDescription;
  const metaThumbnail = thumbnail ? thumbnail : siteConfig.siteThumbnail;
  // fixed https://github.com/vercel/next.js/discussions/38256
  const customTitle = `${metaTitle} - ${siteConfig.siteName}`;
  return (
    <>
      <Head>
        <title>{customTitle}</title>
        <meta name="og:url" content={siteConfig.siteUrl} />
        <meta property="og:title" content={metaTitle} />
        <meta name="description" content={metaDescription} />
        <meta name="og:description" content={metaDescription} />
        <meta
          property="og:image"
          content={`${siteConfig.siteUrl}${metaThumbnail}`}
        />
      </Head>
      <header
        className={cx(
          "mb-8 py-8 border-y-2",
          "border-regal-yellow",
          "dark:border-regal-yellow"
        )}
      >
        {date ? (
          <time
            className={cx("block mb-2", "text-gray-500", "dark:text-gray-400")}
          >
            {formatDate(date)}
          </time>
        ) : null}
        <h1 className="font-bold text-3xl from-white to-regal-yellow">
          {heading}
        </h1>
        <h6 className="mt-2 opacity-50">{lastUpdated}</h6>
        {description ? (
          <div className="mt-4">
            <Prose>
              {typeof description === "string" ? (
                <p>{description}</p>
              ) : (
                description
              )}
            </Prose>
          </div>
        ) : null}
      </header>
      {children}
    </>
  );
};
