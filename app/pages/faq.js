var React = require('react');
import FAQ from "./component/faq_section"

var faq = React.createClass({

	getInitialState: function() {
		return {
			faqs:{
		        "What is Tools With Impact?":"Tools With Impact is a fully student-run non-profit organization dedicated to combating poverty in developing nations. Tools With Impact's current mission is to support underprivileged students by providing them with the necessary school supplies and equipment they need to attend and succeed in school. \
		        <br/><br/>Established in September of 2013, Tools With Impact's original mission was to support the local development of villages in Mozambique through the donation of hand tools and essential equipment for building infrastructure. Tools With Impact successfully raised $21,000 and collected over $65,000 worth of tools throughout the 2013/14 and 2014/15 school years. \
		        <br/><br/>Having raised enough tools to sufficiently supply many villages in Northern Mozambique, Tools With Impact's mission evolved this year to supporting underprivileged students. This is done through collection of donations which are then used to purchase school supplies overseas. Tools With Impact now has branches at 12 schools in Ottawa which have worked together throughout the current school year and have already raised over $20,000 for underprivileged students in Mozambique, Mali and Ecuador.",

		        "Do you still collect hand tools?":"Tools With Impact now only accepts cash and cheque donations. After two years in operation, Tools With Impact had raised a sufficient amount of tools and equipment for the villages and communities in which it has contacts with in Northern Mozambique. Therefore, Tools With Impact has stopped collecting hand tools. Our current mission is now to support students with school supplies that will be purchased directly from companies in Mozambique, Mali and Ecuador. This will help to both stimulate the local economies and allow Tools With Impact to avoid having to pay shipping fees as it has had to do in the past with the shipment of the hand tools.",
		        "Who has Tools With Impact helped?":"In Tools With Impact's first year (2013/14), $3,000 was raised and over $14,000 worth of hand tools was collected. These resources were sent to Mossruil Mozambique, where Tools With Impact's on-site partners, The Teran Foundation, resides. With the help of the Teran Foundation, Tools With Impact successfully established Mossuril's first “Tool-Lending Library”, giving locals access to high quality building and gardening equipment. \
		        <br/><br/> \
		        The following year (2014/15) Tools With Impact raised $18,000 and collected more than $50,000 worth of tools, which are now being sent to Mozambique. The tools will be used to establish many new Tool Libraries in neighbouring villages and communities. Tools With Impact also received a Yamaha Generator which will be used in Mossuril to supply reliable power to the village's hospital. \
		        <br/><br/> \
		        Tools With Impact's new mission, as of the start of this year (2015/16), became to equip students in need with school supplies. The Teran Foundation will work with Tools With Impact to facilitate the purchasing and delivery of supplies to schools in Northern Mozambique. A new partner organization, The Tandana Foundation, will also work with Tools With Impact to facilitate the purchasing and delivery of supplies to schools in Mali and Ecuador, where the Tandana Foundation operates. Tools With Impact currently has ties with 52 schools in Mozambique through The Teran Foundation and additional schools in Mali and Ecuador.",
		        "What are the Teran Foundation and Tandana Foundation?":"The Teran Foundation and Tandana Foundation are both intermediaries for Tools With Impact who have agreed to help facilitate the purchasing and delivery of school supplies to underequipped schools. The Teran Foundation was founded by Lisa St Aubin de Teran and operates in Mozambique. The Tandana Foundation was founded by Anna Taft and operates in Ecuador and Mali.",
		        "Do I get tax receipts for donating? Is TWI registered as a charity?":"As of now, Tools With Impact is currently in the stages of registering as a charity under the Canadian Revenue Agency. As it is a long process, Tools With Impact has not yet been registered, but still continues its fundraisers as a non-profit organization. All the members of Tools With Impact are volunteers and 100% of the donations Tools With Impact receives are put towards our mission of aiding unprivileged students. Though the organization is non-profit, as it is not yet registered as a charity, making Tools With Impact unfortunately unable to offer tax receipts at this time."
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