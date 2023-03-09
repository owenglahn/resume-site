import React from 'react';
import TopSection from '../components/TopSection';
import ResumeSection from '../components/ResumeSection';
import { education, work } from '../dataDef';
import TimeLineItem from '../components/TimeLineItem';
import Section from '../components/Section';

export default function Resume() {
  return (
    <>
      <TopSection name="Resume">
        This is my Resume
      </TopSection>
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
      </Section>
    </>
  )
}
