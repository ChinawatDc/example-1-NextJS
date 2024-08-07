'use client';
import React, { useState, useRef } from 'react';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';

export default function StepComponent() {
    const [activeIndex, setActiveIndex] = useState(0);
    const toast = useRef<Toast>(null);
    const items: any[] = [
        {
            label: 'Personal',
            command: (event: { item: { label: any; }; }) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
                }
            }
        },
        {
            label: 'Seat',
            command: (event: { item: { label: any; }; }) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
                }
            }
        },
        {
            label: 'Payment',
            command: (event: { item: { label: any; }; }) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
                }
            }
        },
        {
            label: 'Confirmation',
            command: (event: { item: { label: any; }; }) => {
                if (toast.current) {
                    toast.current.show({ severity: 'info', summary: 'Last Step', detail: event.item.label });
                }
            }
        }
    ];

    return (
        <div className="card">
            <Toast ref={toast}></Toast>
            <Steps model={items} activeIndex={activeIndex} onSelect={(e) => setActiveIndex(e.index)} readOnly={false} />
        </div>
    );
}
