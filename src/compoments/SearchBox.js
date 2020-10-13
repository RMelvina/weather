import React from 'react'

function SearchBox(props) {
    return (
        <section>
        <div className="container pt-5">
            <input type="text" className="search_box" placeholder="Search" 
            value={props.value} 
            onChange={props.onChange}/>
            <span className="search_icon"><button className="btn" onClick={props.onClick} style={{
                visibility: props.showBtn ? 'visible' : 'hidden'
            }} >
            <i className="fa fa-search" ></i>
            </button>
                </span>
     
            {/* <button className="btn">Search</button> */}

        </div>
    </section>
    )
}

export default SearchBox
