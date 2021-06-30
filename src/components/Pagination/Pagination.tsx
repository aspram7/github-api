import React from "react";
import "./Pagination.css";

import prev from "../../assets/long-left-arrow.svg";
import next from "../../assets/long-right-arrow.svg";

interface IPaginationProps {
  navigatePage: (n: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ navigatePage }) => {
  return (
    <div className="pagination">
      <span onClick={() => navigatePage(-1)} className="prev disabled">
        <img src={prev} alt="prev" />
        Prev
      </span>
      <span onClick={() => navigatePage(1)} className="next disabled">
        Next
        <img src={next} alt="next" />
      </span>
    </div>
  );
};

export default Pagination;
