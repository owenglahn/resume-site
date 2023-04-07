import classNames from 'classnames';
import {FC, memo} from 'react';

const Section: FC<{sectionId: string; sectionTitle?: string; noPadding?: boolean; className?: 
    string; children?: any}> = memo(
  ({children, sectionId, noPadding = false, className}) => {
    return (
      <section className={`bg-black ${classNames(className, {'px-4 py-16 md:py-24 lg:px-8': !noPadding})}`} id={sectionId}>
        <div className="flex justify-center mb-20">
            <h1 className="text-4xl font-bold uppercase text-teal-200 
                -bottom-1 border-b-2 border-green-800">{sectionId.toUpperCase()}</h1>
        </div>
        <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
      </section>
    );
  },
);

Section.displayName = 'Section';
export default Section;
