import { FC } from "react";

import { FiCheckCircle, FiXCircle } from "react-icons/fi";

type ProsConsProps = {
  type: "pros" | "cons";
  title: string;
  points: string[];
};

export const ProsCons: FC<ProsConsProps> = ({ type, title, points }) => {
  return (
      <>
        <div>
          {title}
          <ul>
            {points.map((point) => (
                <li>
                  {type === "pros" ? <FiCheckCircle /> : <FiXCircle />}
                  {point}
                </li>
            ))}
          </ul>
        </div>
        <style jsx>{`
        div {
          margin: 1.6rem 0;
          padding: 2.4rem;
          border: 1px solid ${type === "pros" ? "var(--color-pro-40)" : "var(--color-warn-40)"};
          border-radius: 0.4rem;
          background-color: ${type === "pros" ? "var(--color-pro-10)" : "var(--color-warn-10)"};
          line-height: 1.5;
        }

        ul {
          margin-top: 1.6rem;
        }

        li {
          display: flex;
          align-items: baseline;
          margin-bottom: 0.8rem;
          color: var(--color-body);
          font-size: 1.6rem;
          font-weight: 600;

          :global(svg) {
            min-width: 1.6rem;
            margin-top: 0.3rem;
            margin-right: 0.8rem;
            color: ${type === "pros" ? "var(--color-pro)" : "var(--color-warn)"};
          }
        }
      `}</style>
      </>
  );
};
