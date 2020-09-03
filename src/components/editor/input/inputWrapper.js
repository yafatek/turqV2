import React from "react"

const InputWrapper = ({children, title, hint}) => {

  return (
    <>
      <div className="row">
        <div className="col-12">
          <h3 className="px-2 py-1 editor-title">{title}</h3>
        </div>
      </div>
      {children}
      <div className="editor-hint mb-4 ml-1">{hint}</div>
    </>
  )
}

export default InputWrapper