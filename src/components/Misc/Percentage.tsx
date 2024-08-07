import React from 'react';
import moment from 'moment';
import { PercentageProps } from '../../types/misc.model';

export default function Percentage({
    number,
}: PercentageProps) {
    const numberStr = String(number);
    const displayPercentage = numberStr !== '0';
    return (
        <>
            {numberStr}{displayPercentage ? '%' : ''}
        </>
    );
}