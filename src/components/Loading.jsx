import { LuLoader } from "react-icons/lu";
import PropTypes from "prop-types";

// Loading Component
const Loading = ({
  fullScreen = true,
  size = 50,
  color = "#003049",
  overlayColor = "rgba(255, 255, 255, 0.75)",
}) => {
  return (
    <div
      className={`${
        fullScreen ? "fixed left-0 top-0 h-screen w-screen" : "h-full w-full"
      } z-50 flex items-center justify-center`}
      style={{ backgroundColor: overlayColor }}
    >
      <LuLoader
        className="animate-spin"
        style={{ fontSize: `${size}px`, color }}
      />
    </div>
  );
};

Loading.propTypes = {
  fullScreen: PropTypes.bool,
  size: PropTypes.number,
  color: PropTypes.string,
  overlayColor: PropTypes.string, // New prop for overlay background color
};

export default Loading;
