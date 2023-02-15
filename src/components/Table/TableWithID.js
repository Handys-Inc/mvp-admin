import React from 'react'
import { useTable } from 'react-table'

function Table({ columns, data }) {
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        rows,
        prepareRow,
      } = useTable({
        columns,
        data,
      })

      function getTrProps(rowInfo) {
        if (rowInfo) {
          return {
            style: {
              padding: '2.5rem',
            },
          };
        }
        return {};
      }

    return(
        <table {...getTableProps()} className="table-auto w-full">
            <thead>
                {headerGroups.map(headerGroup => (
                <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                    <th {...column.getHeaderProps()} className="text-center border-b-2 border-faintGray">{column.render('Header')}</th>
                    ))}
                </tr>
                ))}
            </thead>
            <tbody {...getTableBodyProps()}>
                {rows.map((row, i) => {
                prepareRow(row)
                return (
                    <tr {...row.getRowProps(getTrProps(row))} className="mb-5 border-b-2 border-faintGray">
                    {row.cells.map(cell => {
                        return <td {...cell.getCellProps()} className="text-center text-sm">{cell.render('Cell')}</td>
                    })}
                    </tr>
                )
                })}
            </tbody>
    </table>
    
    )
}

export default Table;