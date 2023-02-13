import ReactDOM from "react-dom/client";
import { DragDrop } from "./Drag";

export default function createExternalRoot(rootElement) {
  // initialization code can be moved outside or render function
  const element = <DragDrop />
  return {
    render(props) {
      const root = ReactDOM.createRoot(rootElement);
      root.render(element);
    },
    unmount() {
      ReactDOM.unmountComponentAtNode(container);
    },
  };
}
