import React from "react";
import "./Pagination.css";

import prev from "../../assets/long-left-arrow.svg";
import next from "../../assets/long-right-arrow.svg";

interface IPaginationProps {
  classNamePrev: string,
  classNameNext: string,
  navigatePage: (n: number) => void;
}

const Pagination: React.FC<IPaginationProps> = ({ classNamePrev, classNameNext, navigatePage }) => {
  return (
    <div className="pagination">
      <span onClick={() => navigatePage(-1)} className={`prev ${classNamePrev}`}>
        <img src={prev} alt="prev" />
        Prev
      </span>
      <span onClick={() => navigatePage(1)} className={`next ${classNameNext}`}>
        Next
        <img src={next} alt="next" />
      </span>
    </div>
  );
};

export default Pagination;
