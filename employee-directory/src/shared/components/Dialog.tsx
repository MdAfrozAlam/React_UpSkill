import { useEffect, useId, useRef, type ReactNode } from 'react';
import { createPortal } from 'react-dom';

type DialogProps = {
  open: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
};

export function Dialog({ open, title, onClose, children }: DialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId(); // unique id for aria-labelledby
  useEffect(() => {
    if (!open) return;
    // 1. remember who had focus (the "View" button)
    const previous = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    // 2. move focus into the dialog
    closeRef.current?.focus();
    // 3. Esc closes
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    document.addEventListener('keydown', onKey);
    // 4. cleanup: remove listener + give focus back
    return () => {
      document.removeEventListener('keydown', onKey);
      previous?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return createPortal(
    <div className="backdrop" onClick={onClose}>
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="dialog"
        onClick={(e) => e.stopPropagation()} // clicks inside don't close
      >
        <h2 id={titleId}>{title}</h2>
        {children}
        <button ref={closeRef} type="button" onClick={onClose}>
          Close
        </button>
      </div>
    </div>,
    document.body,
  );
}
