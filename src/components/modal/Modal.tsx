import React, { useMemo } from "react";
import ReactDOM from "react-dom";
import { useStyles } from "./modal.styles";
import { useModalV3 } from "./useModal";
import { useBreakpoints } from "../../hooks";
import svgs from "../../assets/svgs";

/**
 * Component to render the Modal Content
 * @param {boolean} props.open
 * @param {Function} props.onClose
 * @param {IModalCustomStyles} props.customStyles (optional)
 * @param {string | React.ReactNode} props.title (optional)
 * @param {string | React.ReactNode} props.body (optional)
 * @param {boolean} props.showClose
 * @param {string | React.ReactNode} props.icon (optional)
 * @param {string} props.testId
 * @param {boolean} props.backdrop (optional)
 * @param {number} props.autoCloseTime (optional)
 * @returns {JSX.Element}
 */
const ModalComp = (props: IModal): JSX.Element => {
  const {
    open,
    onClose,
    title,
    body,
    showClose,
    disableOutsideClick,
    testId,
    backdrop,
    zIndexBackdrop,
    zIndexOverlay,
    customStyles,
    isMobile: isMobExternal,
  } = props;

  const { isMobile: isMobileRes } = useBreakpoints();
  const isMobile = isMobExternal ?? isMobileRes;

  const styles = useStyles({
    title,
    isMobExternal,
    isMobileRes,
  });

  //Calling custom hook for ModalV3
  const { modalRef, setAnimate, animate } = useModalV3(
    onClose,
    open,
  );

  // initially value of isMobile is undefined hence it returns null until isMobile figure outs value either "true" or "false"
  if (isMobile === undefined) return <></>;
  return (
    <>
      {open && (
        <>
          <div
            css={[
              open ? (backdrop ? styles.backdrop : null) : null,
              animate && styles.animationBackdrop,
              zIndexBackdrop ? { zIndex: zIndexBackdrop } : null,
              customStyles?.backdrop,
            ]}
            data-testid={`${testId}-backdrop`}
          />
          {
            <div
              css={[
                styles.modal,
                animate && styles.animation,
                !isMobile && styles.modalWeb,
                customStyles?.modal,
                zIndexOverlay ? { zIndex: zIndexOverlay } : null,
              ]}
              data-testid={`${testId}-fade-transition`}
            >
              <div
                ref={modalRef}
                css={[styles.modalContent, customStyles?.modalContent]}
                data-testid={`${testId}-modal`}
                tabIndex={0}
                role="button"
              >
                {(title || showClose) && (
                  <div css={styles.titleWrapper}>
                    {title && (
                      <div css={styles.headerWrapper}>
                        <h4
                          css={[styles.title, customStyles?.title]}
                          data-testid={`${testId}-title`}
                        >
                          {title}
                        </h4>
                      </div>
                    )}
                    {showClose && (
                      <img
                        css={styles.crossIcon}
                        onClick={() => {
                          setAnimate(false);
                        }}
                        src={svgs.cross}
                      />
                    )}
                  </div>
                )}
                {body && (
                  <div
                    css={[styles.body, customStyles?.body]}
                    data-testid={`${testId}-body`}
                  >
                    {body}
                  </div>
                )}
              </div>
            </div>
          }
        </>
      )}
    </>
  );
};

/**
 * Component to render Modal
 * @param {IModalV3} props
 * @returns {JSX.Element}
 */
const Modal = (props: IModal): JSX.Element => {
  const target = useMemo(() => document.getElementById("modal"), []);

  return (
    <>
      {target &&
        ReactDOM.createPortal(
          <ModalComp {...props} />,
          document.getElementById("modal") as any
        )}
      {!target && <ModalComp {...props} />}
    </>
  );
};

type TextAlign = "left" | "center" | "right";
type Size = "xs" | "s" | "m" | "l" | "xl" | "xxl" | "xxxl";

/**
 * Interface for modal component props
 */
interface IModal {
  open: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  body?: string | React.ReactNode;
  showClose: boolean;
  disableOutsideClick?: boolean;
  testId?: string;
  backdrop?: boolean;
  allowAutoClose?: boolean;
  autoCloseTime?: number;
  zIndexBackdrop?: number;
  zIndexOverlay?: number;
  textAlign?: TextAlign;
  showInlineButtons?: boolean;
  footerTitle?: string;
  isPrimaryDisabled?: boolean;
  isSecondaryDisabled?: boolean;
  customStyles?: IModalCustomStyles;
  isMobile?: boolean;
}

/**
 * Interface for Modal customStyles
 */
interface IModalCustomStyles {
  backdrop?: ICustomStyles;
  modal?: ICustomStyles;
  modalContent?: ICustomStyles;
  title?: ICustomStyles;
  closeBtn?: ICustomStyles;
  body?: ICustomStyles;
  primaryBtnCustomStyles?: ICustomStyles;
  secondaryBtnCustomStyles?: ICustomStyles;
  footerText?: ICustomStyles;
}

/**
 * Default props for modal component
 */
ModalComp.defaultProps = {
  showClose: true,
  disableOutsideClick: false,
  testId: "modal",
  backdrop: true,
};

export default Modal;