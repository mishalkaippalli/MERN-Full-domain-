let employees = [
  {
    id: 101,
    name: "Arun Kumar",
    department: "Engineering",
    role: "Backend Developer",
    salary: 75000,
    joiningYear: 2021,
    isActive: true,
    projects: [
      {
        projectId: "P101",
        name: "Payment Gateway",
        client: "FinCorp",
        hours: 120,
        status: "Completed",
        technology: ["Node.js", "MongoDB"],
        rating: 4.5
      },
      {
        projectId: "P102",
        name: "Fraud Detection System",
        client: "SecureBank",
        hours: 200,
        status: "Ongoing",
        technology: ["Python", "Machine Learning"],
        rating: 4.8
      }
    ]
  },

  {
    id: 102,
    name: "Meera Nair",
    department: "Frontend",
    role: "React Developer",
    salary: 68000,
    joiningYear: 2022,
    isActive: true,
    projects: [
      {
        projectId: "P103",
        name: "Trading Dashboard",
        client: "TradeX",
        hours: 150,
        status: "Completed",
        technology: ["React", "Redux"],
        rating: 4.6
      },
      {
        projectId: "P104",
        name: "Portfolio Tracker",
        client: "InvestPro",
        hours: 90,
        status: "Completed",
        technology: ["React", "Chart.js"],
        rating: 4.2
      }
    ]
  },

  {
    id: 103,
    name: "Rahul Menon",
    department: "Engineering",
    role: "Full Stack Developer",
    salary: 82000,
    joiningYear: 2020,
    isActive: false,
    projects: [
      {
        projectId: "P105",
        name: "Loan Management System",
        client: "MoneyCare",
        hours: 250,
        status: "Completed",
        technology: ["Node.js", "Angular", "MySQL"],
        rating: 4.9
      },
      {
        projectId: "P106",
        name: "KYC Automation",
        client: "BankSecure",
        hours: 180,
        status: "Ongoing",
        technology: ["Node.js", "OCR"],
        rating: 4.4
      }
    ]
  }
];
// Calculate total hours worked by each employee.

// Find the employee who worked the highest total hours.

// Find the average rating of projects for each employee.

// Get all projects that use "Node.js".
// let result = employees.flatMap((emp) => emp.projects.filter((item) => 
// item.technology.includes("Node.js")))
// console.log(result)

// Find total hours spent on "Ongoing" projects across all employees.
let result = employees.map((emp) => emp.projects.reduce((acc, curr) => {
    if(curr.status === "Ongoing"){
        acc+=curr.hours
    }
    return acc
    },0
))
console.log("total hours", result)