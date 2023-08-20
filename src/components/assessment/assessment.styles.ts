import { useMemo } from "react";
import { useBreakpoints } from "../../hooks";

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(() => {
    return {
      container: {
        width: isMobile ? "100%" : "87%",
        background: "#ffffff",
        height: "100%",
        borderRadius: 12,
      },
      wrapper: {
        padding: "0 20px 20px",
      },
    };
  }, [isMobile]);
};
