import React, { useState } from 'react'
import { Controller, useFormContext } from 'react-hook-form';
import { Calendar } from 'primereact/calendar';
import { FloatInputProps } from '@/models/input.model';

import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

export default function CalendarBasic({
  label,
  name,
  className,
  rules,
  type = 'text',
  placeholder,
  disabled,
  maxLength,
  toggleMask,
  header,
  footer,
  error,
  mask,
}: FloatInputProps) {
  const { control } = useFormContext();




  return (
    <div className={`globals-input-layout ${className}`}>
      {label && (
        <label className='mb-1'>
          {label}
          {rules?.required && <span className="text-[#FF0000]"> *</span>}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState }) => {
          const value = field.value ?? '';
          return (
            <div  >
              <Calendar
                className={` ${fieldState.invalid ? 'p-invalid !border-red-600' : ''}`}
                id={name}
                {...field}
                value={value}
                onChange={(e) => field.onChange(e.value)}
                placeholder={placeholder}
                disabled={disabled}
                dateFormat="dd/mm/yy"
              // showTime
              // hourFormat="24"
              // showIcon 
              // icon={() => <i className="pi pi-clock" />} //สีพื้นหลัง ตั้งค่่า ที่ class .p-button.p-button-icon-only styles.css
              // showButtonBar
              />

            </div>
          )
        }}
      />
    </div>
  )
}
