import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ items, setCurrentItem }: any) => {
  const [itemOffset, setItemOffset] = useState<number>(0);
   const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10;
  const endOffset = itemOffset + itemsPerPage;
  const currentItems = items.slice(itemOffset, endOffset);

  useEffect(() => {
    setCurrentItem(currentItems);
  }, [itemOffset, endOffset,items]);
  const pageCount = Math.ceil(items.length / itemsPerPage);
  const handlePageClick = (event: any) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    setItemOffset(newOffset);
  };

 

  return (
      <div className="ttttt">
        <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
      />
        </div>

      
  );
};
export default Pagination;

