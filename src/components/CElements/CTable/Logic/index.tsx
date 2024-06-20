import { useEffect } from "react";

interface Props {
  tableRef: any;
  draggingRef: any;
  collapsed: boolean;
  scrollPosition: number;
  setScrollPosition: (val: number) => void;
  setButtonPosition: (val: number) => void;
  setShowScroll: (val: boolean) => void;
}

export const TableData = ({
  tableRef,
  scrollPosition,
  draggingRef,
  collapsed,
  setScrollPosition,
  setButtonPosition,
  setShowScroll,
}: Props) => {
  useEffect(() => {
    if (tableRef.current) {
      tableRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const handleMouseDown = () => {
    draggingRef.current = true;
  };

  const handleMouseMove = (e: MouseEvent) => {
    const position = collapsed ? 105 : 360;

    if (draggingRef.current) {
      let newButtonPosition = e.clientX - position;
      if (newButtonPosition < 0) {
        newButtonPosition = 10;
      }
      if (newButtonPosition + position > tableRef.current.offsetWidth) {
        newButtonPosition = newButtonPosition;
      }
      setScrollPosition(newButtonPosition);
      setButtonPosition(newButtonPosition);
    }
  };

  // Handle mouse up event
  const handleMouseUp = () => {
    if (draggingRef.current) {
      // setScrollPosition(buttonPosition); // Update scroll position based on button position
      draggingRef.current = false;
    }
  };

  useEffect(() => {
    // Add event listeners for mouse move and mouse up
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  }, [collapsed]);

  useEffect(() => {
    const checkOverflow = () => {
      setShowScroll(true)
      if (tableRef.current && tableRef.current) {

        // setShowScroll(
        //   tableRef.current.scrollWidth > tableRef.current.clientWidth
        // );
      }
    };
    checkOverflow();
  }, []);

  return { handleMouseDown };
};
