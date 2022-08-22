import ResizePanel from "react-resize-panel";

export default function Panel() {
  return (
    <div >
      <div
        style={{
          width: "100vw",
          height: "100vh",
          border: "1px solid black",
          display: "flex",
          flexDirection: "row",
          overflow: "hidden"
        }}
      >
        <ResizePanel
          direction="e"
          style={{ backgroundColor: "black", width: "30%" }}
        >
          <div style={{ backgroundColor: "orange", width: "100%" }}>panel</div>
        </ResizePanel>
        <div style={{ backgroundColor: "purple", flexGrow: "1" }}>panel</div>
      </div>
    </div>
  );
}
