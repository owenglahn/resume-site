/**
 * Resume section
 */
export interface ITimeLineItem {
  date: string;
  location: string;
  title: string;
  content: JSX.Element;
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
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
    gpa: "3.7",
  }
];

export const work: ITimeLineItem[] = [
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

            </li>
        </ul>
    }
];
