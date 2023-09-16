import { Bar } from './nav-bar.style';
import {
  FaHome,
  FaChartPie,
  FaCartPlus,
  FaTshirt,
  FaUser,
} from 'react-icons/fa';

import { Link } from 'react-router-dom';

export const Navbar = function () {
  return (
    <>
      <Bar>
        <Link to="/" >
          <FaHome className="icons" />
        </Link>
        <Link to="/financier">
          <FaChartPie className="icons" />
        </Link>
        <Link to="/orders">
          <FaCartPlus className="icons" />
        </Link>
        <Link to="/products">
          <FaTshirt className="icons" />
        </Link>
        <Link to="/clients">
          <FaUser className="icons" />
        </Link>
      </Bar>
    </>
  );
};
