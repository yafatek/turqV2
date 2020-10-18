import React from "react"

const editorContext = React.createContext();

function Editor({children, ...props }) {
  const [leftWidth, setLeftWidth] = React.useState(null)
  const separatorXPosition = React.useRef(null);
  const splitPaneRef = React.createRef();

  const onMouseDown = e => {
    e.preventDefault()
    separatorXPosition.current = e.clientX;
  };

  const onMouseMove = e => {
    if (!separatorXPosition.current) {
      return;
    }

    const newLeftWidth = leftWidth + e.clientX - separatorXPosition.current;
    separatorXPosition.current = e.clientX;

    if (newLeftWidth <= 500) {
      return leftWidth !== 500 && setLeftWidth(500);
    }

    setLeftWidth(newLeftWidth);
  };

  const onMouseUp = () => {
    separatorXPosition.current = null;
  };

  React.useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseup", onMouseUp);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseup", onMouseUp);
    };
  });


  return (
    <div className="editor-split-pane" ref={splitPaneRef}>
      <editorContext.Provider value={{ leftWidth, setLeftWidth }}>
        {children[0]}
        <div className="editor-separator"  onMouseDown={onMouseDown} />
        {children[1]}
      </editorContext.Provider>
    </div>
  )
}

export function LeftPanel(props) {
  const leftRef = React.createRef();
  const { leftWidth, setLeftWidth } = React.useContext(editorContext);

  React.useEffect(() => {
    if (!leftWidth) {
      setLeftWidth(leftRef.current.clientWidth);
      leftRef.current.style.flex = "none";
      return;
    }

    leftRef.current.style.width = `${leftWidth}px`;
  });

  return <div {...props} className="editor-split-pane-left" ref={leftRef} />
}

export function RightPanel(props) {
  return <div {...props} className="editor-split-pane-right" />
}

export default Editor;