import PropTypes from "prop-types";

// Reusable Skeleton Component
const Skeleton = ({ type = "card", count = 6 }) => {
  const renderSkeletonItem = () => {
    switch (type) {
      case "card":
        return (
          <div className="flex animate-pulse gap-4">
            {/* Thumbnail */}
            <div className="h-20 w-20 rounded-md bg-gray-300" />
            <div className="flex-1 space-y-2">
              {/* Title */}
              <div className="h-6 w-3/4 rounded-md bg-gray-300" />
              {/* Text */}
              <div className="h-4 w-full rounded-md bg-gray-300" />
              <div className="h-4 w-5/6 rounded-md bg-gray-300" />
            </div>
          </div>
        );

      case "list":
        return (
          <div className="animate-pulse space-y-2">
            {/* List Item */}
            <div className="h-8 w-full rounded-md bg-gray-300" />
            <div className="h-8 w-full rounded-md bg-gray-300" />
            <div className="h-8 w-full rounded-md bg-gray-300" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-4 p-4 pt-[80px]">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index}>{renderSkeletonItem()}</div>
      ))}
    </div>
  );
};
Skeleton.propTypes = {
  type: PropTypes.string,
  count: PropTypes.number,
};

export default Skeleton;
