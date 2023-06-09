const {Scholarship} = require("./models/scholarship_model")
const connect = require('./config/scholarship_details');

const scholarships = [
    {
      name: 'Pre Matric Scholarships Scheme for Minorities',
      scholarship_no: 1,
      description: 'The scholarship at pre-matric level will encourage parents from minority communities to send their school going children to school, lighten their financial burden on school education ',
      closing_date: new Date('2022-11-15'),
      category: 'All',
      nationality: 'National',
      qualification: 'Below 10th Standard',
      state: 'All India',
      family_income: 'less then 100000',
      pdf_url: 'https://scholarships.gov.in/public/schemeGuidelines/MoMA_Pre_Matric_2018-20.pdf'
    },
    {
      name: 'Post Matric Scholarships Scheme for Minorities',
      scholarship_no: 2,
      description: 'The objective of the scheme is to award scholarships to meritorious students belonging to economically weaker sections of minority community so as to provide them better opportunities for higher education',
      closing_date: new Date('2022-11-30'),
      category: 'All',
      nationality: 'National',
      qualification: '10th pass',
      state: 'All India',
      family_income: 'less then 200000',
      pdf_url: 'https://scholarships.gov.in/public/schemeGuidelines/MoMA_Post_Matric_2018-20.pdf'
    },
    {
      name: 'BEGUM HAZRAT MAHAL NATIONAL SCHOLARSHIP',
      scholarship_no: 3,
      description: 'To recognize, promote and assist girl students belonging to National Minorities who cannot continue their education due to lack of financial support.',
      closing_date: new Date('2022-11-15'),
      category: 'All',
      nationality: 'National',
      qualification: '10th pass',
      state: 'All India',
      family_income: 'less then 200000',
      pdf_url: 'https://scholarships.gov.in/public/schemeGuidelines/1053_G.pdf'
    },
    {
      name: 'Pre-matric Scholarship for Students with Disabilities',
      scholarship_no: 4,
      description: 'Government and local authorities shall ensure that every child with benchmark disability has access to free education in an appropriate environment till he attains the age of eighteen years',
      closing_date: new Date('2022-11-15'),
      category: 'All',
      nationality: 'National',
      qualification: 'Below 10th Standard',
      state: 'All India',
      family_income: 'less then 250000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines.pdf'
    },
    {
      name: 'Post-matric Scholarship for Students with Disabilities',
      scholarship_no: 5,
      description: 'Government and local authorities shall ensure that every child with benchmark disability has access to free education in an appropriate environment till he attains the age of eighteen years',
      closing_date: new Date('2022-11-31'),
      category: 'All',
      nationality: 'National',
      qualification: '10th pass',
      state: 'All India',
      family_income: 'less then 250000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines.pdf'
    },
    {
      name: 'Scholarships for Top Class Education for students with disabilities',
      scholarship_no: 6,
      description: 'Government and local authorities shall ensure that every child with benchmark disability has access to free education in an appropriate environment till he attains the age of eighteen years',
      closing_date: new Date('2022-11-31'),
      category: 'All',
      nationality: 'National',
      qualification: 'Post Graduation',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/DEPDGuidelines.pdf'
    },
    {
      name: 'Top Class Education Scheme for SC Students',
      scholarship_no: 7,
      description: 'The Scheme aims at recognizing and promoting quality education amongst students belonging to SCs, by providing full financial support',
      closing_date: new Date('2023-01-17'),
      category: 'SC',
      nationality: 'National',
      qualification: '12th pass',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/Top_Class_Education_Scheme_2018.pdf'
    },
    {
      name: 'PM YASASVI CENTRAL SECTOR SCHEME OF TOP CLASS EDUCATION IN SCHOOLS FOR OBC, EBC AND DNT STUDENTS',
      scholarship_no: 8,
      description: 'The objective of the scheme is to provide premium education to the meritorious students belonging to OBC, EBC and DNT categories by funding their education from Class 9 onwards till they complete Class 12',
      closing_date: new Date('2023-02-07'),
      category: 'OBC',
      nationality: 'National',
      qualification: '10th pass',
      state: 'All India',
      family_income: 'less then 250000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/3061_G.pdf'
    },
    {
      name: 'National Fellowship and Scholarship for Higher Education of ST Students',
      scholarship_no: 9,
      description: 'The objective of the scheme is to provide financial assistance to meritorious Scheduled Tribe students',
      closing_date: new Date('2023-01-17'),
      category: 'ST',
      nationality: 'National',
      qualification: 'Post Graduation',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/tribalfellowshipguideline.pdf'
    },
    {
      name: 'National Means Cum Merit Scholarship',
      scholarship_no: 10,
      description: 'scholarships to meritorious students of economically weaker sections to arrest their drop out at clasi Vlll and encourage them to continue the study at secondary stage',
      closing_date: new Date('2022-11-30'),
      category: 'All',
      nationality: 'National',
      qualification: 'Below 10th',
      state: 'All India',
      family_income: 'less then 350000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/NMMSSGuidelines.pdf'
    },
    {
      name: 'CENTRAL SECTOR SCHEME OF SCHOLARSHIPS FOR COLLEGE AND UNIVERSITY STUDENTS',
      scholarship_no: 11,
      description: 'To provide financial assistance to meritorious students from poor families to meet a part of their day-to-day expenses while pursuing higher studies',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: '12th pass',
      state: 'All India',
      family_income: 'less then 450000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/Guidelines_DOHE_CSSS.pdf'
    },
    {
      name: 'Prime Ministers Scholarship Scheme For Central Armed Police Forces And Assam Rifles',
      scholarship_no: 12,
      description:  'this scheme is for the dependent wards of States/UTs Police Personnel who are martyred during Terror/Naxal attacks',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: '12th pass',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/warb/G_1197_3001.pdf'
    },
    {
      name: 'Prime Ministers Scholarship Scheme For RPF/RPSF',
      scholarship_no: 13,
      description: 'to encourage higher education for wards of Ex/Serving RPF/RPSF personnel and widows',
      closing_date: new Date('2022-12-31'),
      category: 'All',
      nationality: 'National',
      qualification: '12th pass',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/MORB_GL.pdf'
    },
    {
      name: 'PG INDIRA GANDHI SCHOLARSHIP FOR SINGLE GIRL CHILD',
      scholarship_no: 14,
      description: 'Scholarship for Single Girl Child with an aim to compensate direct costs of girl education who happen to be the only girl child in their family',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/Guidelines_SGC1819.pdf'
    },
    {
      name: 'PG SCHOLARSHIP FOR UNIVERSITY RANK HOLDERS(Ist and IInd RANK HOLDERS)',
      scholarship_no: 15,
      description: 'The purpose of this scheme is to attract talent for pursuing post graduate studies besides strengthening the basic subjects at Undergraduate level',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/GuidelinesUGCUniversityRankHolder1819.pdf'
    },
    {
      name: 'PG SCHOLARSHIP SCHEME FOR SC ST STUDENTS FOR PERSUING PROFESSIONAL COURSES',
      scholarship_no: 16,
      description: 'The objective of the scheme is to provide financial assistance to SC/ST candidates to pursue postgraduate level studies in Professional subjects in the eligible institutions',
      closing_date: new Date('2023-01-17'),
      category: 'SC',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'N/A',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/guidelines_pgsprof_gl1819.pdf'
    },
    {
      name: 'PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS ( TECHNICAL DEGREE )',
      scholarship_no: 17,
      description: 'Scheme being implemented by AICTE aimed at providing assistance for advancement of Girls pursuing technical education',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2010_G.pdf'
    },
    {
      name: 'PRAGATI SCHOLARSHIP SCHEME FOR GIRL STUDENTS ( TECHNICAL DIPLOMA )',
      scholarship_no: 18,
      description: 'Scheme being implemented by AICTE aimed at providing assistance for advancement of Girls pursuing technical education',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Diploma',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2011_G.pdf'
    },
    {
      name: 'SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY ABLED STUDENT ( TECHNICAL DEGREE )',
      scholarship_no: 19,
      description: 'Saksham is a MHRD Scheme being implemented by AICTE aimed at providing encouragement and support to specially-abled children to pursue technical education',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2012_G.pdf'
    },
    {
      name: 'SAKSHAM SCHOLARSHIP SCHEME FOR SPECIALLY ABLED STUDENT ( TECHNICAL DIPLOMA )',
      scholarship_no: 20,
      description: 'Saksham is a MHRD Scheme being implemented by AICTE aimed at providing encouragement and support to specially-abled children to pursue technical education',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Diploma',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_2013_G.pdf'
    },
    {
      name: 'AICTE SWANATH SCHOLARSHIP SCHEME (TECHNICAL DIPLOMA)',
      scholarship_no: 20,
      description: 'The Scheme is being implemented by AICTE to provide encouragement and support to orphans, wards of parents died due to Covid-19, etc',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Diploma',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_3038_G.pdf'
    },
    {
      name: 'AICTE SWANATH SCHOLARSHIP SCHEME (TECHNICAL DEGREE)',
      scholarship_no: 21,
      description: 'The Scheme is being implemented by AICTE to provide encouragement and support to orphans, wards of parents died due to Covid-19, etc',
      closing_date: new Date('2023-01-17'),
      category: 'All',
      nationality: 'National',
      qualification: 'Graduation',
      state: 'All India',
      family_income: 'less then 800000',
      pdf_url:'https://scholarships.gov.in/public/schemeGuidelines/AICTE/AICTE_3039_G.pdf'
    },
    {
      name: 'Post Matric Scholarship - SC',
      scholarship_no: 22,
      description: 'this scholarship is for sc students focuses on poor families by giving financial assistance in post-matriculation',
      closing_date: new Date('2023-05-08'),
      category: 'SC',
      nationality: 'National',
      qualification: '10th pass',
      state: 'haryana',
      family_income: 'less then 250000',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/PMS%20SC%20Guidelines%20March2021.pdf'
    },
    {
      name: 'Post Matric Scholarship - BC',
      scholarship_no: 23,
      description: 'this scholarship is for obc students by giving financial assistance in post-matriculation till they complete their education',
      closing_date: new Date('2023-05-08'),
      category: 'OBC',
      nationality: 'National',
      qualification: '12th pass',
      state: 'haryana',
      family_income: 'less then 250000',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/PMS%20OBC%20Guidelines%20March2021.pdf'
    },
    {
      name: 'State Merit Scholarship To UG Girls',
      scholarship_no: 24,
      description: 'This Scholarship will be given to the girl students who after passing 10+2 class only to the girls pursuing general degree courses',
      closing_date: new Date('2023-05-08'),
      category: 'All',
      nationality: 'National',
      qualification: '12th pass',
      state: 'haryana',
      family_income: 'N/A',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/State%20Merit%20Scholarship%20To%20UG%20Girls.pdf'
    },
    {
      name: 'Haryana State Meritorious Incentives Scheme (CBSE)',
      scholarship_no: 25,
      description: 'The object of the Scheme is to encourage the Meritorious Students who have attained Top position in CBSE annual exams',
      closing_date: new Date('2023-05-08'),
      category: 'All',
      nationality: 'National',
      qualification: '12th pass',
      state: 'haryana',
      family_income: 'N/A',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/Haryana%20State%20Meritorious%20Incentive%20Scheme.pdf'
    },
    {
      name: 'State Merit Scholarship To UG/PG Students',
      scholarship_no: 26,
      description: 'scheme for the award of Merit-cum-Poverty Scholarships to the poor but talented students in colleges for General University for Degree, Post-Graduate and Doctorate Courses',
      closing_date: new Date('2023-05-08'),
      category: 'All',
      nationality: 'National',
      qualification: '10th pass',
      state: 'haryana',
      family_income: 'N/A',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/State%20Merit%20Scholarship%20To%20UGPG%20Students.pdf'
    },
    {
      name: 'Lower Income Group Scheme',
      scholarship_no: 27,
      description: 'The object of the Scheme is to provide financial assistance to Lower Income Group as to enable them to complete their Education',
      closing_date: new Date('2023-05-08'),
      category: 'All',
      nationality: 'National',
      qualification: '10th pass',
      state: 'haryana',
      family_income: 'less then 12000',
      pdf_url:'https://harchhatravratti.highereduhry.ac.in/Notices/Lower%20Income%20Group%20Scheme.pdf'
    },
  
  ]
  // Insert the scholarships into the database
  
  const xxx = async () => {
    for(let i = 0; i < scholarships.length; ++i) {
        console.log(scholarships[i]);
        await Scholarship.create({
            name: scholarships[i].name,
            scholarship_no: scholarships[i].scholarship_no,
            description: scholarships[i].description,
            closing_date: scholarships[i].closing_date,
            category: scholarships[i].category,
            nationality: scholarships[i].nationality,
            qualification: scholarships[i].qualification,
            state: scholarships[i].state,
            family_income: scholarships[i].family_income,
            pdf_url: scholarships[i].pdf_url
        })
      }
  }

  xxx()

  
  
//   Scholarship.insertMany(scholarships)
//     .then(savedScholarships => {
//       console.log('Scholarships created:');
//       // Additional code to handle the successful creation of the scholarships
//     })
//     .catch(error => {
//       console.error('Failed to create scholarships:', error);
//       // Additional code to handle any errors that occurred during scholarship creation
//     });