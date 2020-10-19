import { Children, cloneElement, FC, isValidElement } from "react";

type ResponsiveProps = {
  mobile?: boolean;
  desktop?: boolean;
};

export const Responsive: FC<ResponsiveProps> = ({ children, mobile, desktop }) => {
  return (
      <>
        {Children.map(children, (child) => {
          let element;
          if (typeof child === "string") {
            element = <span>{child}</span>;
          } else {
            element = child;
          }
          if (isValidElement(element)) {
            return cloneElement(element);
          }
        })}
        <style jsx>{`
          @media screen and (max-width: 600px) {
            ${mobile ? "" : "display: none;"}
            ${mobile ? "" : `visibility: hidden;`}
          }
  
          @media screen and (min-width: 600px) {
            ${desktop ? "" : "display: none;"}
            ${desktop ? "" : `visibility: hidden;`}
          }
      `}</style>
      </>
  );
};
