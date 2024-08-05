import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { columns } from '@/src/data/table/column.mockup';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { generateMockData } from '@/src/services/api/mockup.serviecs';

export default function TableBasic() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(5);
    const [data, setData] = useState<any[]>([]);
    const [totalRecords, setTotalRecords] = useState(0);

    useEffect(() => {
        const page = Math.floor(first / rows);
        const size = rows;
        const newData = generateMockData(page, size);
        setData(newData);
        setTotalRecords(100);
    }, [first, rows]);

    const onCustomPage = (event: any) => {
        setFirst(event.first);
        setRows(event.rows);
    }

    const template = {
        layout: 'RowsPerPageDropdown CurrentPageReport PrevPageLink NextPageLink',
        'RowsPerPageDropdown': (options: any) => {
            const dropdownOptions = [
                { label: 5, value: 5 },
                { label: 10, value: 10 },
                { label: 20, value: 20 },
                { label: 50, value: 50 }
            ];

            return (
                <React.Fragment>
                    <span className="mx-1 boder-t " style={{ color: 'var(--text-color)', userSelect: 'none' }}>Items per page: </span>
                    <Dropdown value={options.value} options={dropdownOptions} onChange={options.onChange} />
                </React.Fragment>
            );
        },
        'CurrentPageReport': (options: any) => {
            return (
                <span style={{ color: 'var(--text-color)', userSelect: 'none', width: '120px', textAlign: 'center' }}>
                    {options.first} - {options.last} of {options.totalRecords}
                </span>
            )
        }
    };

    return (
        <div className="card">
            <DataTable
                value={data}
                tableStyle={{ minWidth: '50rem' }}
                paginator
                paginatorTemplate={template}
                first={first}
                rows={rows}
                onPage={onCustomPage}
                showGridlines
            >
                {columns.map((col, i) => (
                    <Column key={col.field} field={col.field} header={col.header} className={col.className} />
                ))}
            </DataTable>
        </div>
    );
}
