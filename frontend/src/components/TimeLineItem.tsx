import {FC, memo} from 'react';

import {ITimeLineItem} from '../dataDef';

const TimelineItem: FC<{item: ITimeLineItem}> = memo(({item}) => {
  const {title, date, location, content, gpa} = item;
  let gpaSection;
  if (gpa) {
    gpaSection = ( 
          <>
            <span>•</span>
            <span className="flex-1 text-sm sm:flex-none">GPA: {gpa}</span>
          </>
        );
  } else {
    gpaSection = <></>;
  }
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
          {gpaSection}
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
