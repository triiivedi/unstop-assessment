
import { useBreakpoints } from "../../hooks";
import { useMemo } from 'react'

/**
 * styles for assessment form
 * @returns object
 */
export const useStyles = () => {

  const { isMobile } = useBreakpoints()

  return useMemo(() => {
    return {
      afContainer: {
        display: "flex",
        flexDirection: "column",
      },
      afhContainer: {
        padding: isMobile ? 10 : 30,
        borderBottom: "1px solid #DADCE0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      },
      afHeading: {
        fontSize: 20,
        fontWeight: 600,
        color: "#1C4890",
      },
      afLabel: {
        fontSize: isMobile ? 12 : 16,
        fontWeight: 500,
        color: "#1C4980",
        marginBottom: 10,
      },
      afInputContainer: {
        display: "flex",
        flexDirection: "column",
        padding: "20px 30px",
        marginBottom: 80
      },
      input: {
        padding: isMobile ? 12 : 15,
        marginBottom: 20,
        borderRadius: 8,
        border: "1px solid #DADCE0",
      },
      afbtnContainer: {
        boxShadow: "0px -4px 50px 0px rgba(0, 0, 0, 0.09)",
        padding: "20px 30px",
        position: 'fixed',
        bottom: 0,
        width: '-webkit-fill-available',
        background: '#ffffff'
      },
      afButton: {
        marginTop: 20,
        padding: "10px 30px",
        backgroundColor: "#0073E6",
        borderRadius: 8,
        border: "none",
        width: "100%",
        "&:hover": {
          cursor: "pointer",
        },
      },
      afButtonText: {
        fontSize: 14,
        fontWeight: 600,
        color: "#ffffff",
      },
      afBadgeContainer: {
        padding: 16,
        display: 'flex',
        flexWrap: 'wrap',
        border: '1px solid #DDE5EF',
        borderRadius: '8px 8px 0px 0px'
      },
      afBadge:
      {
        borderRadius: 22,
        padding: '8px 10px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#DDEDFF',
        marginBottom: 10,
        marginRight: 1
      },
      afBadgeText: {
        fontSize: 12,
        color: '#1C4980'
      },
      afBadgeIcon: {
        width: 18,
        height: 18,
        marginLeft: 2
      }
    } as const;
  }, [isMobile])

};
