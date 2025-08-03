
import React from 'react';// import kiểu Delta nếu bạn định nghĩa riêng
import { QuillDeltaToHtmlConverter } from 'quill-delta-to-html';
import { Delta } from '../../types/noteType';

interface DeltaPreviewProps {
  delta: Delta;
}

const DeltaPreview: React.FC<DeltaPreviewProps> = ({ delta }) => {
  // Chuyển Delta sang HTML
  const converter = new QuillDeltaToHtmlConverter(delta.ops, {});
  const html = converter.convert();

  return (
    <div
      className="delta-preview w-[200]"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export default DeltaPreview;
