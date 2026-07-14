export type Language = 'en' | 'vi';

export const translations = {
  en: {
    hero: {
      nav: {
        about: 'About',
        skills: 'Skills',
        projects: 'Projects',
        contact: 'Contact'
      },
      title: "Hi, i'm tien",
      subtitle: "a qc senior driven by ensuring quality and meticulous software testing",
      downloadCV: "Download CV"
    },
    about: {
      title: "About me",
      desc: "Meticulous Senior Tester with 13 years of experience in software testing and quality assurance. I focus on Agile/Scrum methodologies, API testing with Postman, and Performance testing with JMeter. With hands-on experience across 100+ real devices and diverse domains including Blockchain, Education, ERP, VR, and Social Gaming, I ensure products meet the highest quality standards. Let's build something incredible together!",
      stats: {
        years: "Years Experience",
        devices: "Devices Tested",
        domains: "Domains"
      }
    },
    skills: {
      title: "Skills",
      allTimeSkills: [
        "AI Automation", "Agile/Scrum", "API Testing", "Postman", "JMeter", 
        "SQL Server", "MySQL", "AWS DynamoDB", "Appium", 
        "Selenium", "Jira", "Performance Testing", 
        "Mobile Testing", "Web Testing", "Quality Assurance"
      ],
      items: [
        {
          num: "01",
          title: "AI & Automation",
          desc: "Proficient in using AI to develop automation tools, significantly maximizing efficiency, streamlining workflows, and drastically reducing manual work time."
        },
        {
          num: "02",
          title: "Development Life Cycle",
          desc: "Deep expertise in Agile/Scrum and Waterfall (Traditional) methodologies, managing full SDLC processes from requirements analysis through deployment and maintenance."
        },
        {
          num: "03",
          title: "API Testing",
          desc: "Advanced proficiency with Postman - API Workflow design, Test Script automation, Collection Runner execution, and comprehensive endpoint validation."
        },
        {
          num: "04",
          title: "Performance Testing",
          desc: "Load testing and stress testing on real devices and environments using Apache JMeter, ensuring applications perform under expected and peak load conditions."
        },
        {
          num: "05",
          title: "Database & Cloud",
          desc: "Hands-on experience with SQL Server, MySQL, PostgreSQL, AWS DynamoDB, and GCP Spanner - designing test data, validating queries, and verifying data integrity."
        },
        {
          num: "06",
          title: "Mobile & Cross-Platform",
          desc: "Testing experience on over 100 real devices across multiple platforms including Android, iOS, Java, WebOS, and tvOS. Comprehensive checklist methodology for mobile game testing."
        }
      ]
    },
    projects: {
      title: "Projects",
      labels: {
        role: "Role",
        responsibilities: "Responsibilities",
        tools: "Tools & Technologies"
      },
      items: [
        {
          num: "01",
          label: "Blockchain / Social Gaming",
          title: "DinoLand",
          role: "Senior QC Engineer",
          responsibilities: [
            "Conducted comprehensive testing across game mechanics, blockchain transactions, and smart contract interactions.",
            "Ensured cross-platform compatibility and smooth user experience across web and mobile platforms.",
            "Collaborated with developers to identify and resolve vulnerabilities in blockchain integrations."
          ],
          tools: "Postman, Web3 APIs, Jira, TestFlight, Android Studio"
        },
        {
          num: "02",
          label: "Social Gaming",
          title: "Minion Rush",
          role: "QA Tester",
          responsibilities: [
            "Performed end-to-end testing on 100+ real devices to ensure stable performance.",
            "Executed performance profiling, crash analysis, and rigorous gameplay testing.",
            "Coordinated multi-platform QA processes across iOS and Android environments."
          ],
          tools: "Charles Proxy, ADB, Xcode, Jira, Bugzilla"
        },
        {
          num: "03",
          label: "Education",
          title: "Topica Kid",
          role: "QC Engineer",
          responsibilities: [
            "Focused on usability testing and responsive design validation across web and mobile interfaces.",
            "Verified educational content accuracy and accessibility compliance for children.",
            "Designed test cases based on user stories and executed regression testing cycles."
          ],
          tools: "Selenium, Postman, JMeter, Redmine"
        },
        {
          num: "04",
          label: "E-commerce & Membership",
          title: "E-commerce & Membership App",
          role: "Senior QC Engineer",
          responsibilities: [
            "Currently involved in developing and operating a customer-facing mobile application.",
            "Testing core features including membership management, online shopping, reward points, and marketing campaigns.",
            "Ensuring high quality from the development of new features to stable production operation.",
            "Proficiently utilizing AI to create automation tools, maximizing efficiency and drastically reducing work time."
          ],
          tools: "Appium, Postman, AWS DynamoDB, Kibana, Jira"
        }
      ]
    },
    contact: {
      title: "Contact Me",
      labels: {
        phone: 'Phone',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        address: 'Address',
        downloadCv: 'Download CV'
      }
    },
    footer: {
      copyright: "© 2025 Phung Thanh Tien. All rights reserved."
    }
  },
  vi: {
    hero: {
      nav: {
        about: 'Giới Thiệu',
        skills: 'Kỹ Năng',
        projects: 'Dự Án',
        contact: 'Liên Hệ'
      },
      title: "Xin chào, tôi là Tiến",
      subtitle: "một chuyên viên kiểm thử phần mềm đam mê chất lượng và sự tỉ mỉ",
      downloadCV: "Tải CV"
    },
    about: {
      title: "Giới thiệu",
      desc: "Chuyên viên kiểm thử cấp cao với 13 năm kinh nghiệm trong lĩnh vực kiểm thử và đảm bảo chất lượng phần mềm (QA/QC). Tôi có thế mạnh về các phương pháp Agile/Scrum, kiểm thử API với Postman và kiểm thử hiệu năng với JMeter. Với kinh nghiệm thực tế trên hơn 100 thiết bị thật và đa dạng lĩnh vực bao gồm Blockchain, Giáo dục, ERP, VR và Social Gaming, tôi luôn đảm bảo các sản phẩm đạt tiêu chuẩn chất lượng cao nhất. Cùng nhau tạo ra những sản phẩm tuyệt vời nhé!",
      stats: {
        years: "Năm Kinh Nghiệm",
        devices: "Thiết Bị Kiểm Thử",
        domains: "Lĩnh Vực"
      }
    },
    skills: {
      title: "Kỹ Năng",
      allTimeSkills: [
        "AI Automation", "Agile/Scrum", "Kiểm Thử API", "Postman", "JMeter", 
        "SQL Server", "MySQL", "AWS DynamoDB", "Appium", 
        "Selenium", "Jira", "Kiểm Thử Hiệu Năng", 
        "Mobile Testing", "Web Testing", "Quản Lý Chất Lượng"
      ],
      items: [
        {
          num: "01",
          title: "Sử Dụng AI Thuần Thục",
          desc: "Sử dụng AI một cách thuần thục để tạo ra các công cụ automation, cải thiện và tối ưu hóa quy trình, qua đó giảm thiểu tối đa thời gian làm việc thủ công."
        },
        {
          num: "02",
          title: "Quy Trình Phát Triển Phần Mềm",
          desc: "Am hiểu sâu sắc các phương pháp Agile/Scrum và Thác nước (Waterfall), quản lý toàn bộ quy trình vòng đời phát triển phần mềm (SDLC) từ phân tích yêu cầu đến triển khai và bảo trì."
        },
        {
          num: "03",
          title: "Kiểm Thử API",
          desc: "Sử dụng thành thạo Postman - thiết kế API Workflow, tự động hóa Test Script, thực thi Collection Runner và xác thực toàn diện các endpoint."
        },
        {
          num: "04",
          title: "Kiểm Thử Hiệu Năng",
          desc: "Thực hiện Load testing và Stress testing trên thiết bị và môi trường thật bằng Apache JMeter, đảm bảo ứng dụng hoạt động ổn định dưới điều kiện tải bình thường và cao điểm."
        },
        {
          num: "05",
          title: "Cơ Sở Dữ Liệu & Đám Mây",
          desc: "Kinh nghiệm thực tế với SQL Server, MySQL, PostgreSQL, AWS DynamoDB và GCP Spanner - thiết kế dữ liệu kiểm thử, xác thực câu truy vấn và đảm bảo tính toàn vẹn của dữ liệu."
        },
        {
          num: "06",
          title: "Mobile & Đa Nền Tảng",
          desc: "Kinh nghiệm kiểm thử trên 100+ thiết bị thật qua nhiều nền tảng bao gồm Android, iOS, Java, WebOS và tvOS. Phương pháp luận checklist toàn diện cho kiểm thử game mobile."
        }
      ]
    },
    projects: {
      title: "Dự Án",
      labels: {
        role: "Vai Trò",
        responsibilities: "Trách Nhiệm",
        tools: "Công Cụ & Công Nghệ"
      },
      items: [
        {
          num: "01",
          label: "Blockchain / Social Gaming",
          title: "DinoLand",
          role: "Kỹ sư QC Cấp cao",
          responsibilities: [
            "Thực hiện kiểm thử toàn diện các cơ chế game, giao dịch blockchain và tương tác hợp đồng thông minh (smart contracts).",
            "Đảm bảo tính tương thích đa nền tảng và trải nghiệm người dùng mượt mà trên web và mobile.",
            "Phối hợp với lập trình viên để xác định và giải quyết các lỗ hổng trong tích hợp blockchain."
          ],
          tools: "Postman, Web3 APIs, Jira, TestFlight, Android Studio"
        },
        {
          num: "02",
          label: "Social Gaming",
          title: "Minion Rush",
          role: "Nhân viên QA",
          responsibilities: [
            "Kiểm thử end-to-end trên hơn 100 thiết bị thật để đảm bảo hiệu năng ổn định.",
            "Thực hiện phân tích hiệu năng, phân tích crash và kiểm thử gameplay nghiêm ngặt.",
            "Điều phối quy trình QA đa nền tảng trên cả môi trường iOS và Android."
          ],
          tools: "Charles Proxy, ADB, Xcode, Jira, Bugzilla"
        },
        {
          num: "03",
          label: "Giáo Dục",
          title: "Topica Kid",
          role: "Kỹ sư QC",
          responsibilities: [
            "Tập trung vào kiểm thử tính khả dụng (usability) và xác thực thiết kế responsive trên giao diện web và mobile.",
            "Xác minh tính chính xác của nội dung giáo dục và tính tiếp cận cho trẻ em.",
            "Thiết kế kịch bản kiểm thử dựa trên user stories và thực hiện các chu kỳ kiểm thử hồi quy."
          ],
          tools: "Selenium, Postman, JMeter, Redmine"
        },
        {
          num: "04",
          label: "E-commerce & Membership",
          title: "Ứng Dụng E-commerce & Membership",
          role: "Kỹ sư QC Cấp cao",
          responsibilities: [
            "Hiện đang tham gia phát triển và vận hành ứng dụng mobile dành cho khách hàng.",
            "Kiểm thử các tính năng cốt lõi bao gồm quản lý hội viên, mua sắm trực tuyến, điểm thưởng và các chiến dịch marketing.",
            "Đảm bảo chất lượng cao từ quá trình phát triển tính năng mới đến vận hành ổn định trên production.",
            "Sử dụng AI thành thạo để tạo các công cụ tự động hóa, tối đa hóa hiệu suất và giảm thiểu đáng kể thời gian làm việc."
          ],
          tools: "Appium, Postman, AWS DynamoDB, Kibana, Jira"
        }
      ]
    },
    contact: {
      title: "Liên Hệ",
      labels: {
        phone: 'Điện Thoại',
        email: 'Email',
        linkedin: 'LinkedIn',
        github: 'GitHub',
        address: 'Địa Chỉ',
        downloadCv: 'Tải CV'
      }
    },
    footer: {
      copyright: "© 2025 Phùng Thanh Tiến. Bảo lưu mọi quyền."
    }
  }
};
