export const demoNamedEntity = {
  project: {
    guideline: '',
  },
  me: {
    is_superuser: false,
  },
  docs: [
    {id: 1, 
     text: "My name is Coder McCody, a senior Software Engineer at the Denver, CO location for Lockheed Martin. My educational background includes computer science and statistics, followed by applied mathematics. My work experience includes a 6-year career with IBM in Salem, OR where I leveraged skills in database administration, sql, and machine learning to build algorithms.", 
     annotations: [
     {id: 1, prob: 0.0, label: 1, start_offset: 11, end_offset: 23, user: 1}, 
     {id: 2, prob: 0.0, label: 4, start_offset: 34, end_offset: 51, user: 1}, 
     {id: 3, prob: 0.0, label: 2, start_offset: 59, end_offset: 69, user: 1}, 
     {id: 4, prob: 0.0, label: 3, start_offset: 83, end_offset: 98, user: 1}, 
     {id: 5, prob: 0.0, label: 6, start_offset: 135, end_offset: 151, user: 1}, 
     {id: 6, prob: 0.0, label: 6, start_offset: 156, end_offset: 166, user: 1}, 
     {id: 7, prob: 0.0, label: 6, start_offset: 180, end_offset: 199, user: 1}, 
     {id: 8, prob: 0.0, label: 3, start_offset: 250, end_offset: 253, user: 1}, 
     {id: 9, prob: 0.0, label: 2, start_offset: 257, end_offset: 266, user: 1}, 

     {id: 10, prob: 0.0, label: 6, start_offset: 295, end_offset: 318, user: 1}, 
     {id: 11, prob: 0.0, label: 6, start_offset: 320, end_offset: 323, user: 1}, 

     {id: 12, prob: 0.0, label: 6, start_offset: 329, end_offset: 345, user: 1}, 
     {id: 14, prob: 0.0, label: 6, start_offset: 355, end_offset: 365, user: 1}]},

    {
      id: 12,
      text: 'My achievements in subjects that develop communication, data analysis, and visualization abilities constitute my capabilities in the field. I am certain that I have what you need and would become a beneficial extension to the company.',
      annotations: [],
    },
    {
      id: 10,
      text: 'As a certified Microsoft Database Administrator with a Bachelor’s degree in computer science and hands-on experience overseeing the design, development, and maintenance of various database systems, I believe my skills perfectly suit your needs.',
      annotations: [],
    },
    {
      id: 11,
      text: "I have designed databases to fit a variety of needs, successfully ensured the security of those databases, problem-solved in order to meet both back-end and front-end needs, installed and tested new versions database management systems, customized and installed applications and meticulously monitored performance for the smoothest front-end experience possible.",
      annotations: [],
    },
    {
      id: 12,
      text: "In addition to my experiences in ML, I have worked with noisy, large datasets in my previous two internships. At Raytheon, I worked on benchmarking their AI engine’s performance in clustering similar bugs in a bug database",
      annotations: [],
    },
    {
      id: 13,
      text: 'I am using ML techniques such as recurrent neural network (RNN) on a Raspberry Pi to detect Sleep Interruption in real-time. I am also working in Python using Tensorflow, Keras, NumPy, Pandas, SciPy and Librosa. ',
      annotations: [],
    },
    {
      id: 14,
      text: "I built a custom compressor and decompressor in C and Python for the kinematic data flowing from a specialized surgical robotic devise. ",
      annotations: [],
    },
  ],
  labels: [
    {
      id: 1,
      text: 'Person',
      suffix_key: 'p',
      background_color: '#209cee',
      text_color: '#ffffff',
    },
    {
      id: 2,
      text: 'Location',
      suffix_key: 'l',
      background_color: '#ffcc00',
      text_color: '#333333',
    },
    {
      id: 3,
      text: 'Company',
      suffix_key: 'o',
      background_color: '#333333',
      text_color: '#ffffff',
    },
    {
      id: 4,
      text: 'Job',
      suffix_key: 'e',
      background_color: '#33cc99',
      text_color: '#ffffff',
    },
    {
      id: 5,
      text: 'Date',
      suffix_key: 'd',
      background_color: '#ff3333',
      text_color: '#ffffff',
    },
    {
      id: 6,
      text: 'Skill',
      suffix_key: 'z',
      background_color: '#9933ff',
      text_color: '#ffffff',
    },
  ],
};


export const demoTextClassification = {
  me: {
    is_superuser: false,
  },
  project: {
    guideline: 'Insert text to provide labeling instructions to annotator here...',
  },
  docs: [
    {
      id: 1,
      text: 'We are seeking a research scientist interested in fundamental and applied machine learning research. We want to find an intellectually curious person with a desire for building solutions to next generation problems. You will be joining a team of interdisciplinary scientists that bridge the gap between the academic and applied sides of research, and who share a vision of building autonomous systems to ensure national security, effective disaster relief, quick and efficient emergency response, and other high-impact customer needs.',
      annotations: [
        {
          id: 1,
          label: 1,
        },
      ],
    },
    {
      id: 10,
      text: "Research and solution development experience in command and control, autonomous vehicle planning and control, formal methods for assurance, artificial perception, sensor data fusion, or collaborative autonomy involving teams of autonomous vehicles and humans (MUM-T).",
      annotations: [{id:1, label:1}],
    },
    {
      id: 11,
      text: "The Flight Controls and Autonomy team is currently seeking highly motivated technology pioneers with a desire to steer and lead the Autonomy industry. Successful candidates must be willing and able to work on highly complex challenging problems, leading to world-changing technological breakthroughs.",
      annotations: [{id:1, label:1}],
    },
    {
      id: 12,
      text: "Performs and documents analysis and design of Guidance, Navigation, and Control (GNC) systems to validate or assess the system design or models.",
      annotations: [{id:1, label:2}],
    },
    {
      id: 13,
      text: "Expert experience in developing and demonstrating prototype and mature systems using modern tools from AI/ML, autonomy, and control.",
      annotations: [{id:1, label:2}],
    },
    {
      id: 14,
      text: 'Typical assignments will include requirements definition and flowdown, systems design and analysis, systems integration, test, and verification. ',
      annotations: [],
    },
  ],
  labels: [
    {
      id: 1,
      text: 'Critical Skill',
      suffix_key: 'n',
      background_color: '#66023C',
      text_color: '#ffffff',
    },
    {
      id: 2,
      text: 'None',
      suffix_key: 'p',
      background_color: '#d3d3d3',
      text_color: '#000000',
    },
  ],
};

export const demoTranslation = {
  project: {
    guideline: '',
  },
  me: {
    is_superuser: false,
  },
  docs: [
    {
      id: 1,
      text: 'How many days of vacation do I have per year.',
      annotations: [
        {
          id: 1,
          text: "Employees start the year with 80 hours of flexible time off, and gain additional PTO each month.",
        },
        {
          id: 2,
          text: "Employees start the year with 80 hours of vacation.",
        },
      ],
    },
    {
      id: 10,
      text: 'How do I find out who my HRBP is?',
      annotations: [],
    },
    {
      id: 11,
      text: "Where do I find my security contact?",
      annotations: [],
    },
    {
      id: 12,
      text: "How do I update my paycheck address for tax purposes?",
      annotations: [],
    },
    {
      id: 13,
      text: "Does Lockheed Martin have off for the 4th of July holiday?",
      annotations: [],
    },
    {
      id: 14,
      text: 'Where can I find the company brand book for commmunications externally?',
      annotations: [],
    },
  ],
};
