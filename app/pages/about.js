var React = require('react');
import initTimeline from '../helper/timeline';

var about = React.createClass({
	componentDidMount: function() {
		var timelines = $('.cd-horizontal-timeline'),
			eventsMinDistance = 150;

		(timelines.length > 0) && initTimeline(timelines);
	},
	render: function() {
		console.log(this.props.contents["About Us  - 2015 - 2016"])
		return (
			<div>
			<section className="cd-horizontal-timeline container-full">
			  <div className="container">
			  	<h1>What is Tools With Impact</h1>
			  	<p>Tools With Impact is a fully student-run non-profit organization dedicated to combating poverty in developing nations. Tools With Impact's current mission is to support underprivileged students by providing them with the necessary school supplies and equipment they need to attend and succeed in school. 
	  			<br/ >
	  			<br/ >
				Established in September of 2013, Tools With Impact's original mission was to support the local development of villages in Mozambique through the donation of hand tools and essential equipment for building infrastructure. Tools With Impact successfully raised $21,000 and collected over $65,000 worth of tools throughout the 2013/14 and 2014/15 school years. 
				<br />
				<br />
				Having raised enough tools to sufficiently supply many villages in Northern Mozambique, Tools With Impact's mission evolved last year to supporting underprivileged students. This is done through collection of donations which are then used to purchase school supplies overseas and help fund educational programs. Over 12 schools in Ottawa have worked together over the past few years to support underprivileged students in Mozambique, Mali and Ecuador. This year, Tools With Impact is forecasting to support  students in need from Costa Rica as well.</p>
			  </div>
			  <div className="container">
			  	<h1>Our Timeline</h1>
			  </div>
			  <div className="timeline">
			    <div className="events-wrapper">
			      <div className="events">
			        <ol>
			          <li><a href="#0" data-date="01/01/2013">2013-2014</a></li>
			          <li><a href="#0" data-date="01/01/2014">2014-2015</a></li>
			          <li><a href="#0" data-date="01/01/2015" className="">2015-2016</a></li>
			          <li><a href="#0" data-date="01/01/2016" className="selected">2016-2017</a></li>
			        </ol>
			        <span className="filling-line" aria-hidden="true"></span>
			      </div>
			    </div>
			    <ul className="cd-timeline-navigation">
			    </ul>
			  </div>
			  <div className="events-content container">
			    <ol>
			      <li className="selected" data-date="01/01/2016">
			        <h2>2016-2017</h2>
			        <div dangerouslySetInnerHTML={{__html: this.props.contents["About Us - 2016 - 2017"]}} />
			      </li>
			      <li className="" data-date="01/01/2015">
			        <h2>2015-2016</h2>
			        <div dangerouslySetInnerHTML={{__html: this.props.contents["About Us  - 2015 - 2016"]}} />
			        <br />
			      </li>

			      <li data-date="01/01/2014">
			        <h2>2014-2015</h2>
			        <p>
			        Having raised $3,000 and collected over $14,000 worth of hand tools and equipment in Tools With Impact's inaugural year, the students of Tools With Impact came into the 2014/15 school year with reaffirmed passion and dedication for the cause. Within just the first two months of the school year the student volunteers had already raised twice the amount of tools as the previous year. Witnessing the drastic impact that an increase of student support can have, the leaders of Tools With Impact began searching for students from other high schools who would be interested in establishing Tools With Impact branches. New clubs were formed at Bell High School and St. Pius X High School, tripling the number of Tools With Impact members. Thanks to this growth, the students of Tools With Impact successfully raised $18,000 and collected more than $50,000 worth of tools over the course of the school year. Tools With Impact also received a Yamaha Generator which will be used in Mossuril, Mozambique to supply reliable power to the village's hospital. </p>
			        <br/>
			        <br/>
			        <p>The tools, which are now being shipped to Mozambique, will be partly used to further supply the already established "Tool-Lending Library" in Mossuril but primarily will be used to establish many new Tool Libraries in neighboring villages and communities. These libraries will give locals the means to build and repair their communities, ultimately giving them the tools required to help themselves. Having raised enough tools to fully supply Mossuril as well as many of its neighboring villages with the basic necessities needed for self-development, it was time for Tools With Impact to evolve its mission to target a new unmet need. Believing that a key to helping impoverished regions begins with education, "Tools With Impact's new mission leading into the 2015/2016 school year evolved into supporting and equipping underprivileged students with school supplies and educational equipment.
			        </p>
			      </li>

			      <li data-date="01/01/2013">
			        <h2>2013-2014</h2>
			        <p>
			          In 2011, the Graves family participated in a volunteer mission to Mossuril, Mozambique, one of the poorest regions in Africa. Their experiences fostered a strong connection with this impoverished community and furthered a commitment to making a difference. In their various volunteer roles, whether it was building a puppet theatre to promote malaria and aids awareness, digging a trench for a local garden, or building the first community oven, it became evident that the growth and development of the community was severely hindered by a profound lack of basic hand tools and equipment. How can one of the poorest communities in Africa possibly rise from poverty without access to the necessary tools needed to do so? It was this realization that empowered Matt and Zach Graves to subsequently develop Tools With Impact. Tools With Impact began as just a small initiative, originally consisting of just 20 students from Merivale High School, with the goal of supporting Mossuril's local development through the donation of hand tools and essential equipment. </p>
			        <br/>
			        <br/>
			          <p>The members of Tools With Impact met weekly at Merivale High School and discussed upcoming plans for projects and fundraising necessary to reach their goals. Vice-principal Mr. Hawes and the Merivale High school staff were incredibly supportive throughout Tools With Impact's inaugural year and helped allow the student's initiatives to flourish. In Tools With Impact's first year, the students were able to raise $3,000 and collected over $14,000 worth of hand tools. With these resources, and the on-site support of their partner, <a href="http://www.teranfoundation.org">The Teran Foundation</a>, Mossuril's first "Tool-Lending Library" was established, giving locals the access to high quality building and gardening equipment. The villagers are now able to access the tool library for both personal and community projects.
			          </p>
			      </li>
			    </ol>
			  </div>
			</section>
		    <section className="container-full" >
		        <div className="section-header" data-parallax="scroll" data-image-src="img/pic (32).JPG">
		            <div className="container">
		                <h1>How we started</h1>
		            </div>
		        </div>
		    </section>
			<section className="container">
			    <div className="row">
				    <div className="col-md-8">
				    	<p>In 2011, the Graves family participated in a volunteer mission to Mossuril, Mozambique, one of the poorest regions in Africa. Their experiences fostered a strong connection with this impoverished community and furthered a commitment to making a difference. In their various volunteer roles, whether it was building a puppet theatre to promote malaria and aids awareness, digging a trench for a local garden, or building the first community oven, it became evident that the growth and development of the community was severely hindered by a profound lack of basic hand tools and equipment. How can one of the poorest communities in Africa possibly rise from poverty without access to the necessary tools needed to do so? It was this realization that empowered Matt and Zach Graves to subsequently develop Tools With Impact. Tools With Impact began as just a small initiative, originally consisting of just 20 students from Merivale High School, with the goal of supporting Mossuril's local development through the donation of hand tools and essential equipment. Two years later, Tools With Impact is established at 12 schools in Ottawa and now has a new mission of supporting students in need by supplying them with school supplies and educational tools. </p>
				    </div>
				    <div className="col-md-4">
				        <img className="img-responsive" src="img/pic (33).JPG"/>
				    </div>
			    </div>
			  </section>
		  </div>
		);
	}

});

module.exports = about;