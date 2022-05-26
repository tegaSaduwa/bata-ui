import React, { ReactNode, useState } from "react";

type IPreviewComponent = {
  heading: ReactNode;
  preview: ReactNode;
  code: ReactNode;
};

const PreviewComponent = (props: IPreviewComponent) => {
  const [preview, setPreviw] = useState(true);
  const [code, setCode] = useState(false);
  const resetPreview = () => {
    setPreviw(true);
    setCode(false);
  };
  const resetCode = () => {
    setCode(true);
    setPreviw(false);
  };
  return (
    <section className="mt-6">
      <h6>#<span className="font-bold">{props.heading}</span></h6>
  
    <div className="rounded-md">
      <div className="preview-nav pt-3 mr-2">
        <ul className="flex flex-col md:flex-row flex-wrap list-none pl-0 cursor-pointer">
          <li
            onClick={() => resetPreview()}
            className={
              preview
                ? `font-medium rounded-t-3xl px-5 pt-3 pb-1 bg-slate-200 focus:ring`
                : `font-medium rounded px-5 pt-3 pb-1`
            }
          >
            Preview
          </li>
          <li
            onClick={() => resetCode()}
            className={
              code
                ? `font-medium rounded-t-3xl px-5 pt-3 pb-1 bg-slate-500 focus:ring text-white`
                : `font-medium rounded px-5 pt-3 pb-1`
            }
          >
            Code
          </li>
        </ul>
      </div>

      {preview && (
        <div className="preview-section bg-slate-200 rounded-br-2xl rounded-bl-2xl rounded-tr-2xl">
          <div className="component-element p-5">
            {props.preview}
          </div>
        </div>
      )}

      {code && (
        <div className="code-section bg-slate-500 rounded-br-2xl rounded-bl-2xl rounded-t-2xl overflow-x-scroll text-stone-200">
          <div className="component-element p-5">
             {props.code}
          </div>
        </div>
      )}
    </div>
    </section>
  );
};

export default PreviewComponent;
