'use client'

export const PaginationComponent = () => {

    let page = "1";
    let currentPage = Number(page || '1');
    console.log(currentPage)

    return (
        <div>
            <button onClick={() => {
                if(currentPage > 1) {
                    page = (--currentPage).toString();
                    console.log(currentPage)
                }
            }}>prev</button>
            <button onClick={() => {
                page = (++currentPage).toString();
                console.log(currentPage)
            }}>next</button>
        </div>
    );

};