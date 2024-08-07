'use client';
import dynamic from 'next/dynamic';
import { useState } from 'react';

// Dynamic import for client-side only component
const EditorCk = dynamic(() => import('@/components/Editors/EditorCk'), { ssr: false });
const EditorCustom = dynamic(() => import('@/components/Editors/EditorCustom'), { ssr: false });
const Editors = dynamic(() => import('@/components/Editors/Editors'), { ssr: false });

export default function Page() {
  const [text, setText] = useState('');
  const [textCk, setTextCk] = useState('');

  return (
    <div>
      <div className='mb-12'>
        <div className="flex justify-center items-center mb-4">
          <div className="text-xl font-extrabold">Qull.Js Text Editor</div>
        </div>
        <Editors
          data={text}
          setData={setText}
        />
        <div className='h-28 border my-2 pt-1 max-h-28 overflow-y-auto'>
          <h2 className="text-xl font-bold flex justify-center">Preview</h2>
          <div dangerouslySetInnerHTML={{ __html: text }}></div>
        </div>
      </div>
      <div className='max-lg:max-w-xl'>
        <div className="flex justify-center items-center mb-4">
          <div className="text-xl font-extrabold">Ck5 Text Editor</div>
        </div>
        <EditorCk
          data={textCk}
          setData={setTextCk}
        />
        <div className='h-28 border my-2 pt-1 max-h-28 overflow-y-auto'>
          <h2 className="text-xl font-bold flex justify-center">Preview Ck5</h2>
          <div dangerouslySetInnerHTML={{ __html: textCk }} className='p-2'></div>
        </div>
      </div>
    </div>
  )
}
