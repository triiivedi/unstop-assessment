import { ReactNode, useMemo } from "react";

const TextAlign = {
  left: "left",
  right: "right",
  center: "center",
};

/**
 * Modal component styles
 * @param {string} porps.textAlign
 * @param {string} props.title
 * @param {boolean} props.showInlineButtons
 * @param {boolean} props.isMobExternal
 * @param {boolean} props.isMobileRes
 * @returns {object}
 */
export const useStyles = ({
  title,
  isMobExternal,
  isMobileRes,
}: IModalStyles) => {
  const isMobile = isMobExternal ?? isMobileRes;

  let modalMinWidth: string | number = "";
  if (isMobExternal !== undefined) {
    modalMinWidth = isMobExternal ? "100%" : 591;
  } else {
    modalMinWidth = isMobileRes ? "100%" : 591;
  }

  return useMemo(
    () =>
      ({
        backdrop: {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          background: "rgba(0, 0, 0, 0.75)",
          zIndex: 9,
          opacity: 0,
          transition: "all 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        modal: {
          display: "flex",
          flexDirection: "column",
          position: "fixed",
          minWidth: isMobile ? "100%" : 591,
          top: !isMobile ? "50%" : "",
          bottom: isMobile ? "-100%" : "",
          left: isMobile ? 0 : "50%",
          transform: !isMobile ? "translate(-50%, -50%)" : "",
          zIndex: 10,
          opacity: 0,
          transition: "all 350ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
        },
        animation: {
          opacity: 1,
          bottom: isMobile ? 0 : "",
        },
        animationBackdrop: {
          opacity: 1,
        },
        modalContent: {
          borderRadius: isMobile ? 16 : 8,
          borderBottomRightRadius: isMobile ? 0 : 8,
          borderBottomLeftRadius: isMobile ? 0 : 8,
          boxShadow:
            "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
          background: "#ffffff",
          padding: isMobile ? 16 : 32,
        },
        modalWeb: {
          maxWidth: "80%",
        },
        closeBtn: {
          cursor: "pointer",
          display: "flex",
          justifyContent: "flex-end",
        },
        titleWrapper: {
          display: "flex",
          alignItems: "center",
          position: "relative",
          justifyContent: title ? "space-between" : "flex-end",
          padding: 30,
          borderBottom: "1px solid #DADCE0",
        },
        headerWrapper: {
          display: "flex",
          flex: 1,
          alignItems: "center",
        },
        title: {
          fontSize: 20,
          fontWeight: 600,
          color: "#1C4890",
        },
        crossIcon: {
          cursor: "pointer",
        },
        body: {
          fontSize: 14,
          fontWeight: 400,
          flex: 1,
          maxHeight: 800,
          overflowY: "auto",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      } as const),
    [isMobile, title, modalMinWidth]
  );
};

interface IModalStyles {
  showInlineButtons?: boolean;
  textAlign?: string;
  title?: ReactNode;
  isMobExternal?: boolean;
  isMobileRes?: boolean;
}
