// import * as motion from 'motion/react-client';

// export default function ZoomDialog({ isOpen, children }) {
//   return (
//     <motion.div
//       className="bg-orange-100"
//       initial={{ scale: 0.8 }}
//       animate={{ scale: isOpen ? 1 : 0.8 }}
//       transition={{ duration: 0.3 }}
//       style={{
//         borderRadius: 12,
//         position: 'fixed',
//         left: '50%',
//         top: '50%',
//         transform: 'translate(-50%, -50%)', // Đặt ở giữa màn hình
//         zIndex: 1000,
//         minWidth: 320,
//         minHeight: 200,
//         // boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// }

import * as motion from 'motion/react-client';
import React, { useEffect, useRef, useState } from 'react';

export default function ZoomDialog({ isOpen, originRect, children, onClose }) {
  // originRect: DOMRect của card (left, top, width, height)
  const [show, setShow] = useState(isOpen);

  // Khi đóng: animate ngược rồi mới ẩn
  useEffect(() => {
    if (isOpen) setShow(true);
    else {
      // Đợi hết animation rồi mới ẩn
      const timeout = setTimeout(() => setShow(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!show) return null;

  // Style khi chưa mở (ở vị trí card)
  const cardStyle = originRect
    ? {
        position: 'fixed',
        left: originRect.left,
        top: originRect.top,
        width: originRect.width,
        height: originRect.height,
        borderRadius: 8,
        zIndex: 1000,
      }
    : {};

  // Style khi mở (ở giữa màn hình)
  const modalStyle = {
    position: 'fixed',
    left: '50%',
    top: '50%',
    width: 400,
    height: 300,
    borderRadius: 16,
    zIndex: 1000,
    transform: 'translate(-50%, -50%)',
  };

  // Chọn style theo trạng thái
  const style = isOpen ? modalStyle : cardStyle;

  return (
    <motion.div
      initial={{ scale: 0.8 }}
      animate={{ zoom: isOpen ? 1 : 0.8 }}
      transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
      style={{
        background: '#fff',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        // overflow: 'hidden',
        // ...style,
        transform: 'translate(-50%, -50%)',
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: 'absolute',
          right: 16,
          top: 16,
          zIndex: 1,
          background: '#eee',
          border: 'none',
          borderRadius: 8,
          padding: '4px 12px',
          cursor: 'pointer',
        }}
      >
        Đóng
      </button>
      <div style={{ padding: 32 }}>{children}</div>
    </motion.div>
  );
}
