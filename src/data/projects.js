// src/data/projects.js
export const PROJECTS = [
  {
    id: "nexus-crm",
    title: "NexusCRM",
    category: "CRM Platform",
    tagline: "360° Customer Intelligence Engine",
    year: "2024",
    client: "B2B Sales Corp",
    description:
      "A full-featured CRM built for a mid-size B2B sales team of 80+ reps. Replaced 4 disconnected tools with one unified platform — cutting response time by 68% and tripling pipeline velocity.",
    tech: ["React", "Node.js", "PostgreSQL", "Redis", "AWS"],
    color: "#a8ff57",
    colorDim: "rgba(168,255,87,0.08)",
    colorBorder: "rgba(168,255,87,0.2)",
    icon: "◈",
    thumb: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&q=80",
    metrics: [
      { val: "68%", label: "Faster Response" },
      { val: "3.2×", label: "Pipeline Growth" },
      { val: "80+", label: "Active Users" },
      { val: "4 Tools", label: "Consolidated" },
    ],
    pages: [
      {
        title: "The Problem",
        subtitle: "Four tools. Zero sync. Deals dying in the gap.",
        body: "The client's 80-person sales team was split across spreadsheets, a legacy CRM, disconnected email, and a standalone ticketing system. Customer data lived in 4 silos with no sync. Sales managers had zero real-time visibility. Deals slipped through cracks that nobody could even see.",
        img: "https://images.unsplash.com/photo-1606868306217-dbf5046868d2?w=1200&q=80",
        caption: "Before: four tools, manual reconciliation, invisible pipeline",
        insight: "The client was losing ₹40L/month in mismanaged follow-ups alone — and didn't know it.",
      },
      {
        title: "Discovery Sprint",
        subtitle: "Two weeks of radical listening.",
        body: "We embedded with the sales floor for two full weeks — watching every workflow, every handoff, every frustration point. We mapped 47 distinct micro-processes. Twelve actual users validated every wireframe before a line of code was written. The architecture was designed around how reps actually work, not how textbooks say they should.",
        img: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200&q=80",
        caption: "Discovery artifacts — workflow maps, pain-point heatmaps, user journey boards",
        insight: "12 users validated every screen before development began. Zero guesswork.",
      },
      {
        title: "The Dashboard",
        subtitle: "Sales command center. Everything in one glance.",
        body: "The live dashboard surfaces pipeline value, rep performance heat maps, deal velocity trends, and at-risk account alerts — all updating in real time via WebSocket. No refresh. Color-coded deal health scores let managers spot a struggling account in under 3 seconds. Daily reporting dropped from 2 hours to 12 minutes.",
        img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
        caption: "Real-time dashboard — pipeline overview, health scoring, team leaderboard",
        insight: "Managers cut daily reporting time from 2 hours to 12 minutes from day one.",
      },
      {
        title: "Contact Intelligence",
        subtitle: "Every interaction. One profile. Always current.",
        body: "Each contact auto-aggregates email threads, call logs, meeting notes, deal history, and a predictive churn score. An AI assistant surfaces the next best action — whether a follow-up, a proposal, or a re-engagement sequence. Reps always know exactly what to do next without digging through history.",
        img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80",
        caption: "Unified contact card — 360° history with AI next-action recommendations",
        insight: "Reps spend 70% more time selling and 70% less time searching for context.",
      },
      {
        title: "Pipeline & Automation",
        subtitle: "Deals that move themselves.",
        body: "Visual Kanban pipeline with custom stages, drag-and-drop deal movement, and 40+ automation templates. Rules trigger follow-up emails, Slack pings, and task assignments automatically when deals change state. The average deal velocity improved 3.2× in the first quarter post-launch.",
        img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=1200&q=80",
        caption: "Kanban pipeline with automation rule builder and deal velocity analytics",
        insight: "3.2× faster deal closure in the first quarter. 40+ automation templates out of the box.",
      },
      {
        title: "The Results",
        subtitle: "Numbers don't lie.",
        body: "NexusCRM went live in 14 weeks. In 90 days: highest quarterly revenue in company history. The platform now processes 2,400+ customer interactions per day at 99.97% uptime. The client has since expanded the license to 3 additional business units and is planning a white-label version.",
        img: "https://images.unsplash.com/photo-1543286386-713bdd548da4?w=1200&q=80",
        caption: "Post-launch growth metrics — 90-day revenue, engagement, uptime dashboard",
        insight: "₹2.8Cr additional revenue attributed to NexusCRM in its first 90 days live.",
      },
    ],
  },
{
  id: "studenttracker-crm",
  title: "StudentTracker CRM",
  category: "Education Management Platform",
  tagline: "Every Student. Every Class. Fully Tracked.",
  year: "2024",
  client: "TESDB Academy",
  description:
    "A full-scale student tracking CRM designed for institutes to manage attendance, course progress, module completion, and test performance in one unified system. Staff and students mark attendance automatically when logging in, verified through WiFi authentication. Every activity — attendance, progress updates, and test results — triggers automated email notifications, giving complete transparency to students and administrators.",

  tech: ["Django", "PostgreSQL", "React", "SMTP Email Automation", "WiFi Authentication"],

  color: "#2dffc3",
  colorDim: "rgba(45,255,195,0.08)",
  colorBorder: "rgba(45,255,195,0.2)",
  icon: "◉",
  thumb: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&q=80",

  metrics: [
    { val: "1K+", label: "Students Managed" },
    { val: "100%", label: "Attendance Automation" },
    { val: "60%", label: "Admin Time Saved" },
    { val: "Realtime", label: "Progress Tracking" },
  ],

  pages: [
  {
    "title": "The Login",
    "subtitle": "Fragmented student management systems.",
    "body": "Staff will be able login or register their username and password for secure login and authentication. After successfull login , staff dashboard is loaded where they can monitor and handle all the batches allocated to them. ",
    "img": "/login_ss.png",
    "caption": "",
    "insight": "Secured login for each and every staff . No other staff can interrupt in a single staff's progress bar."
  },
  {
    "title": "Batch Scheduling and handling",
    "subtitle": "Allocate a scheduled timing batch for each staff for all time student convenience.",
    "body": "Each staff will be assigned for their own batches as a list and everyone can access their own batch and control student attendance and student progress inside it.",
    "img": "/batch_ss.png",
    "caption": "",
    "insight": "Batch tracking and monitor all the students inside it."
  },
  {
    "title": "Smart Login Attendance",
    "subtitle": "Automatic attendance through WiFi authentication.",
    "body": "Students and staff no longer mark attendance manually. Attendance is automatically recorded when users log into the portal while connected to the institute WiFi network. The system verifies the network IP to ensure the user is physically present in the campus environment, eliminating proxy attendance and ensuring reliable records.",
    "img": "/staff_attendance_ss.png",
    "caption": "",
    "insight": "Attendance tracking became fully automated with accurate real-time logs."
  },
  {
    "title": "Student Attendance",
    "subtitle": "Every student's presence and absence is marked and monitored",
    "body": "Each student has a dedicated dashboard showing their attendance percentage, enrolled course details, completed modules, pending lessons, and test performance. Students can track their progress in real time without depending on staff updates.",
    "img": "/student_attendance_ss.png",
    "caption": "",
    "insight": "Students stay more accountable when they can monitor their own progress."
  },
  {
    "title": "Course & Module Progress Tracking",
    "subtitle": "Structured learning progress monitoring.",
    "body": "Courses are divided into modules and topics, allowing staff to update progress as classes are completed. The system maintains a full learning timeline for each student, enabling administrators to quickly identify students who are ahead, on track, or falling behind.",
    "img": "/add_edit_progress.png",
    "caption": "",
    "insight": "Staff can instantly track which modules have been completed for every student."
  },
  {
    "title": "Admin side performance tracking",
    "subtitle": "Data-driven performance insights.",
    "body": "All data given by the staff is viewed from the admin side , data can be added , edited and deleted. All the progress is monitore from 1 Dashboard , staff attendance , studnet attendance , student topic completion, student test marks end-to-end",
    "img":"/admin_monitor_ss.png",
    "caption": "Student performance dashboard with complete test history",
    "insight": "Centralized performance tracking replaced manual grading spreadsheets."
  },
  {
    "title": "Automated Email Notifications",
    "subtitle": "Every action triggers communication.",
    "body": "Important events such as attendance confirmation, progress updates, and test results automatically trigger email notifications. This ensures students and administrators stay informed without requiring manual communication from staff.",
    "img": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80",
    "caption": "",
    "insight": "Communication with students became instant and fully automated."
  }
],
},
  {
  "id": "machinemart-ecom",
  "title": "MachineMart",
  "category": "Industrial E-Commerce Platform",
  "tagline": "Machines. Parts. Procurement Simplified.",
  "year": "2024",
  "client": "Industrial Equipment Supplier",
  "description": "A specialized B2B e-commerce platform designed for selling industrial machines and accessories. Administrators can easily manage product listings, while customers browse equipment, securely log in with OTP verification, and submit purchase requests. The system automates communication through email notifications and provides request tracking for buyers and administrators.",
  "tech": ["React", "Django", "PostgreSQL", "SMTP Email Automation", "OTP Authentication"],
  "color": "#ffb830",
  "colorDim": "rgba(255,184,48,0.08)",
  "colorBorder": "rgba(255,184,48,0.2)",
  "icon": "◆",
  "thumb": "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
  "metrics": [
    { "val": "500+", "label": "Machines Listed" },
    { "val": "1000+", "label": "Client Requests" },
    { "val": "OTP", "label": "Secure Login" },
    { "val": "Realtime", "label": "Request Tracking" }
  ],
  "pages": [
    {
      "title": "The Landing Page",
      "subtitle": "E-commerce webistie for machines and accesories.",
      "body": "Faster Inquiry generated on selling and servicing machines and its accessories just like it is done in the popular e-commerce platforms all over the world.",
      "img": "/Machines/landing_ss.png",
      "caption": "",
      "insight": "Reduce the work of a sales team and automatic inquiry and order generated. "
    },
    {
      "title": "Machine Catalog Platform",
      "subtitle": "A digital showroom for machines and accessories.",
      "body": "The platform provides a structured product catalog where customers can browse machines and industrial accessories with detailed specifications, images, and pricing information. Categories help customers easily navigate different types of equipment and quickly find the products they need.",
      "img": "/Machines/brouchure_ss.png",
      "caption": "",
      "insight": "Customers can explore the entire machine inventory online."
    },
    {
      "title": "Secure Login & OTP Verification",
      "subtitle": "Verified access for genuine buyers.",
      "body": "Customers must register and log in securely using OTP verification. This ensures that only verified users can submit purchase requests and communicate with the supplier. The authentication system prevents spam inquiries and improves security.",
      "img": "/Machines/register_ss.png",
      "caption": "",
      "insight": "Verified accounts ensure genuine purchase inquiries."
    },
    {
      "title": "Purchase Request System",
      "subtitle": "From product browsing to purchase inquiry.",
      "body": "Instead of a traditional cart checkout system, customers submit purchase requests for machines or accessories directly from the product page. These requests are recorded in the system and instantly forwarded to the admin for review and quotation processing.",
      "img": "/Machines/submit_req_ss.png",
      "caption": "",
      "insight": "Streamlined inquiry flow improves response time for sales teams."
    },
    {
      "title": "Automated Email Communication",
      "subtitle": "Instant updates for every request.",
      "body": "When a customer submits a request, automated email notifications are sent to both the customer and the admin team. Customers receive confirmation emails with request details while administrators receive alerts to process inquiries quickly.",
      "img": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=1200&q=80",
      "caption": "",
      "insight": "Customers receive instant acknowledgment for their inquiries."
    },
    {
      "title": "Request Tracking System",
      "subtitle": "Track every inquiry from submission to fulfillment.",
      "body": "Customers can log into their accounts to track the status of their purchase requests. The system updates the request status as it moves from inquiry to quotation, processing, and completion. This provides transparency for customers and helps administrators manage orders efficiently.",
      "img": "/Machines/tracking_ss.png",
      "caption": "",
      "insight": "Request tracking reduces communication delays and improves customer experience."
    },
    {
      "title": "Admin Product Management",
      "subtitle": "Full control over machines and accessories.",
      "body": "Administrators can easily add, edit, and manage machines and accessories from the admin dashboard. Product listings can include images, specifications, pricing details, and availability status. This enables quick updates and efficient catalog management.",
      "img": "/Machines/admin_ss.png",
      "caption": "",
      "insight": "Admins manage the entire product catalog from one dashboard."
    }
  ]
},
  {
  "id": "dbapage-portal",
  "title": "DBAPage",
  "category": "Learning Platform",
  "tagline": "Structured Learning. On Demand.",
  "year": "2024",
  "client": "TESDB Academy",
  "description": "A recorded video learning platform where administrators manage courses and video content while students access approved courses through a secure dashboard. The system includes account approval workflows, course-based video access, and inquiry management for prospective students.",
  "tech": ["React", "Django", "PostgreSQL", "SMTP Email", "REST API"],
  "color": "#b48fff",
  "colorDim": "rgba(180,143,255,0.08)",
  "colorBorder": "rgba(180,143,255,0.2)",
  "icon": "◇",
  "thumb": "/dbapage_thumb.jpg",
  "metrics": [
    { "val": "100+", "label": "Recorded Lessons" },
    { "val": "10+", "label": "Courses Hosted" },
    { "val": "Secure", "label": "Admin Approval Access" },
    { "val": "24/7", "label": "Learning Availability" }
  ],
  "pages": [
    {
      "title": "Course Management",
      "subtitle": "Admin control over learning content.",
      "body": "Administrators can create, edit, and delete courses directly from the admin dashboard. Each course contains multiple recorded lessons, descriptions, and structured learning paths to guide students through the content.",
      "img": "/dbapage/admin_course_ss.png",
      "caption": "",
      "insight": "All course content can be updated instantly from the admin panel."
    },
    {
      "title": "Video Content Management",
      "subtitle": "Organized recorded lessons for every course.",
      "body": "Admins upload and manage recorded video lessons for each course. Videos are organized into modules and topics, making it easy for students to navigate through structured learning material.",
      "img": "/dbapage/admin_videos_ss.png",
      "caption": "",
      "insight": "Admins maintain complete control over video learning resources."
    },
    {
      "title": "Student Registration System",
      "subtitle": "Secure student onboarding.",
      "body": "Students create accounts through the registration portal by submitting their details. Newly registered users remain pending until reviewed and approved by the administrator.",
      "img": "/dbapage/candidates_register_ss.png",
      "caption": "",
      "insight": "Admin approval ensures only verified students gain platform access."
    },
    {
      "title": "Admin Approval Workflow",
      "subtitle": "Controlled access to the learning portal.",
      "body": "Administrators review student registrations and approve or reject access requests. Once approved, the student receives login access to the learning dashboard.",
      "img": "/dbapage/admin_approval_ss.png",
      "caption": "",
      "insight": "Approval-based access keeps the learning environment secure."
    },
    {
      "title": "Student Dashboard",
      "subtitle": "Central learning hub for students.",
      "body": "After logging in, students access their personalized dashboard where they can view available courses, navigate lessons, and watch recorded training videos at their own pace.",
      "img": "/dbapage/candidates_login.png",
      "caption": "",
      "insight": "Students access all learning resources from a single interface."
    },
    {
      "title": "Course Access System",
      "subtitle": "Videos available only for approved courses.",
      "body": "Students can only view videos for the courses they have requested or been granted access to. This ensures controlled distribution of learning material and proper course management.",
      "img": "/dbapage/candidates_portal.png",
      "caption": "",
      "insight": "Course access is securely managed based on admin approval."
    },
    {
      "title": "Inquiry Management",
      "subtitle": "Customer communication made simple.",
      "body": "Visitors can submit inquiries through the contact form for course details or enrollment questions. These messages appear in the admin dashboard where administrators can review and reply to each inquiry.",
      "img": "/dbapage/admin_msgs_ss.png",
      "caption": "",
      "insight": "All customer inquiries are centrally managed within the system."
    }
  ]
},
  {
  "id": "dtechland-digital",
  "title": "Techland Solutions",
  "category": "Business Website",
  "tagline": "Digital Presence. Designed to Impress.",
  "year": "2024",
  "client": "Techland Solutions",
  "description": "A modern digital presence website built to showcase the company’s services, portfolio, and design capabilities. The platform highlights clean UI design, detailed service offerings, a client inquiry system, and a portfolio of completed digital products and web solutions.",
  "tech": ["React", "Vite", "Node.js", "Email Automation", "Responsive UI"],
  "color": "#ff6b9d",
  "colorDim": "rgba(255,107,157,0.08)",
  "colorBorder": "rgba(255,107,157,0.2)",
  "icon": "◎",
  "thumb": "/techland_thumb.jpg",
  "metrics": [
    { "val": "10+", "label": "Projects Showcased" },
    { "val": "100%", "label": "Responsive Design" },
    { "val": "24/7", "label": "Online Presence" },
    { "val": "Fast", "label": "Optimized Performance" }
  ],
  "pages": [
    {
      "title": "Modern Brand Presence",
      "subtitle": "A website that represents the company identity.",
      "body": "The website serves as the central digital identity for Techland Solutions. It introduces the company, its expertise in software development and digital products, and communicates its brand through a modern and visually appealing interface.",
      "img": "/techland/landing_ss.png",
      "caption": "",
      "insight": "A strong online presence builds credibility and trust with potential clients."
    },
    {
      "title": "UI & Design Experience",
      "subtitle": "A clean interface built for engagement.",
      "body": "The website features a visually rich and modern UI designed to deliver a smooth browsing experience. Carefully designed sections, animations, and layout structure ensure that visitors can easily navigate the platform and understand the company's capabilities.",
      "img": "/techland/UI_timer_ss.png",
      "caption": "",
      "insight": "A well-designed UI improves engagement and increases visitor retention."
    },
    {
      "title": "Service Showcase",
      "subtitle": "Clear presentation of company expertise.",
      "body": "The services section highlights the company’s offerings including web development, application development, digital solutions, and custom software systems. Each service is explained clearly so potential clients understand the solutions available to them.",
      "img": "/techland/service_ss.png",
      "caption": "",
      "insight": "Clear service descriptions help potential clients quickly understand available solutions."
    },
    {
      "title": "Client Inquiry System",
      "subtitle": "Direct communication with potential clients.",
      "body": "Visitors can submit inquiries through a structured contact form to request project discussions, service information, or quotations. All messages are stored and sent to the company through automated email notifications for quick response.",
      "img": "/techland/form_ss.png",
      "caption": "",
      "insight": "Inquiry forms streamline communication and capture potential business leads."
    },
    {
      "title": "Project Portfolio",
      "subtitle": "Showcasing real-world products and solutions.",
      "body": "The portfolio section displays completed projects and software solutions developed by the company. Each project highlights the product concept, technologies used, and the value delivered to clients.",
      "img": "/techland/portfolio_ss.png",
      "caption": "",
      "insight": "Real project showcases help establish credibility and technical capability."
    },
    {
      "title": "Responsive & Performance Optimized",
      "subtitle": "Fast, scalable, and accessible everywhere.",
      "body": "The platform is fully responsive and optimized for performance across devices including mobile phones, tablets, and desktops. Fast loading speeds and optimized assets ensure smooth browsing for visitors regardless of their device.",
      "img": "/techland/explainedportfolio_ss.png",
      "caption": "",
      "insight": "Performance optimization improves user experience and search visibility."
    }
  ]
},
  {
    id: "edupulse-lms",
    title: "EduPulse LMS",
    category: "Web Application",
    tagline: "Learning That Actually Works",
    year: "2023",
    client: "BrightPath Edtech, Chennai",
    description:
      "White-label LMS for a Chennai edtech startup. Live classes with WebRTC, AI doubt resolution, gamified progress, and parent dashboards — scaling from 200 to 12,000 students with a 4.9★ rating.",
    tech: ["React", "Django", "PostgreSQL", "WebRTC", "OpenAI API"],
    color: "#38e8ff",
    colorDim: "rgba(56,232,255,0.08)",
    colorBorder: "rgba(56,232,255,0.2)",
    icon: "❋",
    thumb: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&q=80",
    metrics: [
      { val: "12,000+", label: "Students" },
      { val: "96%", label: "Course Completion" },
      { val: "4.9★", label: "App Rating" },
      { val: "73%", label: "AI Doubt Resolution" },
    ],
    pages: [
      {
        title: "The Vision",
        subtitle: "Personal attention. At scale.",
        body: "An edtech founder wanted to take her 200-student offline coaching center pan-India — without losing the personal accountability that made her center successful. She needed a platform that felt intimate at 12,000 students. That's the hardest problem in online education, and it's exactly what we solved.",
        img: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=1200&q=80",
        caption: "From 200 students in one room to 12,000 students across India",
        insight: "Scaling 60× while maintaining a 4.9★ rating. That's the benchmark.",
      },
      {
        title: "Live Class Studio",
        subtitle: "Better than being in the room.",
        body: "HD WebRTC video classes with breakout rooms, live polls, shared whiteboards, and instant doubt-raising. The AI moderator auto-transcribes every class and generates chapter-wise summaries. Students who miss a live session get an AI catch-up brief in minutes. Attendance and engagement are tracked per minute, per student.",
        img: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?w=1200&q=80",
        caption: "Live studio — HD video, whiteboard, real-time engagement tracking",
        insight: "92% live class attendance rate. The industry average is 60%.",
      },
      {
        title: "AI Doubt Engine",
        subtitle: "No question goes unanswered. Ever.",
        body: "Students post doubts via text, image, or voice note. The AI resolves 73% of doubts instantly with step-by-step explanations tailored to the student's current level and syllabus position. The remaining 27% are routed to the right teacher based on subject and availability. Average resolution: 8 minutes, 24×7.",
        img: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?w=1200&q=80",
        caption: "AI doubt resolution — instant answers, step-by-step explanations, teacher escalation",
        insight: "73% AI resolution rate. Average doubt answer: 8 minutes, around the clock.",
      },
      {
        title: "Gamified Progress",
        subtitle: "Learning that feels like leveling up.",
        body: "Students earn XP for lessons, problems, and streaks. A leaderboard makes study competitive. Badges unlock at milestones. Streak freeze tokens prevent streak-break anxiety. The result: 96% course completion rate versus the online education average of 14%. Students aren't dropping out — they're competing to finish first.",
        img: "https://images.unsplash.com/photo-1553481187-be93c21490a9?w=1200&q=80",
        caption: "Gamification layer — XP system, streaks, leaderboard, milestone badges",
        insight: "96% course completion. The online ed average is 14%. That gap is the product.",
      },
      {
        title: "Parent & Teacher View",
        subtitle: "Everyone accountable. All the time.",
        body: "Parents see real-time progress, attendance, doubt history, and upcoming assessments. Weekly auto-generated progress reports are sent via WhatsApp on Sunday evenings. Teachers get per-student engagement analytics, identify at-risk students 2 weeks in advance, and plan adaptive remedial sessions accordingly.",
        img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
        caption: "Parent dashboard — real-time progress, attendance, auto-weekly reports",
        insight: "4.9★ from 3,200 reviews. The founder's NPS score is 87.",
      },
    ],
  },
];

