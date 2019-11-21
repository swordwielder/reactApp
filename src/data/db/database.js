import Mock from "../mock";

const database = {
  information: {
    name: 'Qi Chen',
    aboutContent: "I am a Data Engineer. I can provide clean code and valuable insight from data.",
    phone: '',
    nationality: 'American/Chinese',
    language: 'English, Mandarin',
    email: '',
    address: 'Brookyln, NY',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://www.facebook.com/qchen125',
      twitter: 'https://twitter.com/qchen125',
      linkedin: 'https://www.linkedin.com/in/qifchen',
      github: 'https://github.com/swordwielder'
    },
    brandImage: '/images/headshot.jpg',
    aboutImage: '/images/aboutSmall.jpg',
    aboutImageLg: '/images/aboutLarge.jpg',
    cvfile: '/files/Qi_Chen_Resume.pdf'
  },
  services: [

    {
      title: "API Development",
      icon: 'code',
      details: "Web Scrapping"
    },

  ],
  reviews: [
    {
      id: 1,
      content: 'Solid',
      author: {
        name: 'Rafi Chowdhury',
        designation: 'rafichowdhury.com'
      }
    },

  ],
  skills: [
    {
      title: "JAVA",
      value: 80
    },
    {
      title: "Python",
      value: 80
    },
    {
      title: "C++",
      value: 60
    },
    {
      title: "Bash",
      value: 80
    },
    {
      title: "Linux",
      value: 80
    },
    {
      title: "Hive",
      value: 80
    },
    {
      title: "Hadoop",
      value: 60
    },
    {
      title: "MapReduce",
      value: 50
    },
    {
      title: "Sqoop",
      value: 70
    },
    {
      title: "Oozie",
      value: 60
    },
    {
      title: "AWS",
      value: 70
    },
    {
      title: "VMware",
      value: 70
    },
    {
      title: "API Development",
      value: 70
    },
    {
      title: "Web Scraping",
      value: 75
    },
    {
      title: "Data Visualization",
      value: 70
    },
    {
      title: "Pandas",
      value: 70
    }

  ],
  portfolios: [
    {
      id: 1,
      title: "Coinbase Web Scraper",
      subtitle: "This is a WebScrapper written in Python to Scrape cryptocurrency Coin Data",
      imageUrl: "/images/CoinbaseSmall.png",
      largeImageUrl: ["/images/CoinbaseLarge.jpg"],
      url: 'https://github.com/swordwielder/pythonwebscrapper'
    },

  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2019 - Present",
        position: "Independent Developer",
        details: " Created a Discord bot that gives live weather, crypto and stock data \
        through API calls in Python \
        • Developed a REST API for returning sports statistics and betting odds. \
        • Implemented chenpost.com on an AWS S3 Bucket to allow clients \
        explore and inquire on potential partnerships."
      },
      {
        id: 2,
        year: "2018 - 2019",
        position: "Data Engineer",
        company: "Vurteau",
        details: " •Developed an API to distribute advertising creative data from  <br> \
        S3 Bucket, with Cache to optimize server load usage. (Deployed on \
        AWS EC2) \n  \t \n  \n \
        • Utilized pandas and numpy to perform data analysis and modeling \
        on advertising campaigns performance for new insight. \
        • Contributed Ideas to Vurteau’s business Model that resulted in our \
        initial $500k funding. \
        • Provided research on various web technologies and costs that would \
        help optimize the technological procedures. (AWS Media Tailor for ad \
        insertion, S3 for Storage, EC2 for running Server)"
      },
      {
        id: 3,
        year: "2015 - 2018",
        position: "Product Engineer & Content Manager",
        company: "Dahua Tech USA Inc.",
        details: "• Updated and maintained Dahuawiki.com to provide better technical \
        support to the customers including adding YouTube tutorials with \
        7000 daily hits on website tracked through Google Analytics. \
        • Hardware testing/support for clients including but not limited to \
        NVRs, DVRs, IP Cameras, and Analog Cameras via Salesforce."
      },
      {
        id: 4,
        year: "2014 - 2015",
        position: "Computer Science Tutor",
        company: "Computer Science Learning Center, University of Memphis",
        details: " Helped students with coursework and checked coding errors \
        • Taught & Mentored high school students with interests in Computer \
        Science in the field of game development using Ren’Py."
      },
      {
        id: 5,
        year: "2013 - 2015",
        position: "Technical Consultant",
        company: "ITS Service Desk, University of Memphis",
        details: "• Assisted campus students with troubleshooting U of M services \
        including E-learn, UMDrive, portal via Helpdesk using campus \
        SupportSuite software"
      }
    ],
    educationExperience: [
      {
        id: 1,
        year: "2019",
        graduation: "Data Engineering Bootcamp",
        university: "Platform by Per Scholas (Cognizant)",
        details: "Furthered understanding of Big \
        Data and Hadoop technologies. \
        Learned how to extract, scrub, \
        and manipulate real-time and \
        warehouse data using SQL \
        & Java."
      },
      {
        id: 2,
        year: "2011 - 2015",
        graduation: "BS in Computer Science",
        university: "University of Memphis",
        details: "Bachelor's degree in Computer Science at the University of Memphis with Dean's list."
      }
    ]
  },
  blogs: [
    {
      id: 1,
      title: "Ecovacs DEEBOT 500 Review",
      imageUrl: "http://chenpost.com/Deebot_500.jpg",
      content: "ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour. ReactJS is the most popular javascript framework now a days. Now it has comes with more and more new features. There is something called hooks, which has a great flavour.",
      createTime: "03 December 2019"
    },

  ],
  contactInfo: {
    phoneNumbers: ['+1646-598-1337'],
    emailAddress: ['qchen125@gmail.com'],
    address: "Brooklyn, NY"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});
