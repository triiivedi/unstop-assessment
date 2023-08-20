import { useMemo } from "react";
import { useBreakpoints } from "../../hooks";

export const useStyles = () => {
  const { isMobile } = useBreakpoints();

  return useMemo(() => {
    return {
      lnContainer: {
        width: isMobile ? "100%" : "",
        listStyle: "none",
        padding: isMobile ? "40px 20px" : "16px 20px 20px 20px",
        height: "100vh",
        background: "#ffffff",
      },
      navItemText: {
        fontSize: isMobile ? 14 : 12,
        marginTop: isMobile ? 0 : 6,
        marginLeft: isMobile ? 8 : 0,
        color: "#1C4980",
      },
      navItem: {
        display: "flex",
        alignItems: "center",
        flexDirection: isMobile ? "row" : "column",
        marginBottom: 10,
      },
      navSelectedItem: {
        background: "#E5F1FC",
        padding: 10,
        border: "1px solid #0073E6",
        borderRadius: 8,
      },
      navContainer: {
        padding: "10px 0",
      },
      adNav: {
        borderTop: "1px dashed #BACBD5",
        margin: "16px 0",
        display: "flex",
        flexDirection: isMobile ? "row" : "column",
        alignItems: "center",
        justifyContent: isMobile ? "space-between" : "center",
        padding: "10px 0",
      },
      adminBadge: {
        padding: "6px 8px",
        borderRadius: 22,
        border: "1px solid #D63500",
        display: "inline-flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        marginBottom: 16,
        background: "#FBEBEA",
      },
      adminText: {
        fontSize: 10,
        fontWeight: 500,
        color: "#D63500",
      },
    } as const;
  }, [isMobile]);
};
