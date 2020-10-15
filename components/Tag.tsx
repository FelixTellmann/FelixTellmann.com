import { CSSProperties, FC } from 'react';


type BadgeProps = {
  name: string
  status?: 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
  size?: 'small' | 'medium';
  style?: CSSProperties;
};

export const Tag: FC<BadgeProps> = ({ name, status = 'default' }) => {
  return (
    <>
      <span>
        {name}
      </span>
      <style jsx>{`
        span {
          height: 22px;
          display: inline-flex;
          align-items: center;
          margin-right: 0.3rem;
          padding: 0.2rem 0.8rem;
          border: 1px solid #b2b2b3;
          border-radius: 4px;
          user-select: none;
          color: #454f5b;
          font-size: 1.2rem;
          cursor: pointer;
          ${status === "default" ? `background-color: #dfe3e8;` : ""}
          ${status === "info" ? `background-color: #b4e1fa;` : ""}
          ${status === "success" ? `background-color: #bbe5b3;` : ""}
          ${status === "attention" ? `background-color: #ffea8a;` : ""}
          ${status === "warning" ? `background-color: #ffc58b;` : ""}
          ${status === "critical" ? `background-color: #fead9a;` : ""}
          ${status === "new" ? `background-color: #dfe3e8;\n font-weight: 600;\n border: none;` : ""}
          
          &:hover, &:focus, &:active {
              background-color: #c3c1c1;
          }
        }
      `}</style>
    </>
  );
};
