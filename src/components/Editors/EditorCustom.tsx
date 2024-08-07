import React, { useState } from "react";
import { Editor } from "primereact/editor";
import { EditorProps } from "@/models/editors.model";

export default function EditorCustom({
    data = [],
    setData
}: EditorProps) {

    console.log("test", data);
    const toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
        [{ 'header': 1 }, { 'header': 2 }],               // custom button values
        [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'list': 'check' }],
        [{ 'script': 'sub' }, { 'script': 'super' }],      // superscript/subscript
        [{ 'indent': '-1' }, { 'indent': '+1' }],          // outdent/indent
        [{ 'direction': 'rtl' }],                         // text direction
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'font': [] }],
        [{ 'align': [] }],
        ['clean'],                                        // remove formatting button
        ['link', 'image', 'video']                        // link and media
    ];

    const modules = {
        toolbar: toolbarOptions,
    };

    return (
        <div className="card">
            <Editor
                value={data}
                onTextChange={(e) => setData(e.htmlValue || '')}
                style={{ height: '320px' }}
                modules={modules}


            />
        </div>
    )
}
