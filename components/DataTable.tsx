import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import { FaCaretDown, FaCaretUp } from "react-icons/fa";

import Color from "color";
import JSXStyle from "styled-jsx/style";
import _hashString from "string-hash";

type RowObject = {
  [key: string]: string | number | JSX.Element;
};
type ContentTypes = {
  [key: string]: "text" | "numeric" | "center";
};
type ColumnWidth = {
  [key: string]: string | number;
};
type ColumnSort = {
  [key: string]: boolean;
};
const hashString = String(_hashString("randomValue"));
type RowArray = (string | number | JSX.Element)[];
type DataTableProps = {
  headings: string[];
  footer?: (string | JSX.Element)[];
  columnContentTypes?: ("text" | "numeric" | "center") | ("text" | "numeric" | "center")[] | ContentTypes;
  fixedColumnWidth?: (string | number)[] | ColumnWidth;
  sortable: boolean[] | ColumnSort;
  defaultSortDirection?: "ascending" | "descending";
  defaultSortColumn?: number | string;
  rows: (RowArray | RowObject)[];
  color?: string | { base: string; heading: string };
  style?: CSSProperties;
};

type DataTableSortHeadingProps = {
  isSortable?: boolean
  sortDirection?: "ascending" | "descending"
  active?: boolean
  onSort?: (event) => void
  index: number
}

