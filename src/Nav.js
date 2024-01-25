import React from "react";
import { Link } from "react-router-dom";

const Nav = ({ dogs }) => {
  return (
    <div>
      {dogs.map((d) => {
        return (
          <ul>
            <li>
              <Link to={`/dogs/${d.name.toLowerCase()}`}>{d.name}</Link>
            </li>
          </ul>
        );
      })}
    </div>
  );
};
export default Nav;
