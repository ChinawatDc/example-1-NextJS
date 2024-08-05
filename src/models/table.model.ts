export interface tableprops {
   data:any
}

export  interface ColumnMeta {
    field: string;
    header: string;
    className?:string;
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
