import { FC } from 'react';

type DataTableProps = {
  headings: (string | JSX.Element)[];
  sortable: boolean[] | unknown;
  footer?: (string | JSX.Element)[];
  columnContentTYpes?: ('text' | 'numeric')[];
  defaultSortDirection?: 'ascending' | 'descending' | 'none';
  rows: (string | number | JSX.Element)[][] | unknown[];
};

export const DataTable: FC<DataTableProps> = ({ headings }) => {
  return (
    <>
      <table className="table">
        <thead className="row header">
          {headings.map((key) => (
            <th>{key}</th>
          ))}
        </thead>
        <tbody>
          <tr className="row">
            <td className="box">1</td>
            <td className="box">Using next Js. to do somethign really cool!</td>
            <td className="boxbox">Next.js, react, etc</td>
            <td className="box">Link to</td>
            <td className="box">In Progress</td>
            <td className="box">2020-10-10</td>
          </tr>
        </tbody>
      </table>

      <style jsx>{`
        table {
          position: relative;
          z-index: -1;
          left: 3.2rem;
          width: 100%;
          display: grid;
          /*================ no of columns as prop - read out of data? ================*/
          grid-template-columns: repeat(6, auto);
          margin-top: 3.2rem;
          margin-bottom: 3.2rem;
          border-radius: 4px;

          @media screen and (min-width: 964px) {
            width: 900px;
            margin-left: -120px;
          }

          th {
            position: sticky;
            top: 136px;
            display: block;
            overflow: visible !important;
            border-top: 1px solid var(--color-text);
            background-color: var(--color-text);
            color: var(--color-background);

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
              border: 1px solid var(--color-text);
              background-color: var(--color-text);
            }
          }

          th:first-of-type {
            border-left: 1px solid var(--color-text);
            border-top-left-radius: 4px;

            &:after {
              border-top-left-radius: 4px;
            }
          }

          th:last-of-type {
            border-right: 1px solid var(--color-text);
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
            border-right: 1px solid var(--color-blue-40);
            border-bottom: 1px solid var(--color-blue-40);
            background-color: var(--color-pro-10);
            cursor: pointer;
          }

          td:nth-of-type(2n) {
            background-color: var(--color-blue-10);
          }

          td:first-of-type {
            border-left: 1px solid var(--color-text);
          }

          td:last-of-type {
            border-right: 1px solid var(--color-text);
          }

          tr:last-of-type {
            td {
              border-bottom: 1px solid var(--color-text);
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
              background-color: var(--color-warn-10);
            }

            td:nth-of-type(2n) {
              background-color: var(--color-warn-10);
            }
          }
        }
      `}</style>
    </>
  );
};

export default DataTable;
