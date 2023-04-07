import {FC, memo, PropsWithChildren} from 'react';

const SubSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
  <div className="grid grid-cols-1 gap-y-4 py-8 first:pt-0 last:pb-0  md:grid-cols-4">
      <div className="col-span-1 flex justify-center md:justify-start">
        <div className="relative h-max">
          <h2 className="text-xl font-bold uppercase text-teal-200">{title}</h2>
          <span className="absolute inset-x-0 -bottom-1 border-b-2 border-green-800" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3 text-teal-200">{children}</div>
    </div>
  );
});

SubSection.displayName = 'SubSection';
export default SubSection;