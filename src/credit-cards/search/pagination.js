import React from 'react';
import ReactDOM from 'react-dom';

var RCPaginationButton = React.createClass({
  onClick: function() {
    this.props.onClick(this.props.page);
  },

  render: function() {
    var pageClass = "page";
    var label     = this.props.buttonLabel || this.props.page;

    if (this.props.page === this.props.currentPage && this.props.page !== undefined) {
      pageClass += " active";
    }
    return (
      <li className={pageClass}>
        <a onClick={this.onClick}>{label}</a>
      </li>
    )
  }
})

var RCPagination = React.createClass({
  pageClicked: function(page) {
    this.props.onPaginationChanged(page);
  },
  firstClicked: function(page) {
    this.props.onPaginationChanged(1);
  },
  prevClicked: function(page) {
    this.props.onPaginationChanged(this.props.currentPage - 1);
  },
  nextClicked: function(page) {
    this.props.onPaginationChanged(1);
  },
  render: function() {
    var totalPages = Math.ceil(this.props.totalRecords / this.props.pagesize);
    var selected = this.props.currentPage;
    var pageRangeDisplayed = 5;
    var pages = [];

    if (selected !== 1 && totalPages > 1) {
      // First Button
      pages.push(<RCPaginationButton buttonLabel="&laquo; First" onClick={this.firstClicked} key={-2} />)

      // Prev Button
      pages.push(<RCPaginationButton buttonLabel="&lsaquo; Prev" onClick={this.prevClicked} key={-1} />)
    }

    if (totalPages <= pageRangeDisplayed) {
      for (var index = 1; index <= totalPages; index++) {
        pages.push(<RCPaginationButton page={index} onClick={this.pageClicked} currentPage={selected} key={index} />)
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

      for (index = 1; index <= totalPages; index++) {
        if ((index >= selected - leftSide) && (index <= selected + rightSide)) {
          pages.push(<RCPaginationButton page={index} onClick={this.pageClicked} currentPage={selected} key={index} />)
          continue;
        }
      }
    }

    if (selected !== totalPages) {
      pages.push(
          <RCPaginationButton
            buttonLabel='Next &rsaquo;'
            onClick={() => {this.props.onPaginationChanged(selected + 1)}}
          />)

      pages.push(
          <RCPaginationButton
            buttonLabel='Last &raquo;'
            onClick={() => {this.props.onPaginationChanged(totalPages)}}
          />)
    }

    return (
      <div className="pullout">
        <div className="pull-right">
          <ul className="pagination">
            {pages}
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