export const SERVICES = [
  {
    icon: "⬡",
    title: "Web Applications",
    desc: "Complex, scalable platforms — CRMs, ERPs, dashboards, portals. We architect systems that handle millions of users without breaking a sweat.",
    features: ["Custom Architecture", "Real-time Data", "Role-based Access", "API Integrations"],
    color: "#a8ff57",
  },
  {
    icon: "◈",
    title: "Mobile Applications",
    desc: "Native-feel cross-platform apps for iOS and Android. From patient management to fleet tracking — mobile experiences people actually use daily.",
    features: ["iOS & Android", "Offline-first", "Push Notifications", "Biometric Auth"],
    color: "#2dffc3",
  },
  {
    icon: "◉",
    title: "Business Websites",
    desc: "Your website is your best salesperson. We design high-converting sites that generate leads, build trust, and make competitors look amateur.",
    features: ["Conversion-optimized", "CMS Integration", "SEO-ready", "Analytics"],
    color: "#ffb830",
  },
  {
    icon: "◆",
    title: "CRM & ERP Systems",
    desc: "Replace spreadsheet chaos with intelligent business tools. Custom-built to your exact workflow — not the other way around.",
    features: ["Workflow Automation", "Custom Reports", "Multi-user Roles", "SMS & Email Triggers"],
    color: "#b48fff",
  },
  {
    icon: "◇",
    title: "E-Commerce Platforms",
    desc: "High-performance storefronts built to scale. From D2C brands to B2B catalogues — commerce engines that turn traffic into revenue.",
    features: ["Custom Storefront", "Inventory Sync", "Payment Gateway", "Cart Recovery"],
    color: "#ff6b9d",
  },
  {
    icon: "◎",
    title: "UI/UX Design",
    desc: "Design that makes users lean forward. Every pixel serves a purpose. Complex workflows become intuitive experiences that feel effortless.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "#38e8ff",
  },
];
