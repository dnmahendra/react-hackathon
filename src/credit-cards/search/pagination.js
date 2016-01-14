import React from 'react';
import ReactDOM from 'react-dom';

var RCPageNumber = React.createClass({
  render: function() {
    return (
      <li className="page">
        <a href={"/credit-cards/search?clicked_item=all_credit_cards_landing&amp;page=" + this.props.page }>{this.props.page}</a>
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
      pages.push(<RCPageNumber page={i}/>)
    }

    return (
      <div className="pullout">
      <div className="pull-right">
        <ul className="pagination">

          <li className="page active">
            <a href="javascript:void(0)">1</a>
          </li>

          {pages}

          <li className="page gap disabled"><a href="javascript:void(0)">&hellip;</a></li>


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
