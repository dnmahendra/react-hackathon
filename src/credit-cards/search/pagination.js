import React from 'react';
import ReactDOM from 'react-dom';

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
  render: function() {
    var totalPages = Math.ceil(this.props.totalRecords / 1);
    var selected = this.props.selected;
    var pageRangeDisplayed = 5;
    var pages = [];

    if (totalPages <= pageRangeDisplayed) {
      for (var i = 1; i <= totalPages; i++) {
        pages.push(<RCPageNumber page={i} currentPage={selected}/>)
      }
    } else {
      var leftSide  = (pageRangeDisplayed / 2);
      var rightSide = (pageRangeDisplayed - leftSide);

      if (selected > totalPages - pageRangeDisplayed / 2) {
        rightSide = totalPages - selected;
        leftSide  = pageRangeDisplayed - rightSide;
      }
      else if (selected < pageRangeDisplayed / 2) {
        leftSide  = selected;
        rightSide = pageRangeDisplayed - leftSide;
      }

      var index;
      var page;

      for (index = 1; index <= totalPages; index++) {
        var pageView = (
          <RCPageNumber page={index} currentPage={selected}/>
        );

        if ((index >= selected - leftSide) && (index <= selected + rightSide)) {
          pages.push(<RCPageNumber page={index} currentPage={selected}/>)
          continue;
        }
      }
    }

    return (
      <div className="pullout">
        <div className="pull-right">
          <ul className="pagination">
            <li className="first">
              <a href="#">&laquo; First</a>
            </li>

            <li className="prev">
              <a rel="prev" href="">&lsaquo; Prev</a>
            </li>

            {pages}

            <li className="next">
              <a rel="next" href="/credit-cards/search?clicked_item=all_credit_cards_landing&amp;page=2">Next &rsaquo;</a>
            </li>

            <li className="last">
              <a href="/credit-cards/search?clicked_item=all_credit_cards_landing&amp;page=8">Last &raquo;</a>
            </li>
          </ul>
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
