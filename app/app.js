import React from 'react'
import Header from './modules/header'
import Footer from './modules/footer'

export default React.createClass({
	componentDidUpdate(){
		window.scrollTo(0,0);
		$('.section-header').parallax();
		setTimeout(function(){
			jQuery(window).trigger('resize').trigger('scroll'); 
		},500);
	},
	render() {
		return (
			<div>
				<Header/>
				{this.props.children}
				<Footer/>
			</div>
		)
	}
})