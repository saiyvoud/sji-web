import PropTypes from "prop-types";
import { ImFilesEmpty } from "react-icons/im";

// Empty Component
const Empty = ({ size = 50, color = "#003049", message = "no content" }) => {
  return (
    <div className="mt-5 flex h-full w-full flex-col items-center justify-center text-center">
      <ImFilesEmpty style={{ fontSize: `${size}px`, color }} />
      <p className="mt-2 text-gray-600">{message}</p>
    </div>
  );
};
Empty.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
  message: PropTypes.string,
};

export default Empty;
