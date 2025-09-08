import { XCircleIcon } from "@heroicons/react/24/outline";

export default function Modal({ title, open, onOpen, children }) {
  if (!open) return null;
  return (
    <>
      <div onClick={() => onOpen(false)} className="modal__backdrop">
        <div className="modal" onClick={(e) => e.stopPropagation()}>
          <div className="modal__header">
            <h3 className="modal__title">{title}</h3>
            <button onClick={() => onOpen(false)}>
              <XCircleIcon className="modal__close" />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
