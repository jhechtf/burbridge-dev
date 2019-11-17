interface EducationHistory {
    institution: string;
    startDate: string | Date;
    endDate: string | Date;
    area: string;
    studyType: string;
}
export default [{
    institution: 'California State University Easty Bay',
    startDate: '2010-09-23',
    endDate: '2014-03-14',
    area: 'Mathematics',
    studyType: 'Bachelor'
}] as EducationHistory[];
