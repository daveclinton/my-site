import type { NextPage } from "next";
import { Page } from "@/components/Page";
import { Prose } from "@/components/Prose";
import Link from "next/link";
import ExperienceSection from "@/components/ExperienceSection";
import { formatDate } from "@/lib/formatDate";

const About: NextPage = () => {
  const date = "2023-09-08";
  return (
    <>
      <Page
        title="About"
        lastUpdated={`LAST UPDATED: ${formatDate(date)}`}
        description="I’m a Frontend Engineer working with companies to build impactful Web applications and Native applications that prioritize responsive interactions with users "
        heading="Hi, I'm David"
      >
        <Prose>
          <h1 className="font-bold text-xl text">Sectors I have worked in:</h1>
          <p>
            I have over three years of experience working for large corporate
            organisations in Finance (Risk, Asset Management), Procurement,
            Community Management, and Cloud Infrastructure. As a web developer
            I’ve worked in government digital transformation and creative
            digital. I now work in the Asset Financing space but am not
            restricted to it by any means.
          </p>
          <ExperienceSection
            title="Frontend Engineer - Untapped Global"
            period="June 2022 - Present"
          >
            <ul className="list-disc">
              <li>
                Used React, Redux, and Next Js to develop a high performing
                single page application for the main Investment Platform and
                Admin Dashboard.
              </li>
              <li>
                Implemented end-to-end Cypress tests for the main repository,
                ensuring comprehensive test coverage and improved code quality
                since joining the company.
              </li>
              <li>
                Successfully migrated the styling library of a React application
                to utilise Chakra UI, resulting in enhanced UI consistency,
                improved development efficiency, and a more intuitive user
                experience.
              </li>
              <li>
                Successfully integrated Plaid Identity Verification,
                streamlining customer identity verification and enhancing
                compliance measures.
              </li>
            </ul>
          </ExperienceSection>
          <ExperienceSection
            title="Software Engineer - Paperspace"
            period="June 2020 - May 2022"
          >
            <ul className="list-disc">
              <li>
                Played a key role in developing and documenting deep learning
                projects, providing valuable technical expertise and producing
                concise and accessible documentation for developers and
                researchers.
              </li>
              <li>
                Authored a featured project and article for the company blog,
                showcasing technical expertise and thought leadership. Check
                articles
              </li>
              <li>
                Completed six well-documented projects, demonstrating strong
                organisational skills and attention to detail. Read all articles
                <Link href=""> here</Link>
              </li>
            </ul>
          </ExperienceSection>
          <ExperienceSection
            title="FullStack Software Engineer - Dylans Ways Limited"
            period=" June 2020 - May 2022"
          >
            <ul className="list-disc">
              <li>
                Played a key role in developing and documenting deep learning
                projects, providing valuable technical expertise and producing
                concise and accessible documentation for developers and
                researchers.
              </li>
              <li>
                Authored a featured project and article for the company blog,
                showcasing technical expertise and thought leadership. Check
                articles
              </li>
              <li>
                Completed six well-documented projects, demonstrating strong
                organisational skills and attention to detail. Read all articles
                <Link href=""> here</Link>
              </li>
            </ul>
          </ExperienceSection>
          <h1 className="font-bold text-xl text">My Skills</h1>
          <div className="">
            <div>
              <h1 className="font-bold text-base text">
                Programming Languages
              </h1>
              <ul className="list-disc">
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Python</li>
                <li>Java</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-base text">Frameworks/Tools</h1>
              <ul className="list-disc">
                <li>React.js, Next.js, Vue.js, Docusaurus</li>
                <li>Node.js, Django, Express.js, Excel.js</li>
                <li>Strapi, Medusa</li>
                <li>Tailwind CSS, Chakra UI, Radix UI, CSS3, HTML5</li>
              </ul>
            </div>
            <div>
              <h1 className="font-bold text-base text">Databases</h1>
              <ul className="list-disc">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>SQLite</li>
                <li>Firebase, Supabase</li>
              </ul>
            </div>
          </div>
        </Prose>
      </Page>
    </>
  );
};

export default About;
