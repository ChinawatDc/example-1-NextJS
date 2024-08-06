import { ColumnBodyOptions } from 'primereact/column';

export interface tableprops {
   data:any
}

export interface ColumnMeta<RecordType = unknown> {
    field: string;
    header: string;
    sortable?: boolean;
    className?: string;
    align?: string;
    render?: (data: any, options: ColumnBodyOptions) => React.ReactNode;
}

 export interface PaginatorProps {
    first: number;
    rows: number;
    totalRecords: number;
    onPageChange?: (event: any) => void;
}
export interface PaginatorTemplate {
    layout: string;
    RowsPerPageDropdown: (options: any) => React.ReactNode;
    CurrentPageReport: (options: any) => React.ReactNode;
    // Add other template keys as needed
}

export interface TableBasicProps {
    data: any[];
    columns: ColumnMeta<any>[];
    total: number;
    paginator?: boolean;
    tablename?: string
    exports?: boolean;
    selection?: boolean;
    selectionClick?: boolean;
    selectionType?: 'radiobutton' | 'checkbox';
}