export interface BasicData {
    [key: string]: string;
}

const data: BasicData = {
    name: 'Jim Burbridge',
    label: 'DevOps Engineer / Full Stack Developer',
    email: 'jimpburbridge@gmail.com',
    tagline: 'I like to build things I know will solve problems for people, from automating the deployment process to intuitive user interfaces',
    phone: '(510) 621-3107',
    summary: `I hail from the Bay Area, CA, and have been working for computers for as long as I can remember. I started taking freelance work some time in 2002/2003
    working largely in PHP and MySQL at the time. I'm a very curious person, so I branched out into other areas of technology including administration, infrastucture, and networking.
    I received my Bachelor of Science degree in Mathematics frm CSU East Bay in 2014. Most recently I worked at LQ Digital as a mix DevOps/Full Stack Engineer.
    I am currently looking for my next role, so if you think I may be a great fit, please send me an email!`
};

export default data;
