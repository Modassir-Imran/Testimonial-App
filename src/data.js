
const reviews = [
    {
      id: 1,
      name: "MOHAMMAD ARIF",
      job: "Student at CHANDIGARH UNIVERSITY",
      image: "https://media.licdn.com/dms/image/D4D35AQGRJSd9LP34jw/profile-framedphoto-shrink_800_800/0/1692970085572?e=1722085200&v=beta&t=ng-jJidZaYJWmkV3XzlUQ_maxsHzNC93dexrlhwUTVQ",
      text: "Working with this team was a pleasure. Their technical expertise and ability to deliver quality solutions on time and within budget were impressive. I highly recommend them as a true partner and asset to any project.",
    },
    {
      id: 2,
      name: "Arif Khan",
      job: "Frontend Developer",
      image: "https://media.licdn.com/dms/image/D4D03AQFvWaV3-Y_C8Q/profile-displayphoto-shrink_400_400/0/1674226806129?e=1726704000&v=beta&t=_nzX2B50skjjTy88ZaUm-4pmy5KUv2__FDcI93dSzMI",
      text: "I have had the pleasure of working with this team on several projects, and I am consistently impressed with their technical expertise and ability to deliver quality solutions on time and within budget. They are a true partner and an asset to any project.",
    },
    {
      id: 3,
      name: "Abdurrahman khan",
      job: "Software Tester",
      image: "https://media.licdn.com/dms/image/D5635AQGOQC0HZAA53w/profile-framedphoto-shrink_400_400/0/1714592635172?e=1722085200&v=beta&t=YrAItkAOq4YEHsHJLbGiHECyaHHRHrk4eJkR92jCUd4",
      text: "I have been working with this company for several years now, and I have always been impressed with their creativity and attention to detail. They are true professionals who take pride in their work and always go above and beyond to deliver exceptional results.",
    },
    {
      id: 4,
      name: "Gazi Ul Islam Allie (Indian)",
      job: "Marketing Manager",
      image: "https://media.licdn.com/dms/image/C4D03AQERL9UrUrng3g/profile-displayphoto-shrink_400_400/0/1646575594306?e=1726704000&v=beta&t=KJ0ntMABB-dpqz5yWnzCjB3GZSfjyN6X_WvUj2WqvyQ",
      text: "I am thrilled with the results of our recent marketing campaign, and it wouldn't have been possible without the hard work and dedication of the entire team. Thank you for your exceptional work!",
    },
    {
      id: 5,
      name: "Mohammad Ali☝️",
      job: "Hotel & Hospitality Management",
      image: "https://media.licdn.com/dms/image/D5603AQEN6n1Ab1kCeQ/profile-displayphoto-shrink_400_400/0/1692630131712?e=1726704000&v=beta&t=zcYN7BYctAItCoyS3stpJKMB9549g54biSCCpIcFW_c",
      text: "I have worked with many content creators over the years, but none have impressed me as much as this team. They have a knack for crafting compelling and engaging content that resonates with our audience and drives real results. I highly recommend them!",
    },
    {
      id: 6,
      name: "Mohd Ali ",
      job: "Full stack developer at Buildby",
      image: "https://media.licdn.com/dms/image/D4D03AQHol2oPJBJ00A/profile-displayphoto-shrink_400_400/0/1691932783672?e=1726704000&v=beta&t=EGXkVrEfje7NEVj5y6CGHTbPP8-s0ruLZrafzCSwLwQ",
      text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
    },
    

    {
        id: 7,
        name: "Modassir Imran",
        job: "Fullsack Developer",
        image: "https://avatars.githubusercontent.com/u/96190246?s=400&u=91c66393bfee3c9f9acbfda15cfd7ce159a318aa&v=4",
        text: "I am an inquisitive, focused, and diligent developer with a passion for creating innovative frontend applications that enhance organizational efficiency and success. With a strong foundation in HTML, CSS/SCSS, JavaScript, React.js/Redux,Tialwind, C++, Java ,data structures, algorithms, and problem-solving, I am skilled in leadership and teamwork. I am seeking an entry-level software-oriented position where my technical skills can be effectively applied to solve real-world problems."
    },
    {
        id: 8,
        name: "Mujeeburrahman",
        job: "Aspiring Software Engineer",
        image: "https://media.licdn.com/dms/image/D5635AQFQ6NlNvIYtYA/profile-framedphoto-shrink_400_400/0/1721217908868?e=1722085200&v=beta&t=768VDQoMzAVwpZmXhSpN2WTWTQKsWK1WZP0dMYfs9iA",
        text: "Passionate and driven Full Stack Developer with a B.E. in Computer Science from Chandigarh University. Adept at building dynamic and responsive web applications using the MERN stack. Proficient in a wide array of technologies including React, Node.js, Express.js, and MongoDB, with strong skills in TypeScript, JavaScript, and modern front-end frameworks like Tailwind CSS. Committed to writing clean, efficient code and continuously enhancing my skill set through solving complex problems on platforms like LeetCode.",
    },
    {
        id: 9,
        name: "Junaid Chaudhary",
        job: "Student MOOC Coordinator at CU",
        image: "https://media.licdn.com/dms/image/C4E03AQHgl6IDjQFy_A/profile-displayphoto-shrink_400_400/0/1604077641887?e=1726704000&v=beta&t=M7gsX--3DengsN-95FLxeQq2mfZloRc5tFZZOPnqEhI",
        text: "I had the opportunity to work with this team on a data analysis project, and I was impressed with their attention to detail and their ability to work with complex datasets. They provided valuable insights that helped us make informed business decisions. It was a pleasure working with them.",
    },
    {
        id: 10,
        name: "Upasana Bijlani",
        job: "Jr. Recruiter at SPECTRAFORCE TECHNOLOGIES",
        image: "https://media.licdn.com/dms/image/D4D03AQGW--kpwmgB0g/profile-displayphoto-shrink_400_400/0/1718815496678?e=1726704000&v=beta&t=9neCfxXiZTcdZbUG-Xdbri7qIUsKHNUrP3cnugsKLqs",
        text: "At SPECTRAFORCE® I am part of a dynamic team that drives growth and innovation in the US Staffing realm. Since 2004, SPECTRAFORCE® has grown to become a leading U.S. staffing firm, with services that span sectors including Technology, Financial Services, Pharmaceuticals, Life Sciences, Telecom, Utilities, and Airlines. We are passionate about redefining work for our peers, clients, and candidates, through our collective vision – NEWJOBPHORIA®. ",
      },

      
  ];
  
  export default reviews;
  