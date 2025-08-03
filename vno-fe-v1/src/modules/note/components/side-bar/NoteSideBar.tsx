'ues client';

import NotePinned from './NotePinned';
import NoteSideBarFilter from './NoteSideBarFilter';

export const NoteSideBar = () => {
  return (
    <div className="relative">
      <NoteSideBarFilter />
      <NotePinned />
    </div>
  );
};

export default NoteSideBar;
