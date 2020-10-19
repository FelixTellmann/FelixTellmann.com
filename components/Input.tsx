import { ChangeEvent, FC, FormEvent, InputHTMLAttributes, useRef } from "react";
import { Button } from "./Button";

type InputProps = {
  placeholder?: string;
  label?: string;
  secondary?: boolean;
  button?: string | JSX.Element;
  icon?: JSX.Element;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  submit?: (e: FormEvent<HTMLFormElement>, ref) => void;
  submitting?: boolean;
};

export const Input: FC<InputProps & InputHTMLAttributes<any>> = ({ label, button, submit, submitting = false, placeholder, icon, secondary, onChange, ...props }) => {
  const inputRef = useRef();
  const submitWithRef = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submit) {
      submit(e, inputRef);
    }
  };
  
  return (
      <>
        <form className="input-group" onSubmit={submitWithRef}>
          <input aria-label={label || placeholder} placeholder={placeholder} onChange={onChange} {...props} ref={inputRef} />
          {button
           ? <Button aria-label="Subscribe" small secondary mr="-8px" fontWeight={600} fontSize={0} disabled={submitting}>{button}</Button>
           : null}
          {icon || null}
        </form>
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
            background-color: ${secondary ? `var(--color-background)` : `var(--color-input-background)`};
            transition: box-shadow 0.2s;
  
            &:hover {
              border-color: var(--color-input-border-hover);
            }
  
            &:focus,            &:active,            &:focus-within {
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
            color: ${submitting ? `var(--color-subdued)` : `inherit`};
            appearance: none;
            outline: none;
            pointer-events: ${submitting ? `none` : `all`};
  
            ::placeholder {
              color: var(--color-subdued);
            }
          }
      `}</style>
      </>
  );
};


