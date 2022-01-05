import React from 'react';
import ReactPaginate from 'react-paginate';

const Pagination = ({ info, pageNumber, setPageNumber }) => {
    return (
        <ReactPaginate
            pageCount={info?.pages}
            forcePage={pageNumber === 1 ? 0 : pageNumber - 1}
            className="pagination justify-content-center gap-3 py-5 mb-0 px-1"
            nextClassName="btn btn-outline-info"
            previousClassName="btn btn-outline-info"
            pageLinkClassName="btn btn-outline-info "
            activeLinkClassName="bg-info text-light"
            previousLinkClassName="text-light"
            nextLinkClassName="text-light "
            onPageChange={(data) => {
                setPageNumber(data.selected + 1)
            }}


        />
    )
}

export default Pagination
