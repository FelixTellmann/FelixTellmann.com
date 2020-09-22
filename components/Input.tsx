import { ChangeEvent, FC } from 'react';

type InputProps = {
  placeholder?: string;
  label?: string;
  icon?: any;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
};

export const Input: FC<InputProps> = ({ label, placeholder, icon, onChange }) => {
  return (
    <>
      <div className="input-group">
        <input aria-label={label ? label : placeholder} placeholder={placeholder} onChange={onChange} />
        {icon}
      </div>
      <style jsx>{`
        .input-group {
          font-size: 1.6rem;
          width: 100%;
          height: 4rem;
          display: flex;
          align-items: center;
          padding: 0 1.6rem;
          border: 1px solid var(--color-input-border);
          border-radius: var(--border-radius);
          background-color: var(--color-input-background);
          transition: box-shadow 0.2s;

          &:hover {
            border-color: var(--color-input-border-hover);
          }

          &:focus,
          &:active,
          &:focus-within {
            border-color: #3182ce;
            box-shadow: 0 0 0 1px #3182ce;
          }
        }

        input {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          font: inherit;
          border: 0;
          background-color: unset;
          color: inherit;
          appearance: none;
          outline: none;
        }
      `}</style>
    </>
  );
};

export default Input;
