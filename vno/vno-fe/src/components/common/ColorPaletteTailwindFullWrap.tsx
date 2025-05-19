'use client';

import React, { useState } from 'react';

// Danh sách toàn bộ màu và shade phổ biến của Tailwind
const colorNames = [
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
];
const shadeList = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];

export default function ColorPaletteTailwindFullWrap() {
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (cls: string) => {
    navigator.clipboard.writeText(cls);
    setCopied(cls);
    setTimeout(() => setCopied(null), 1000);
  };

  return (
    <div className="p-6">
      <h2 className="font-bold text-lg mb-6">Tailwind Color Palette (Full, Wrap & Click to Copy)</h2>
      <div className="overflow-auto">
        <div className="flex flex-col gap-4 min-w-max">
          {colorNames.map((color) => (
            <div key={color} className="flex items-center gap-2 flex-wrap">
              <div className="w-20 text-right pr-2 font-semibold text-gray-700 capitalize text-xs sm:text-sm">
                {color}
              </div>
              {shadeList.map((shade) => {
                const cls = `bg-${color}-${shade}`;
                return (
                  <div
                    key={cls}
                    className={`${cls} w-8 h-8 sm:w-10 sm:h-10 rounded border border-gray-200 cursor-pointer flex items-center justify-center transition-all hover:scale-110`}
                    title={cls}
                    onClick={() => handleCopy(cls)}
                  >
                    <span className="sr-only">{cls}</span>
                  </div>
                );
              })}
            </div>
          ))}
        </div>
      </div>
      {copied && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded shadow text-base z-50">
          Đã copy: <span className="text-sky-300">{copied}</span>
        </div>
      )}
      <div className="mt-6 text-gray-500 text-sm">* Click vào ô màu để copy tên class Tailwind!</div>
    </div>
  );
}
