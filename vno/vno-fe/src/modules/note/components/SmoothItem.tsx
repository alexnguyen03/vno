'use client';
import { motion } from 'motion/react';
import { NoteOverview } from '../types/noteType';
import { useState } from 'react';

// export const NoteList: React.FC<{ notes: NoteOverview[]; isLoading: boolean }> = ({ notes, isLoading }) =>
export const SmoothItem: React.FC<{ note: NoteOverview; onClick?: (note: NoteOverview) => void }> = ({
  note,
  onClick,
}) =>
  // export const SmoothItem:  React.FC<{ note: NoteOverview;  }> = ({ note }) =>
  {
    var [color, setColor] = useState<string>(note.color);
    return (
      <motion.div
        layoutId={`workItem-${note.title}`}
        key={note.mainContent}
        className="group border-light-200 bg-light-50 dark:border-dark-200 dark:bg-dark-50 flex w-full cursor-pointer flex-row items-center gap-4 border p-2 shadow-xs md:p-4"
        onClick={() => onClick?.(note)}
        style={{ borderRadius: 8 }}
      >
        <motion.div layoutId={`workItemLogo-${note.mainContent}`}>{note.isPinned} </motion.div>
        <div className="flex w-full flex-col items-start justify-between gap-0.5">
          <motion.div
            className="text-light-950 dark:text-dark-950 font-medium"
            layoutId={`workItemmainContent-${note.mainContent}`}
          >
            {note.mainContent}
          </motion.div>
          <motion.div
            className="text-light-900 dark:text-dark-900 text-xs"
            layoutId={`workItemTitle-${note.mainContent}`}
          >
            {note.title} / {note.createdAt.toString()}
            <p style={{ backgroundColor: `${color}` }} className={`${color}`}>
              {' '}
              {note.color}
            </p>
          </motion.div>
        </div>
      </motion.div>
    );
  };
