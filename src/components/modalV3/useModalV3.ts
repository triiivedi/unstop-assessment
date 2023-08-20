import { useCallback, useEffect, useRef, useState } from 'react';

const ANIMATION_DURATION = 300;
const ANIMATION_START_DELAY = 50;
/**
 * Custom hook for Modal
 * @param {boolean} props.open
 * @param {Function} props.onClose
 */
export const useModalV3 = (
  onClose: () => void,
  open?: boolean,
) => {
  const [isOpen, setIsOpen] = useState(false);
  const [animate, setAnimate] = useState(false);
  const [timeoutId, setTimeoutId] = useState({ id1: 0, id2: 0 });
  const modalRef = useRef<HTMLDivElement>(null);
  const timer = useRef<any>();

  /**
   * useEffect to first mount and the component and then applying animation styles on it
   */
  useEffect(() => {
    if (open) {
      setIsOpen(true);
      const id = setTimeout(() => {
        setAnimate(true);
      }, ANIMATION_START_DELAY);
      setTimeoutId({ ...timeoutId, id1: Number(id) });
    }
    return () => {
      if (timeoutId?.id1) {
        clearTimeout(timeoutId?.id1);
      }
    };
  }, [open]);

  /**
   * useEffect to handle animation and unmount the component
   */
  useEffect(() => {
    if (!animate) {
      const id = setTimeout(() => {
        if (isOpen) {
          setIsOpen(false);
          onClose();
        }
      }, ANIMATION_DURATION);
      setTimeoutId({ ...timeoutId, id2: Number(id) });
    }
    return () => {
      if (timeoutId?.id2) {
        clearTimeout(timeoutId?.id2);
      }
    };
  }, [animate]);

  /**
   * Method tp close the modal if clicked outside it
   * @param {MouseEvent} props.event
   * @returns {void}
   */
  const handleClickOutside = useCallback(
    (event: MouseEvent): void => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setAnimate(false);
      }
    },
    [modalRef]
  );

  /**
   * useEffect for adding the event listener based on condition
   */
  useEffect(() => {
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [open, modalRef, handleClickOutside]);

  /**
   * Method to reset position and overflow when modal is closed
   * @returns {void}
   */
  const reset = (): void => {
    document.body.style.overflowY = 'auto';
    document.body.style.position = 'static';
    document.body.style.right = 'auto';
    document.body.style.left = 'auto';
  };

  /**
   * useEffect for handling modal background screen scroll & focus on Modal
   */
  useEffect(() => {
    if (open) {
      modalRef.current?.focus();
      if (document.body.scrollHeight > document.documentElement.clientHeight) {
        document.body.style.position = 'fixed';
        document.body.style.overflowY = 'scroll';
        document.body.style.right = '0';
        document.body.style.left = '0';
      }
    } else {
      modalRef.current?.blur();
      reset();
    }
  }, [open]);

  /**
   * useEffect to call reset method when modal is unmounted
   */
  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  return {
    modalRef,
    timer,
    setAnimate,
    animate,
  };
};
