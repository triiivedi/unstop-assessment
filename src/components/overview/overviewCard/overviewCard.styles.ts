import { useBreakpoints } from "../../../hooks";
import { useMemo } from "react";

/**
 * styles for overview cards
 * @returns object
 */
export const useStyles = () => {

  const {isMobile} = useBreakpoints()

  return useMemo(()=>{
    return {
      ocContainer: {
        padding: isMobile?"10px 14px":"16px 20px",
      },
      ocHeading: {
        fontSize: 14,
        fontWeight: 600,
        marginBottom: 16,
        color: "#1C4980",
      },
      ocData: {
        fontSize: 20,
        fontWeight: 700,
      },
      ocWrapper: {
        display: "flex",
        alignItems: "center",
      },
      icon: {
        marginRight: 20,
      },
      itemWrapper: {
        "&:last-child": { border: "none" },
        display: "flex",
      },
      separator: {
        border: "0.5px solid #DADCE0",
        margin: "0 20px",
        "&:last-child": {
          border: "none",
        },
        "&:nth-child(2)":{
          border: 'none'
        }
      },
    };
  },[isMobile])

};