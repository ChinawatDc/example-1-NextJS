export interface TagStatusProps {
    name: string;
    type?: 'success' | 'warning' | 'danger' | 'info' | 'secondary' | 'contrast' | 'primary';
}
export interface ConvertDateProps {
    date: string;
    format?: string;
}
export interface PercentageProps {
    number: string | number;
}