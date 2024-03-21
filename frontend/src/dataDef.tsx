/**
 * Resume section
 */
export interface ITimeLineItem {
  date: string;
  location: string;
  title: string;
  content?: JSX.Element;
  gpa?: string;
};

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: ITimeLineItem[] = [
  {
    date: 'September 2019-February 2023',
    location: 'McGill University',
    title: 'Bachelors in Computer Science, Minor in Mathematics',
    content: <p>Received Dean's Honour List award 2020. Completed four-year degree in three and a half years.</p>,
    gpa: "3.7",
  }
];

export const work: ITimeLineItem[] = [
    {
        date: "October 2023-Present", 
        location: "SAP", 
        title: "Cloud Architect & Advisor", 
        content: 
        <ul className="list-disc">
            <li>
                Consulted customers representing some of the worlds biggest enterprise on their business 
                software solution suite and migration to the cloud
            </li>
            <li>
                Designed cloud infrastructure and assembled cloud enterprise resource planning solutions 
                for customers with highly complex needs in critical and dynamic industries
            </li>
        </ul>
    },
    {
        date: "May 2022-August 2022", 
        location: "Ubisoft Montréal", 
        title: "Online Programmer Intern", 
        content: 
        <ul className="list-disc">
            <li>
                Built and deployed a standardized java library for sending monitoring metrics to Datadog using
                both API calls and UDP communication with a Datadog agent
            </li>
            <li>
                Integrated that library into critical topology-monitoring services
            </li>
            <li>
                Wrote, and deployed to AWS Lambda, an application to monitor AWS Health events and send
                notifications to Slack
            </li>
            <li>
                Made topic creation in Kafka internal tool less restrictive by creating new and refactoring old API
                endpoints, and updating Angular UI to allow for the usage of the updated API
            </li>
        </ul>, 
    }, 
    {
        date: "June 2019-August 2020", 
        location: "Cornell University", 
        title: "Research Assistant", 
        content: 
        <ul className="list-disc">
            <li>
                Setup data collection pipeline for machine learning systems
            </li>
            <li>
                Operated state-of-the-art hyperspectral imaging systems in both Cornell and federal labs
            </li>
            <li>
                Discussed image processing and machine learning with Cornell CS collaborators
            </li>
        </ul>
    }
];

export const softSkills: string[] = [
    'Oral and written communication', 
    'Self-instruction',
    'SCRUM/KanBan',
    'Writing Documentation',
    'Agile development',
];

export const hardSkills: string[] = [
    'Git',
    'Linux/Unix', 
    'CI/CD', 
    'Terraform', 
    'AWS', 
    'Distributed Algorithms/Systems', 
    'Robotics (ROS)', 
    'API Design/Usage', 
    'Maven', 
    'Frontend Development (Angular, React)', 
    'Docker', 
    'MongoDB', 
    'Algorithms/Data Structures', 
    'Apache Kafka'
];