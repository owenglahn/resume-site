import React from 'react';
import { education, work, softSkills, hardSkills } from '../dataDef';
import TimeLineItem from '../components/TimeLineItem';
import Section from '../components/Section';
import ResumeSection from '../components/ResumeSection';

export default function Resume() {
  return (
    <div id="resume">
      <Section sectionId={'resume'}>
        <ResumeSection title="Education">
          {education.map((item) => 
            <TimeLineItem item={item}/>
          )}
        </ResumeSection>
        <ResumeSection title="Work">
          {work.map((item) => 
            <TimeLineItem item={item}/>
          )}
        </ResumeSection>
        <ResumeSection title="Soft Skills">
          <div className="flex flex-wrap items-center justify-center mt-10 gap-x-2 md:justify-start">
            {softSkills.slice(0, softSkills.length - 1).map((skill) =>
              <>
                <span className="flex-1 text-md font-medium sm:flex-none">{skill}</span>
                <span>•</span>
              </>
            )}
            <span className="flex-1 text-md font-medium sm:flex-none">{softSkills[softSkills.length - 1]}</span>
          </div>
        </ResumeSection>
        <ResumeSection title="Hard Skills">
          <div className="flex flex-wrap items-center justify-center mt-10 gap-x-2 md:justify-start">
            {hardSkills.slice(0, hardSkills.length - 1).map((skill) =>
              <>
                <span className="flex-1 text-md font-medium sm:flex-none">{skill}</span>
                <span>•</span>
              </>
            )}
            <span className="flex-1 text-md font-medium sm:flex-none">{hardSkills[hardSkills.length - 1]}</span>
          </div>
        </ResumeSection>
      </Section>
    </div>
  )
}
