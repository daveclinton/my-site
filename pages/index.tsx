import type { GetStaticProps, NextPage } from "next";
import Link from "next/link";
import { getAllMdx } from "@/lib/mdx";
import { MDXFrontMatter } from "@/lib/types";
import { Page } from "@/components/Page";
import { PostList } from "@/components/PostList";
import { ArrowRight } from "react-feather";
import { Social } from "@/components/Social";

interface HomeProps {
  posts: Array<MDXFrontMatter>;
}

const Home: NextPage<HomeProps> = ({ posts }) => {
  return (
    <>
      <Page
        title="Its David"
        heading="Hey there, I'm David Clinton"
        description={
          <>
            <p>
              Welcome to my digital garden where I write about many things,
              including, but not limited to React, Typescript, Javascript,
              Chakra UI, many more web dev related topics.
            </p>
            <div className="flex items-center">
              <h1 className="font-bold text-lg text">Social Links:</h1>
              <Social />
            </div>
          </>
        }
      >
        <h1 className="font-bold text-xl text">Featured Posts</h1>
        <PostList posts={posts} />
        <div className="mt-8">
          <Link
            passHref
            href="/posts"
            className="group inline-flex items-center gap-2 text-regal-yellow"
          >
            View more posts{" "}
            <ArrowRight
              className="group-hover:translate-x-0.5 transition-transform"
              width={".9em"}
            />
          </Link>
        </div>
      </Page>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const mdxFiles = getAllMdx().map((post) => post["frontMatter"]);
  return {
    props: {
      posts: mdxFiles.slice(0, 5),
    },
  };
};

export default Home;
