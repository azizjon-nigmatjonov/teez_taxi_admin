import { OneSkeleton } from "./OneSkeleton";

export const ListSkeleton = ({
  rounded = 12,
  count = 4,
  height = 150,
  direction = "col",
}: {
  rounded?: number;
  count?: number;
  height?: number;
  direction?: string;
}) => {
  if (direction === "row") {
    return (
      <div className={`flex flex-col gap-y-5`}>
        {Array.from(new Array(count)).map((i) => (
          <OneSkeleton key={i} height={height} rounded={rounded} />
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-${count} gap-x-5`}>
      {Array.from(new Array(count)).map((i) => (
        <OneSkeleton key={i} height={height} rounded={rounded} />
      ))}
    </div>
  );
};
