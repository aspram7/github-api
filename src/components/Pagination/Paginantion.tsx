import React from "react";

interface IPaginationProps {
    navigatePage(num: number): void
}

const Pagination: React.FC<IPaginationProps> = ({ navigatePage }) => {
    return (
          <div className="pagination">
          <span onClick={navigatePage(-1)} className="prev disabled">
            <img src="../assets/long-arrow-alt-left-solid.svg" alt="prev" />
            Prev
          </span>
          <span onClick={navigatePage(1)}  className="next disabled">
            Next
            <img src="../assets/long-arrow-alt-right-solid.svg" alt="next" />
          </span>
        </div>
    )
}

export default Pagination;