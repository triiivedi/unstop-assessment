import { useMemo } from "react";
import { JavascriptModulesPlugin } from "webpack";
import { useBreakpoints } from "../../../hooks";

export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(() => {
    return {
      naContainer: {
        padding: 30,
        backgroundColor: "#F6F8FA",
        border: "1px dashed #DADCE0",
        borderRadius: 12,
        display: "inline-flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        marginRight: isMobile ? 0 : 30,
        marginBottom: isMobile ? 15 : 0,
        cursor: "pointer",
      },
      naAdd: {
        backgroundColor: "#ffffff",
        borderRadius: "50%",
        height: 70,
        width: 70,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      },
      addIcon: {
        width: 40,
        height: 40,
      },
      naText: {
        marginTop: 10,
        fontSize: isMobile ? 14 : 18,
        color: "#1C4980",
        marginBottom: 12,
        fontWeight: isMobile?600:500
      },
      naDescription: {
        fontSize: 12,
        color: "#1C4980",
        maxWidth: isMobile ? "100%" : 328,
      },
    } as const;
  }, [isMobile]);
};
