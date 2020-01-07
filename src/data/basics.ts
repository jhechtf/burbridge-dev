export interface BasicData {
    name: string;
    label: string;
    email: string;
    tagline: string;
    phone: string;
    summary: string;
}

const data: BasicData = {
    name: 'Jim Burbridge',
    label: 'DevOps Engineer / Full Stack Developer / Space Enthusiast',
    email: 'jimpburbridge@gmail.com',
    tagline: 'I like solving problems &ndash; from automating the deployment process to elegant user interfaces',
    phone: '(510) 621-3107',
    summary: `Hello! My name is Jim, and I'm from the Bay Area in California. I have been working for computers for as long as I can remember. I started taking freelance work in 2003
    working largely in PHP and MySQL at the time. I branched out into other areas of technology including administration, infrastucture, and networking.
    I received my Bachelor of Science in Mathematics frm CSU East Bay in 2014. I love building all manner of things and mentoring others in web development.`
};

export default data;
