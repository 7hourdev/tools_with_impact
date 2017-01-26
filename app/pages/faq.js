var React = require('react');
import FAQ from "./component/faq_section"

var faq = React.createClass({

	getInitialState: function() {
		return {
			faqs:{
		        "Do you still collect hand tools?":"Tools With Impact now only accepts cash and cheque donations. After two years in operation, Tools With Impact had raised a sufficient amount of tools and equipment for the villages and communities in which it has contacts with in Northern Mozambique. Therefore, Tools With Impact has stopped collecting hand tools. Our current mission is now to support students with school supplies that will be purchased directly from companies in Mozambique, Mali and Ecuador. This will help to both stimulate the local economies and allow Tools With Impact to avoid having to pay shipping fees as it has had to do in the past with the shipment of the hand tools.",
		        "Who has Tools With Impact helped?":"In Tools With Impact's first year (2013/14), $3,000 was raised and over $14,000 worth of hand tools was collected. These resources were sent to Mossruil Mozambique, where Tools With Impact's on-site partners, The Teran Foundation, resides. With the help of the Teran Foundation, Tools With Impact successfully established Mossuril's first \"Tool-Lending Library\", giving locals access to high quality building and gardening equipment. \
		        <br /> <br /> \
				The following year (2014/15) Tools With Impact raised $18,000 and collected more than $50,000 worth of tools, which are now being sent to Mozambique. The tools will be used to establish many new Tool Libraries in neighbouring villages and communities. Tools With Impact also received a Yamaha Generator which will be used in Mossuril to supply reliable power to the village's hospital. \
				<br /> <br /> \
				Tools With Impact's new mission, as of the start of last year (2015/16), became to equip students in need with school supplies and help fund educational programs. The Teran Foundation worked with Tools With Impact to facilitate the purchasing and delivery of supplies to schools in Northern Mozambique. Another partner organization, The Tandana Foundation, also worked with Tools With Impact to facilitate the purchasing and delivery of supplies to schools in Mali and Ecuador, where the Tandana Foundation operates. The Tandana Foundation also helped facilitate the support of numerous educational programs in Ecuador and Mali.  Tools With Impact is currently working to expand to Costa Rica in addition to the current countries in which Tools With Impact operates.",
		        "What are the Teran Foundation and Tandana Foundation?":"The Teran Foundation and Tandana Foundation are both intermediaries for Tools With Impact who have agreed to help facilitate the purchasing and delivery of school supplies to underequipped schools. The Teran Foundation was founded by Lisa St Aubin de Teran and operates in Mozambique. The Tandana Foundation was founded by Anna Taft and operates in Ecuador and Mali.",
		        "Do I get tax receipts for donating? Is TWI registered as a charity?":"Though the organization is completely non-profit, as it is not registered as a charity, making Tools With Impact unfortunately unable to offer tax receipts. That being said, all the members of Tools With Impact are student volunteers and 100% of the donations Tools With Impact receives are put towards our mission of aiding unprivileged students."
        	}
		}
	},

	render: function() {
		var self = this;
		return (
			<section className="container">
				<h1>Frequently Asked Questions</h1>
				{Object.keys(this.state.faqs).map(function(item, index){
					return (
						<FAQ 
							key={index}
							header={item}
							value={self.state.faqs[item]}/>);
				})}
			</section>
		);
	}

});

module.exports = faq;