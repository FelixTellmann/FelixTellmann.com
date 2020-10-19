import { FC } from "react";
import { Button } from "./Button";
import { Link } from "./Link";
import { Text } from "./Text";

type FooterProps = {
  socialNav?: {
    title: string | JSX.Element;
    href: string;
    target?: string;
  }[];
  footerNav?: {
    title: string;
    href: string;
    target?: string;
  }[];
};

export const Footer: FC<FooterProps> = ({ socialNav, footerNav }) => {
  return (
      <>
        <footer>
          <div>
            {socialNav.map(({ title, href, target }) => (
                <Button key={href} href={href} large icon target={target} mx={1}>
                  {title}
                </Button>
            ))}
          </div>
          {footerNav ? (
              <nav>
                {footerNav.map(({ title, href, target }) => (
                    <Link key={href} href={href} subtle title={title} target={target} small p={1} m={1} />
                ))}
              </nav>
          ) : null}
          <div>
            <Text as="small" d="block" mt={4} fontSize={0} color="--color-text">
              {`© ${new Date().getFullYear()} FelixTellmann.com - All rights reserved.`}
            </Text>
          </div>
        </footer>
        <style jsx>{`
          footer {
            max-width: 960px;
            display: flex;
            flex-direction: column;
            align-items: center;
            margin-right: auto;
            margin-left: auto;
            padding: 3.2rem 3.2rem 1.6rem;

            nav {
              display: flex;
            }
          }
        `}</style>
      </>
  );
};
