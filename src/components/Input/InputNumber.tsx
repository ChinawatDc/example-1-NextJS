import { InputNumberProps } from '@/src/models/input.model';
import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { InputNumber as PrimeInputNumber } from 'primereact/inputnumber';

export default function InputNumber({
    label,
    name,
    className,
    rules,
    placeholder,
    disabled,
    suffix,
    maxLength
    // currency = 'USD', // Add a default currency prop if not provided
}: InputNumberProps) {
    const { control } = useFormContext();

    return (
        <div className={`globals-input-layout ${className}`}>
            {label && (
                <label htmlFor={name} className='mb-1'>
                    {label}
                    {rules?.required && <span className="text-[#FF0000]"> *</span>}
                </label>
            )}
            <Controller
                name={name}
                control={control}
                rules={rules}
                render={({ field, fieldState }) => {
                    const value = typeof field.value === 'number' ? field.value : 0;

                    return (
                        <div>
                            <PrimeInputNumber
                                className={`globals-input ${fieldState.invalid ? 'p-invalid !border-red-600' : ''}`}
                                id={name}
                                {...field}
                                value={value}
                                placeholder={placeholder}
                                disabled={disabled}
                                useGrouping={false}
                                // prefix=''
                                // suffix=''
                                maxLength={maxLength}
                                min={0}
                                // ถ้าต้องการใช้ปุ่มให้เปิดข้างล่าง
                                // showButtons  
                                // buttonLayout="horizontal" // แสดงไอคอน horizontal ซ้ายขาว  vertical ขึ้นลง
                                // step={1} 
                                //  incrementButtonIcon="pi pi-plus"  //icon ในการคลิกเพิ่มลง
                                //  decrementButtonIcon="pi pi-minus"
                            />
                           
                        </div>
                    );
                }}
            />
        </div>
    );
}
