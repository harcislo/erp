import React, { Dispatch, SetStateAction } from "react";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
interface IPagination {
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
  amount: number;
}

const PaginationUI: React.FC<IPagination> = React.memo(
  ({ active, amount, setActive }) => {
    let items = [];

    for (let number = 1; number <= amount; number++) {
      items.push(
        <PageItem
          onClick={(e) => {
            setActive(number);
          }}
          key={number}
          active={number === active}
        >
          {number}
        </PageItem>
      );
    }

    return <Pagination>{items}</Pagination>;
  }
);

export default PaginationUI;
