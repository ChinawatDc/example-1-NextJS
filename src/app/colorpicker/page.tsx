'use client';
import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { Card } from 'primereact/card';
import ColorInput from '@/components/Input/ColorInput';

export default function ColorPickerComponent() {
    const methods = useForm({
        shouldFocusError: true,
        defaultValues: {
            colorHEX: '#000000',
            colorRGB: { r: 100, g: 102, b: 241 },
            colorHSB: { h: 239, s: 59, b: 95 },
        }
    });

    const formatColor = (color: any) => {
        if (typeof color === 'string') {
            return color;
        }
        if (color.r !== undefined) {
            return `(${color.r}, ${color.g}, ${color.b})`;
        }
        if (color.h !== undefined) {
            return `(${color.h}, ${color.s}%, ${color.b}%)`;
        }
        return '';
    };

    return (
        <Card>
            <FormProvider {...methods}>
                <form >
                    <div>
                        <ColorInput
                            label="สีพื้นหลังแถบแบนเนอร์ (HEX)"
                            name="colorHEX"
                            rules={{ required: true }}
                        />
                        <div className='mt-4'>
                            {methods.watch("colorHEX")}
                        </div>
                    </div>
                    <div>
                        <ColorInput
                            label="สีพื้นหลังแถบแบนเนอร์ (RGB)"
                            name="colorRGB"
                            format="rgb"
                            rules={{ required: true }}
                        />
                        <div className='mt-4'>
                            {formatColor(methods.watch("colorRGB"))}
                        </div>
                    </div>
                    <div>
                        <ColorInput
                            label="สีพื้นหลังแถบแบนเนอร์ (HSB)"
                            name="colorHSB"
                            format="hsb"
                            rules={{ required: true }}
                        />
                        <div className='mt-4'>
                            {formatColor(methods.watch("colorHSB"))}
                        </div>
                    </div>
                </form>
            </FormProvider>
        </Card>
    );
}
