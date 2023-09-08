import { Twitter, Instagram, GitHub, Linkedin } from "react-feather";
import siteConfig from "@/data/siteConfig";
import { cx } from "@/lib/utils";

const iconProps = { className: "w-4 h-4 stroke-regal-yellow" };

const SOCIAL_ICONS: { [key: string]: React.ReactNode } = {
  twitter: <Twitter {...iconProps} />,
  instagram: <Instagram {...iconProps} />,
  github: <GitHub {...iconProps} />,
  linkedin: <Linkedin {...iconProps} />,
};

export const Social: React.FC = () => {
  return (
    <footer>
      {siteConfig.social ? (
        <ul className="flex list-none space-x-4">
          {Object.entries(siteConfig.social).map(([key, href]) => {
            return (
              <li key={key}>
                <a
                  href={href}
                  className={cx(
                    "w-8 h-8 grid place-items-center rounded-md",
                    "border border-regal-yellow",
                    "dark:bg-gray-800 dark:text-gray-50"
                  )}
                  title={key}
                >
                  {SOCIAL_ICONS[key]}
                </a>
              </li>
            );
          })}
        </ul>
      ) : null}
    </footer>
  );
};
