import React from 'react';
import { ProgressSpinner } from 'primereact/progressspinner';

export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <ProgressSpinner style={{ width: '100px' }} strokeWidth="8" />
        </div>
    );
}
