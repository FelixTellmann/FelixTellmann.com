import { FC } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

type DataTableSortHeadingProps = {
  isSortable?: boolean
  sortDirection?: "ascending" | "descending"
  active?: boolean
  onSort?: (event) => void
  index: number
}

export const DataTableHeading: FC<DataTableSortHeadingProps> = ({ children, isSortable = true, sortDirection = "ascending", active, onSort, index }) => {
  return <>
    <div tabIndex={0}
         role="switch"
         className={active ? "active" : ""}
         onClick={onSort}
         onKeyDown={onSort}
         aria-checked={active}
         data-active={active}
         data-direction={sortDirection}
         data-index={index}>
      {isSortable ? <>
        {sortDirection === "ascending" ? <FaCaretDown /> : null}
        {sortDirection === "descending" ? <FaCaretUp /> : null}
        {children}
      </> : children}
    </div>
    
    <style jsx>{`
      div {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
        user-select: none;
      
        ${isSortable ? `cursor: pointer;` : "default"}
        :global(svg) {
          opacity: 0;
          margin-right: 0.4rem;
          transition: 0.16s opacity;
        }
      
        &:hover, &:focus, &:active, &.active {
          outline: none;
      
          ${isSortable ? `text-decoration: underline;` : ""}
          :global(svg) {
            opacity: 1;
          }
        }
      }
    
    `}</style>
  </>;
};