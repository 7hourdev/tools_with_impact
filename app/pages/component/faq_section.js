var React = require('react');

var faq_section = React.createClass({

	render: function() {
		return (
			<div className="panel panel-default faq">
			  <div className="panel-heading"><h4>{this.props.header}</h4></div>
			  <div className="panel-body">
			  	<p dangerouslySetInnerHTML={{__html:this.props.value}} />
			  </div>
			</div>
		);
	}

});

module.exports = faq_section;