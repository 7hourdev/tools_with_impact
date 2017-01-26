import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

export default React.createClass({
	getInitialState: function() {
		return {
			contents: undefined
		};
	},
	componentDidMount: function() {
	  var self = this;
      $.ajax({
        url:"http://portal.7hourdev.com/api/site/64096ac4-40de-4787-9f52-268fa9054572",
        method:"get",
        success:function(data){
        	Object.keys(data.contents).map(function(item){
        		data.contents[item] = data.contents[item].content;
        	});
        	self.setState({contents:data.contents});
        }
      });
	},
	componentDidUpdate(){
		window.scrollTo(0,0);
		$('.section-header').parallax();
		setTimeout(function(){
			jQuery(window).trigger('resize').trigger('scroll'); 
		},500);
	},
	render() {
		var self = this;
		if (!self.state.contents){
			return <div />
		}
		return (
			<div>
				<Header/>
				{React.Children.map(this.props.children,
					(child) => React.cloneElement(child, {
						contents:self.state.contents,
					})
				)}
				<Footer/>
			</div>
		)
	}
})