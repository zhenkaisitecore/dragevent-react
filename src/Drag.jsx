import React from "react";

export const DragDrop = () => {
  return (
    <>
      <h1
        draggable="true"
        onDrag={() => console.log("Draggable 1 onDrag")}
        onClick={() => console.log("Draggable 1 onClick")}
      >
        Draggable 1
      </h1>
      <h1
        draggable="true"
        onDrag={() => console.log("Draggable 2 onDrag")}
        onClick={() => console.log("Draggable 2 onClick")}
      >
        Draggable 2
      </h1>
      <img
        src="https://sb244.sitecoresandbox.cloud/api/public/content/4250a63bbee64674a007da153f39d08d?v=ea3f9464"
        draggable="true"
        width="300"
        height="300"
        onDrag={() => console.log("DraggableImage 1 onDrag")}
        onClick={() => console.log("DraggableImage 1 onClick")}
      ></img>
      <img
        src="https://sb244.sitecoresandbox.cloud/api/public/content/1154831093a54e9aad231e8b84f01514?v=e32bf380"
        draggable="true"
        width="300"
        height="300"
        onDrag={() => console.log("DraggableImage 2 onDrag")}
        onClick={() => console.log("DraggableImage 2 onClick")}
      ></img>
    </>
  );
};
