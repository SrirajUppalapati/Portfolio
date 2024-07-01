import Card from "react-bootstrap/Card";
import { DiGithubBadge } from "react-icons/di";
import { FaLink } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Box({
  name,
  description,
  technologies,
  github = null,
  projectLink = null,
}) {
  return (
    <Card
      className={`w-full text-center p-2 mt-4 rounded-xl mx-auto bg-gray-900 text-slate-200 hover:bg-gray-700`}
    >
      <Card.Body className="space-y-2 p-2">
        <Card.Title className="uppercase text-xl p-1 bg-gray-800 rounded-xl hover:bg-gray-600">
          {name}
        </Card.Title>
        <Card.Text className="text-xs">{description}</Card.Text>

        <h1 className="text-sm p-2 uppercase bg-gray-800 rounded-xl hover:bg-gray-600">
          Technologies Used
        </h1>
        <Card.Text className="p-2">{technologies}</Card.Text>
      </Card.Body>
      <Card.Footer className="flex justify-center gap-4 p-2">
        {github && (
          <NavLink to={github} className="text-2xl">
            <DiGithubBadge />
          </NavLink>
        )}
        {projectLink && (
          <NavLink to={projectLink} className="text-sm pt-1">
            <FaLink />
          </NavLink>
        )}
      </Card.Footer>
    </Card>
  );
}

export default Box;
