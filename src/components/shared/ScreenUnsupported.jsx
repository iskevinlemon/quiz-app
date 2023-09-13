import "../../style/style.css";

export default function ScreenUnsupported() {
  return (
    <div className="screen-unsupported-text text-center">
      Your screen size is <span className="text-danger">not supported </span> 
      to view this content.
      <br/>
      Please enlarge your screen to continue.
    </div>
  );
}
