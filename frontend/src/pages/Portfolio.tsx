import React from 'react'
import Section from '../components/Section';
import PortfolioSection from '../components/PortfolioSection';

export default function Portfolio() {
  return (
    <div id="portfolio" className="h-auto">
      <Section sectionId="Portfolio">
        <PortfolioSection name="ZooKeeper-Coordinated Distributed Computing Application" source="">
          <ProjectDesc>
            Designed master-worker architecture to efficiently distribute tasks to worker nodes
          </ProjectDesc>
          <ProjectDesc>
            Utilize asynchronous callback methods to track availability of workers
          </ProjectDesc>
        </PortfolioSection>
        <PortfolioSection name="Sudoku Generator and Solver" source="">
          <ProjectDesc source="">
            Implemented solving mechanism with backtracking algorithm
          </ProjectDesc>
          <ProjectDesc source="">
            Built UI for puzzle using PyGame module and observer design pattern
          </ProjectDesc>
        </PortfolioSection>
        <PortfolioSection name="Multiplayer Network for Turn Based Video Game" source="">
          <ProjectDesc source="">
            Used multithreading to allow client and server applications to constantly listen for and send data to each other
          </ProjectDesc>
          <ProjectDesc source="">
            Handled manipulation of shared data synchronously when necessary
          </ProjectDesc>
        </PortfolioSection>
        <PortfolioSection name="Go Simple-Shell" source=''>
          <ProjectDesc source=''>
            Designed simple-shell with Golang which implements concurrent execution with go routines
          </ProjectDesc>
        </PortfolioSection>
      </Section>
    </div>
  );
}

function ProjectDesc(props: {children: any, source?: string}) {
  return (
    <a href={props.source} className='p-3'>
      <li>
        {props.children}
      </li>
    </a>
  );
}