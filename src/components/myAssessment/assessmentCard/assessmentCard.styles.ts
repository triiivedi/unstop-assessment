import { useMemo } from "react";
import { useBreakpoints } from "../../../hooks";
export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(() => {
    return {
      acContainer: {
        padding: isMobile ? 14 : 16,
        display: isMobile ? "flex" : "inline-flex",
        border: "1px solid #DADCE0",
        borderRadius: 12,
        flexDirection: "column",
        width: !isMobile ? 388 : "",
        marginRight: isMobile ? 0 : 30,
        marginBottom: isMobile ? 15 : 0,
        "&:last-child": {
          marginRight: 0,
        },
      },
      acHeader: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "ceneter",
      },
      sectionOne: {
        borderBottom: "1px dashed #DADCE0",
      },
      sectionTwo: {
        marginTop: 16,
        display: "flex",
        justifyContent: "space-between",
      },
      acDetailsMobile: {
        display: "flex",
      },
      acIcon: {
        marginRight: isMobile ? 10 : 0,
      },
      acTitle: {
        fontSize: isMobile ? 16 : 18,
        fontWeight: isMobile ? 600 : 500,
        color: "#1C4980",
        marginTop: 10,
      },
      acDescription: {
        fontSize: isMobile ? 12 : 14,
        fontWeight: isMobile ? 500 : 600,
        color: "#1C4980",
      },
      separator: {
        margin: "0 10px",
        border: "1px solid #DADCE0",
        height: 16,
      },
      acDate: {
        fontSize: 12,
        fontWeight: 500,
        color: "#8DA4BF",
        marginLeft: 6
      },
      acCount: {
        fontSize: 14,
        fontWeight: 600,
        color: "#1C4980",
      },
      acQnDtitle: {
        fontSize: 12,
        fontWeight: 500,
        color: "#1C4980",
      },
      acDuration: {
        marginRight: 14,
      },
      acQnD: {
        display: "flex",
      },
      acButton: {
        border: "1px solid #1C4980",
        borderRadius: 50,
        padding: "2px 8px 2px 6px",
        display: "flex",
        alignItems: "center",
        background: "#ffffff",
        marginRight: 10
      },
      acButtonText: {
        fontSize: 14,
        fontWeight: 500,
        color: "#1C4890",
      },
    } as const;
  }, [isMobile]);
};
