import React, { memo } from "react";

import { Handle } from "react-flow-renderer";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

export default memo(({ data }) => {
  return (
    <>
      <Handle
        type="target"
        position="top"
        style={{ background: "#555", zIndex: "10" }}
        onConnect={(params) => console.log("handle onConnect", params)}
      />
      <div
        style={{
          padding: "10px",
          border: "solid 1px #ddd",
          background: `${data.background}`,
          borderRadius: `${data.radius}px`,
        }}
      >
        <p style={{ textAlign: "center" }}>{data.textarea}</p>
        <img
          src={data.source}
          style={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            marginLeft: "100px",
          }}
          alt="i"
        />
        <SyntaxHighlighter
          wrapLines={true}
          showLineNumbers={true}
          language="javascript"
          style={docco}
        >
          {data.code}
        </SyntaxHighlighter>{" "}
      </div>
      <Handle type="source" position="bottom" style={{ background: "#555" }} />
    </>
  );
});
