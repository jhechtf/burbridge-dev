export interface WorkHistory {
    startDate: string | Date;
    endDate?: string | Date;
    company: string;
    website: string;
    summary: string;
    highlights: string[];
    position: string;
}

export default [
    {
        startDate: '2019-06-10',
        position: 'Senior Front-End Engineer',
        company: 'Apkudo, inc.',
        website: 'https://apkudo.com',
        summary: 'Improving UI for current clients, as well as assisting in UI design and development for a unified platform.',
        highlights: [
            'Assisted onboarding of new front-end developers, including local repository setup and work assignments.',
        ]
    },
    {
        startDate: '2017-06-12',
        endDate: '2019-01-24',
        position: 'Senior Web Developer',
        company: 'LQ Digital',
        website: 'https://lqdigital.com',
        summary: 'Designed and delivered multiple pages over multiple clients to attract stronger customers for our clients.',
        highlights: [
            'Responsible for planning and implementation of AWS infrastructure for properties moving from other hosting providers.',
            'Brought mobile load time down to approximately 3 seconds (from approx. 9).',
            'Initiated conversion to a build pipeline system from Jenkins.'
        ]
    },
    {
        startDate: '2015-03-22',
        endDate: '2017-06-08',
        position: 'Mathematics Teacher',
        company: 'West Contra Costa Unified School District',
        website: 'https://www.wccusd.net',
        summary: 'Designed and delivered lesson plans for 7th grade mathematics class, as well as grading and giving feedback.',
        highlights: [
            '"I hate math, but I like you" - Former Student'
        ]
    },
    {
        startDate: '2012-10-20',
        endDate: '2014-06-12',
        position: 'Damage Prevention Specialist',
        company: 'Alliance Inspection Management',
        website: 'https://aiminspections.com',
        summary: 'Inspected new vehicles before being loaded/unloaded to/from cargo trains for damage, as well as verifying damages for truck drivers responsible for transport.',
        highlights: [
            'Built macros in VBA that automated approximately between 2 and 4 hours worth of daily work.'
        ]
    }
] as WorkHistory[];
