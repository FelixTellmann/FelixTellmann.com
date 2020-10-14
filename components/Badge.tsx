import { CSSProperties, FC } from 'react';

type BadgeProps = {
  status?: 'success' | 'info' | 'attention' | 'critical' | 'warning' | 'new';
  size?: 'small' | 'medium';
  progress?: 'incomplete' | 'partially' | 'complete';
  style?: CSSProperties;
  customColor?: string;
};

export const Badge: FC<BadgeProps> = ({ children, status = 'default', size = 'medium', progress }) => {
  return (
    <>
      <span>
        {progress === 'incomplete' ? <i className="incomplete" /> : null}
        {progress === 'partially' ? <i className="partially" /> : null}
        {progress === 'complete' ? <i className="complete" /> : null}
        {children}
      </span>
      <style jsx>{`
        span {
          height: 22px;
          display: inline-flex;
          align-items: center;
          margin-right: 0.2rem;
          padding: 0.2rem 0.8rem;
          border: 1px solid #fff;
          border-radius: 2rem;
          user-select: none;
          color: #454f5b;
          ${size === 'small' ? 'font-size: 1.2rem;' : 'font-size: 1.3rem;'}
          ${status === 'default' ? `background-color: #dfe3e8;` : ''}
          ${status === 'info'
            ? `background-color: #b4e1fa;`
            : ''}
          ${status === 'success' ? `background-color: #bbe5b3;` : ''}
          ${status === 'attention'
            ? `background-color: #ffea8a;`
            : ''}
          ${status === 'warning' ? `background-color: #ffc58b;` : ''}
          ${status === 'critical'
            ? `background-color: #fead9a;`
            : ''}
          ${status === 'new' ? `background-color: #dfe3e8;\n font-weight: 500;\n border: none;` : ''}
        }
        i {
          width: 1rem;
          height: 1rem;
          flex-shrink: 0;
          margin: 0 0.4rem 0 -0.2rem;
          border: 0.2rem solid currentColor;
          border-radius: 50%;
          ${size === 'small' ? 'width: 0.9rem; height: 0.9rem;' : ''}
        }
        .partially {
          background-image: linear-gradient(0deg, currentColor, currentColor 50%, transparent 0, transparent);
        }
        .complete {
          background-color: currentColor;
        }
      `}</style>
    </>
  );
};
