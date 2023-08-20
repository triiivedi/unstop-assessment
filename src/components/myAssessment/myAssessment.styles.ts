import { useMemo } from "react";
import { useBreakpoints } from "../../hooks";

export const useStyles = () => {
  const { isMobile } = useBreakpoints();
  return useMemo(() => {
    return {
      maHeading: {
        fontSize: isMobile ? 16 : 18,
        fontWeight: isMobile ? 600 : 500,
        marginTop: isMobile ? 20 : 40,
        marginBottom: 16,
        color: "#1C4890",
      },
      maMobileContainer: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: 10,
      },
      maIconsContainer: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
      },
      maCardContainer: {
        display: isMobile?'block':"flex",
        alignItems: "cenetr",
      },
      icon: {
        width: 24,
        height: 24,
        padding: 4,
        marginLeft: 16,
      },
    } as const;
  }, [isMobile]);
};
