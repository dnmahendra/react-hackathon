import React from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';

var RCPageNumber = React.createClass({

  render: function() {
    var pageClass = "page";
    if (this.props.page === this.props.currentPage) {
      pageClass += " active";
    }
    return (
      <li className={pageClass}>
        <a href={this.props.page}>{this.props.page}</a>
      </li>
    )
  }
})

var RCPagination = React.createClass({
  getTotalPage: function() {
    var total = this.props.total;
    var size = 25;

    return Math.ceil(total / size);
  },

  componentWillMount: function() {
      return this.getTotalPage();
  },

  render: function() {
    var pages = [];
    var totalPages = this.getTotalPage();
    for (var i = 1; i <= totalPages; i++) {
      pages.push(<RCPageNumber page={i} currentPage={1}/>)
    }

    return (
      <div className="pullout">
        <div className="pull-right">
          <ReactPaginate previousLabel={"prev"}
                         previousClassName={"prev"}
                         nextLabel={"next"}
                         breakLabel={<li className="break"><a href="">...</a></li>}
                         pageNum={totalPages}
                         marginPagesDisplayed={2}
                         pageRangeDisplayed={5}
                         containerClassName={"pagination"}
                         subContainerClassName={"pages pagination"}
                         activeClassName={"active"} />
        </div>
        <span className='p'>
          Now showing
          <strong> 176 </strong>
          of
          <strong> 176 </strong>
          cards
        </span>
      </div>
    );
  }
});

export default RCPagination;
