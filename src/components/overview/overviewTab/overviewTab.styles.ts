import { useMemo } from "react";
import { useBreakpoints } from "../../../hooks";

export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(() => {
    const commonStyles = {
      fontStyles: {
        fontSize: 14,
        fontWeight: 600,
      },
      textContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "10px 0",
      },
    };
    return {
      otContainer: {
        display: "flex",
        height: 50,
        justifyContent: "space-around",
        margin: isMobile?'0 -20px':''
      },
      otSelected: {
        ...commonStyles.textContainer,
        borderBottom: "2px solid #0073E6",
      },
      otDeafult: {
        ...commonStyles.textContainer,
        borderBottom: "2px solid #F6F8FA",
      },
      otSelectedText: {
        ...commonStyles.fontStyles,
        color: "#0073E6",
      },
      otText: {
        ...commonStyles.fontStyles,
        color: "#3E6493",
      },
    };
  }, [isMobile]);
};
