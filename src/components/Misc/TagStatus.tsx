import React from 'react';
import { Tag } from 'primereact/tag';
import { TagStatusProps } from '../../types/misc.model';

export default function TagStatus({
    name,
}: TagStatusProps) {

    const tagStyle = {
        fontSize: '15px',
        color: 'black',
        fontWeight: 400,
        width: '150px',
        height: '45px',
        borderRadius: '10px',
        padding: '13px 15px',
        lineHeight: '19.36px',
    };

    let severity: 'success' | 'warning' | 'danger' | 'info' | undefined;
    let classname = '';

    switch (name) {
        case 'เสร็จสิ้น':
            severity = 'success';
            break;
        case 'กำลังดำเนินการ':
            severity = 'warning';
            classname = 'bg-[#EDF12C]';
            break;
        case 'ล่าช้า':
            severity = 'danger';
            break;
        case 'รองบประมาณ':
        case 'ยังไม่เริ่มโครงการ':
            severity = 'info';
            classname = name === 'ยังไม่เริ่มโครงการ' ? 'bg-[#D9D9D9] border border-black' : classname;
            break;
        default:
            severity = 'info';
            break;
    }

    return (
        <Tag severity={severity} value={name} style={tagStyle} className={classname}></Tag>
    );
}