const DataTableSortHeading: FC<DataTableSortHeadingProps> = ({ children, isSortable = true, sortDirection = "ascending", active, onSort, index }) => {
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

export const DataTable: FC<DataTableProps> = ({ headings, rows = [], color, style = {}, fixedColumnWidth, columnContentTypes, sortable = false, defaultSortDirection = "ascending", defaultSortColumn = 0 }) => {
  /*= =============== Color Styles ================ */
  const table = useRef();
  const [toCssStyle, setToCssStyle] = useState(style);
  useEffect(() => {
    let heading = "";
    let base = "";
    if (window && !color) {
      heading = getComputedStyle(table.current)?.getPropertyValue("--table")?.trim() || "#3182ce";
    } else if (typeof color === `string`) {
      heading = color;
    } else if (typeof color === "object" && color !== null) {
      heading = color.heading;
      base = color.base;
    }
    
    setToCssStyle((currentStyle) => ({
      ...currentStyle,
      "--table-header-border": Color(heading),
      "--table-header-text": Color(heading).isLight()
          ? Color(heading).negate().saturate(1).darken(0.8).grayscale().hsl().string()
          : Color(heading).negate().saturate(1).lighten(0.8).grayscale().hsl().string(),
      "--table-cell-1n": Color(base || heading).alpha(0.15).hsl().string(),
      "--table-cell-2n": Color(base || heading).rotate(-30).alpha(0.1).hsl().string(),
      "--table-cell-hover-1n": Color(base || heading).rotate(180).alpha(0.13).hsl().string(),
      "--table-cell-hover-2n": Color(base || heading).rotate(180).alpha(0.1).hsl().string(),
      "--table-cell-border": Color(base || heading).alpha(0.4).hsl().string()
    }));
  }, [color]);
  
  /*= =============== ColumnWidth ================ */
  const columnLength = headings.length;
  let columnWidth = `repeat(${columnLength}, auto`;
  if (fixedColumnWidth) {
    if (Array.isArray(fixedColumnWidth)) {
      const array: string[] = new Array(columnLength).fill("auto");
      fixedColumnWidth.forEach(
          (width, index) => width && (typeof width === "string"
              ? (array[index] = width)
              : (array[index] = `${width.toString()}px`))
      );
      array.length = columnLength;
      columnWidth = array.join(" ");
    }
    if (typeof fixedColumnWidth === "object" && !Array.isArray(fixedColumnWidth)) {
      const array: string[] = new Array(columnLength).fill("auto");
      Object.entries(fixedColumnWidth).forEach(([key, width]) => {
        const hIndex = headings.indexOf(key);
        if (hIndex !== -1) {
          if (typeof width === "string") {
            array[hIndex] = width;
          } else {
            array[hIndex] = `${width.toString()}px`;
          }
        }
      });
      columnWidth = array.join(" ");
    }
  }
  
  /*= =============== ColumnTypes ================ */
  let columnTextDirection = "left";
  let columnTextDirectionArray: string[] = [];
  if (columnContentTypes) {
    if (typeof columnContentTypes === "string") {
      if (columnContentTypes === "text") columnTextDirection = "left";
      if (columnContentTypes === "numeric") columnTextDirection = "right";
      if (columnContentTypes === "center") columnTextDirection = "center";
    }
    if (Array.isArray(columnContentTypes)) {
      columnTextDirectionArray = new Array(columnLength).fill("left");
      columnContentTypes.forEach((contentType, index) => {
        if (contentType === "text") columnTextDirectionArray[index] = "left";
        if (contentType === "numeric") columnTextDirectionArray[index] = "right";
        if (contentType === "center") columnTextDirectionArray[index] = "center";
      });
    }
    if (typeof columnContentTypes === "object" && !Array.isArray(columnContentTypes)) {
      columnTextDirectionArray = new Array(columnLength).fill("left");
      Object.entries(columnContentTypes).forEach(([key, type]) => {
        const cIndex = headings.indexOf(key);
        if (cIndex !== -1) {
          if (type === "text") columnTextDirectionArray[cIndex] = "left";
          if (type === "numeric") columnTextDirectionArray[cIndex] = "right";
          if (type === "center") columnTextDirectionArray[cIndex] = "center";
        }
      });
    }
  }
  
  /*= =============== Unify Row Data &  Sorting ================ */
  /* Initial State */
  const [tableHeadings, setTableHeadings] = useState(headings.map((heading, index) => {
    let isSortable: boolean;
    if (sortable) {
      if (Array.isArray(sortable)) {
        isSortable = sortable[index] === true;
      }
      if (typeof sortable === "object" && !Array.isArray(sortable)) {
        isSortable = sortable[heading];
      }
    }
    return {
      heading,
      isSortable,
      sortDirection: defaultSortDirection,
      active: index === defaultSortColumn
    };
  }));
  
  const sanitizedRows = rows.map((row) => {
    let returnArray: (string | number | JSX.Element)[] = [];
    if (Array.isArray(row)) {
      row.length = columnLength;
      returnArray = [...row];
    } else if (typeof row === "object" && row !== null) {
      headings.forEach((h) => {
        returnArray.push(row[h]);
      });
    }
    return returnArray;
  })
  
  let defaultSortIndex = 0
  
  if (defaultSortColumn) {
      if (typeof defaultSortColumn === 'string') {
        defaultSortIndex = headings.indexOf(defaultSortColumn)
      }
      if (typeof defaultSortColumn === 'number') {
        defaultSortIndex = defaultSortColumn;
      }
  }
  
  
  
  const updateDirection = (tableData: RowArray[], direction: "ascending" | "descending", index: number): RowArray[] => {
    return tableData.sort((a, b) => {
      if (direction === "ascending") {
        if (typeof a[index] === "string") {
          if (a[index].toString().trim().toLowerCase() < b[index].toString().trim().toLowerCase()) {
            return -1;
          }
          if (a[index].toString().trim().toLowerCase() > b[index].toString().trim().toLowerCase()) {
            return 1;
          }
          return 0;
          
        }
        if (typeof a[index] === "number") {
          return +a[index] - +b[index];
        }
      }
      if (direction === "descending") {
        if (typeof a[index] === "string") {
          if (a[index].toString().trim().toLowerCase() > b[index].toString().trim().toLowerCase()) {
            return -1;
          }
          if (a[index].toString().trim().toLowerCase() < b[index].toString().trim().toLowerCase()) {
            return 1;
          }
          return 0;
        }
        if (typeof a[index] === "number") {
          return +b[index] - +a[index];
        }
      }
      return 0;
    });
  };
  
  const [tableRows, setTableRows] = useState<RowArray[]>(sortable ? updateDirection(sanitizedRows, defaultSortDirection, defaultSortIndex ) : sanitizedRows);
  
  /* Update of State */
  const onSort = (e) => {
    const { active, direction, index } = e.currentTarget.dataset;
    const sortDirection = active === "true" ? (direction === "ascending"
        ? "descending"
        : "ascending") : "ascending";
    setTableHeadings((prevTableHeadings) => {
      return prevTableHeadings.map((heading, i) => {
        return {
          ...heading,
          active: i === +index,
          sortDirection: i === +index ? sortDirection : "ascending"
        };
      });
    });
    setTableRows(updateDirection(tableRows, sortDirection, index));
  };
  
  return (
      <>
        <table className={`jsx-${hashString}`} style={toCssStyle} ref={table}>
          <thead>
            <tr>
              {tableHeadings.map(({ heading, isSortable, sortDirection, active }, i) => (
                  <th key={i}><DataTableSortHeading onSort={isSortable ? onSort : null}
                                                    isSortable={isSortable}
                                                    sortDirection={sortDirection}
                                                    active={active}
                                                    index={i}>{heading}</DataTableSortHeading>
                  </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {tableRows.map((row, i) => (
                <tr key={i}>
                  {row.map((cell, j) => (
                      <td key={j}>{cell}</td>
                  ))}
                </tr>
            ))}
          </tbody>
        </table>
        <JSXStyle id={`jsx-${hashString}`}>
          {columnTextDirectionArray.map((val, i) => {
            return `.jsx-${hashString} td:nth-of-type(${i + 1}),.jsx-${hashString} th:nth-of-type(${i + 1}) {text-align: ${val};}`;
          }).join("")}
        </JSXStyle>
        <style jsx>{`
        table {
          position: relative;
          z-index: -1;
          width: 100%;
          display: grid;
          grid-template-columns: ${columnWidth};
          margin-top: 3.2rem;
          margin-bottom: 3.2rem;
          border-radius: 4px;
          --table: #319f9c;

          @media screen and (min-width: 964px) {
            width: 900px;
            margin-left: -120px;
          }
        }
        th {
          position: sticky;
          top: 136px;
          font-weight: 700;
          display: block;
          overflow: visible !important;
          border-top: 1px solid var(--table-header-border);
          background-color: var(--table-header-border);
          color: var(--table-header-text);

          &:before {
            position: absolute;
            content: '';
            z-index: -1;
            bottom: calc(100% - 4px);
            left: -1px;
            width: calc(100% + 3px);
            height: 136px;
            background-color: var(--color-background);
          }

          &:after {
            position: absolute;
            content: '';
            z-index: 0;
            top: 0;
            left: -1px;
            width: calc(100% + 2px);
            height: 8px;
            border: 1px solid var(--table-header-border);
            background-color: var(--table-header-border);
          }
        }

        th:first-of-type {
          border-left: 1px solid var(--table-header-border);
          border-top-left-radius: 4px;

          &:after {
            border-top-left-radius: 4px;
          }
        }

        th:last-of-type {
          border-right: 1px solid var(--table-header-border);
          border-top-right-radius: 4px;

          &:after {
            border-top-right-radius: 4px;
          }
        }

        tr,
        thead,
        tbody {
          display: contents;
        }

        th,
        td {
          min-width: 4rem;
          height: 4rem;
          display: inline;
          overflow: hidden;
          padding: 0 0.8rem;
          font-size: 1.4rem;
          line-height: 4rem;
          white-space: nowrap;
          text-align: ${columnTextDirection};
          text-overflow: ellipsis;
          @media screen and (min-width: 964px) {
            padding: 0 1.2rem;
          }
        }

        td {
          position: relative;
          z-index: -1;
          border-right: 1px solid var(--table-cell-border);
          border-bottom: 1px solid var(--table-cell-border);
          background-color: var(--table-cell-1n);
          color: var(--color-text);
          cursor: pointer;
        }

        td:nth-of-type(2n) {
          background-color: var(--table-cell-2n);
        }

        td:first-of-type {
          border-left: 1px solid var(--table-header-border);
        }

        td:last-of-type {
          border-right: 1px solid var(--table-header-border);
        }

        tr:last-of-type {
          td {
            border-bottom: 1px solid var(--table-header-border);
          }

          td:first-of-type {
            border-bottom-left-radius: 4px;
          }

          td:last-of-type {
            border-bottom-right-radius: 4px;
          }
        }

        tr:hover {
          td {
            background-color: var(--table-cell-hover-1n);
          }

          td:nth-of-type(2n) {
            background-color: var(--table-cell-hover-2n);
          }
        }
      `}</style>
      </>
  );
};

export default DataTable;
