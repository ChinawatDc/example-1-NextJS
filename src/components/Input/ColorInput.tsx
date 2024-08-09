import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { ColorPicker } from 'primereact/colorpicker';
import { ColorProps } from '../../types/input.model';

export default function ColorInput({
  label,
  name,
  format = 'hex',
  className,
  rules,
  disabled = false,
}: ColorProps) {
  const { control, watch, formState } = useFormContext();

  let inputId: string;
  switch (format) {
    case 'hex':
      inputId = 'cp-hex';
      break;
    case 'rgb':
      inputId = 'cp-rgb';
      break;
    case 'hsb':
      inputId = 'cp-hsb';
      break;
    default:
      inputId = 'cp-hex';
  }

  return (
    <div className="mt-4">
      {label && (
        <label className='mb-1'>
          {label}
          {rules?.required && <span className="text-[#FF0000]"> *</span>}
        </label>
      )}
      <div>
        <Controller
          name={name}
          control={control}
          rules={rules}
          defaultValue={watch(name)}
          render={({ field: { value, onChange } }) => {
            return (
              <ColorPicker inputId={inputId} format={format} className={className} value={value} onChange={onChange} disabled={disabled} />
            )
          }
          }
        />
      </div>
    </div>
  );
}