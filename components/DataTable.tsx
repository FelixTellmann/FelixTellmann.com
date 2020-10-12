import { CSSProperties, FC, useEffect, useRef, useState } from "react";
import Color from "color";

type RowObject = {
  [key: string]: string | number | JSX.Element;
};
type ContentTypes = {
  [key: string]: "text" | "numeric";
};
type ColumnWidth = {
  [key: string]: string | number;
};

type RowArray = (string | number | JSX.Element)[];
type DataTableProps = {
  headings: string[];
  sortable: boolean[] | unknown;
  footer?: (string | JSX.Element)[];
  columnContentTypes?: ("text" | "numeric")[] | ContentTypes;
  fixedColumnWidth?: (string | number)[] | ColumnWidth;
  defaultSortDirection?: "ascending" | "descending" | "none";
  initialSortColumn?: number | string;
  rows: (RowArray | RowObject)[];
  color?: string | { base: string; heading: string };
  style?: CSSProperties;
};

export const DataTable: FC<DataTableProps> = ({ headings, rows = [], color, style = {}, fixedColumnWidth }) => {
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
  
  const columnLength = headings.length;
  
  let columnWidth = `repeat(${columnLength}, auto`;
  
  if (fixedColumnWidth && Array.isArray(fixedColumnWidth)) {
    const array: string[] = new Array(columnLength).fill("auto");
    fixedColumnWidth.forEach(
        (width, index) => width && (typeof width === "string"
            ? (array[index] = width)
            : (array[index] = `${width.toString()}px`))
    );
    array.length = columnLength;
    columnWidth = array.join(" ");
  } else if (typeof fixedColumnWidth === "object" && fixedColumnWidth !== null) {
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
  
  const tableRows: RowArray[] = rows.map((row) => {
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
  });
  
  return (
      <>
        <table style={toCssStyle} ref={table}>
          <thead>
            <tr>
              {headings.map((key, i) => (
                  <th key={i}>{key}</th>
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
            min-width: 40px;
            height: 40px;
            display: inline;
            overflow: hidden;
            padding: 0 8px;
            font-size: 14px;
            line-height: 40px;
            white-space: nowrap;
            text-align: center;
            text-overflow: ellipsis;
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
        }
      `}</style>
      </>
  );
};

export default DataTable;
