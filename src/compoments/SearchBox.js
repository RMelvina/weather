import React from 'react'

function SearchBox(props) {
    return (
        <section className="container-fluid">
            <h1 className="main_heading">Weather</h1>

            <div className="container ">
               <div className="row">
                   <div className="col-sm-12 col-12 ">
                   <input type="text" className="search_box" placeholder="Search Countries"
                    value={props.value}
                    onChange={props.onChange} />

                <span className="search_icon"><button className="btn search-btn" onClick={props.onClick}  >
                    <i className="fa fa-search"></i>
                </button>
                </span>
                   </div>
               </div>



            </div>

            {/* <div className="container pt-5">
            <input type="text" className="search_box"  placeholder="Search" 
            value={props.value} 
            onChange={props.onChange}/>

            <span className="search_icon"><button className="btn" onClick={props.onClick} style={{
                visibility: props.showBtn ? 'visible' : 'hidden'
            }} >
            <i className="fa fa-search"></i>
            </button>
                </span>
     
          

        </div> */}

        </section>
    )
}

export default SearchBox
