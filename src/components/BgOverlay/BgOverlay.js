import "./BgOverlay.css";

const BgOverlay = () => {
  return (
    <div style={{ width: "100%", height: "100%", position: "relative" }}>
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0,0,0,0.7)",
          position: "absolute",
          top: 0,
          left: 0,
        }}
      ></div>

      <div
        className="overlay"
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.5)",
        }}
      />
    </div>
  );
};

export default BgOverlay;
