import { useMemo } from "react";

export const useStyles = () => {
  return useMemo(() => {
    return {
      hContainer: {
        background: "white",
        height: 70,
        padding: "4px 20px 4px 20px",
        display: "flex",
        alignItems: "center",
        borderBottom: "0.5px solid #DADCE0",
        justifyContent: "space-between",
        marginBottom: 20
      },
      hHeading: {
        fontSize: 20,
        fontWeight: 600,
        color: '#1C4980'
      },
      hSubHeading: {
        fontSize: 14,
        color: "#0073E6",
        fontWeight: 600
      },
      hSubHeadingContainer:{

      },
      tabContainer: {
        display: "flex",
        alignItems: "center",
      },
      separator: {
        height: 46,
        margin: "0 16px",
        border: "0.5px solid #DADCE0",
      },
    } as const;
  }, []);
};
