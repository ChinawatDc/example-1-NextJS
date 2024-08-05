"use client"
import UploadFile from '@/src/components/Upload/UploadFile';
import React, { useState } from 'react';

export default function Upload() {

    const [files, setFiles] = useState<File[]>([]);
    const [files2, setFiles2] = useState<File[]>([]);
    console.log(files);
    return (
        <>
            <div>Upload</div>
            <div>
                <div>
                    <UploadFile files={files} setFiles={setFiles} />
                </div>
                <div>
                    <UploadFile files={files2} setFiles={setFiles2} advanced />
                </div>
            </div>
        </>
    );
}
