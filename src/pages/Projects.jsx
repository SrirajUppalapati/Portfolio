import Box from "../ui/Box";

const tempProject = [
  {
    id: 1,
    name: "Budget Tracker",
    description:
      "Budget-Tracker is a personal finance management system using React for the frontend and Node.js with Express.js for the backend. It offers secure user authentication and allows users to manage income, expenses, and financial goals. Users can track income and expenses with detailed entries, perform CRUD operations, and set financial goals. The system supports basic and complex queries to calculate totals and analyze financial progress, displaying goal completion percentages based on income and expenses.",
    technologies:
      "React, HTML, CSS, Bootstrap, React Query, RestAPI, Node.js, Express.js, MongoDB",
    github: "https://github.com/SrirajUppalapati/Budget-Tracker",
    website: "",
  },
  {
    id: 2,
    name: "Pizza Store",
    description:
      "Pizza store is a wbsite for ordering pizzas with only frontend. You can simply input your name, phone number, and address to start ordering without needing an account. Our dynamic menu is always up-to-date, and you can add multiple pizzas to your cart. For faster delivery, mark your order as priority for an additional 20% of the cart price. You can even modify your order after placing it. Payment is made on delivery, so no credit card is needed. Each order receives a unique ID for easy tracking. Enjoy a hassle-free pizza ordering experience with Pizza Store!",
    technologies: "React, Redux, HTML, CSS",
    github: "https://github.com/SrirajUppalapati/Pizza-Store",
    website: "https://pizza-store-ten-snowy.vercel.app/",
  },
  {
    id: 3,
    name: "The Wild Oasis",
    description:
      "Welcome to The Wild Oasis website! This application is designed to help hotels efficiently manage their operations, including room bookings, customer information, staff management, and more. Utilizing modern web technologies and adhering to best practices in web development, The Wild Oasis offers a range of features: manage room availability, bookings, and cancellations, store and manage customer details and booking history; generate reports for occupancy rates, revenue, and other key metrics; and handle staff information and roles.",
    technologies:
      "React.js, HTML5, CSS3, React Hook Form, React Query, Styled Components, React Error Boundary, Recharts, Backend, JSFetch, Supabase",
    github: "https://github.com/SrirajUppalapati/The-Wild-Oasis",
    website: "https://the-wild-oasis-blond-gamma.vercel.app/",
  },
  {
    id: 4,
    name: "Redux Bank",
    description:
      "Redux Bank is a single-page application simulating basic banking operations using React.js and Redux for state management. Users can open and close accounts, deposit and withdraw money, and manage loans by adding or paying them off. Redux ensures a single source of truth for data across components, with actions and reducers handling state updates for all banking functions.",
    technologies: "React, Redux",
    github: "https://github.com/SrirajUppalapati/Redux-Bank",
    website: "https://redux-bank-sigma.vercel.app/",
  },
];

function Projects() {
  return (
    <div className="w-full min-h-screen bg-slate-900 pt-10 text-slate-200">
      {/* Container */}
      <h4 className="text-3xl text-center uppercase font-semibold animate-fade-in">
        Projects ({tempProject.length})
      </h4>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 p-4 animate-fade-in">
        {tempProject.map((curr, index) => (
          <Box
            name={curr.name}
            description={curr.description}
            technologies={curr.technologies}
            key={index}
            image={curr.image}
            github={curr.github}
            projectLink={curr.website}
          />
        ))}
      </div>
      <div className="flex flex-col justify-center items-center pb-10 animate-fade-in">
        <h4 className="text-4xl font-semibold">EXPERIENCE</h4>
        <div className=" h-full bg-slate-900 text-slate-200 lg:w-1/2">
          <Box
            name={"Savart"}
            description={
              "My experience in savart as a fullstack developer was to deploy scalable single-page application using the MERN stack for the client delight team, serving a broad user base exceeding 10,000 users. My expertise includes implementing robust state management with Redux and React Query, optimizing application performance through efficient CRUD operations and asynchronous data fetching. Our team have strengthened the applications security with JWT authentication, ensuring secure access control. Additionally, I have designed and implemented RESTful APIs with Node.js and Express.js, utilizing MongoDB for flexible data management and complex query handling. My approach emphasizes Agile/Scrum methodologies, facilitating iterative development and timely delivery of high-quality software to meet customer needs."
            }
            technologies={"curr.technologies"}
            projectLink={"https://savart.com/"}
          />
        </div>
      </div>
    </div>
  );
}

export default Projects;
