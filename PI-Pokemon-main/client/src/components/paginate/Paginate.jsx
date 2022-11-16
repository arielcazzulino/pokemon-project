/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Style from './Paginate.module.css'


export function Pagination ({pokemonsInPage, allPokemons, paginated, currentPage}){
    let pageNumber = []

    for (let i = 0 ; i < Math.ceil(allPokemons/pokemonsInPage); i++){
        pageNumber.push(i + 1)
    }

    return(
        <div className={Style.paginate}>
            <ul className={Style.paginateUl}>
                {
                    pageNumber?.map(num => (
                        <button key={num} className={currentPage === num ? Style.active : Style.button}>
                            <a onClick = { () => paginated(num)}> {num} </a>
                        </button>
                    ))
                }
            </ul>
        </div>
    )
}

export default Pagination;

