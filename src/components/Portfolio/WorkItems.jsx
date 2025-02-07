/* eslint-disable react/prop-types */
const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__description grid">
        <div className="work__stack">
          <strong>Tools:</strong> {item.tools}
          <br />
        </div>
        <p>{item.description}</p>
      </div>
      <div className="work__buttons">
        <a
          href={item.github}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
          >
            <title>GitHub</title>
            <path d="M12 .297a12 12 0 0 0-3.794 23.402c.6.111.82-.261.82-.579 0-.285-.01-1.04-.015-2-3.338.726-4.042-1.61-4.042-1.61-.546-1.386-1.333-1.754-1.333-1.754-1.09-.745.083-.73.083-.73 1.205.085 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.775.418-1.305.76-1.605-2.665-.305-5.466-1.335-5.466-5.932 0-1.31.465-2.38 1.235-3.22-.125-.303-.535-1.524.115-3.176 0 0 1.005-.322 3.3 1.23a11.512 11.512 0 0 1 3-.405 11.51 11.51 0 0 1 3 .405c2.28-1.552 3.285-1.23 3.285-1.23.655 1.652.245 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.624-5.475 5.92.43.37.815 1.102.815 2.222 0 1.606-.015 2.898-.015 3.293 0 .32.215.697.825.578A12.006 12.006 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .297" />
          </svg>
        </a>
        <a
          href={item.projectLink}
          className="work__button"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="32"
            height="32"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13.828 10.172a4 4 0 010 5.656m-1.414-1.414a2 2 0 010-2.828m3.536-3.536a4 4 0 015.656 5.656l-3.536 3.536a4 4 0 01-5.656 0m1.414-1.414a2 2 0 010-2.828"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
