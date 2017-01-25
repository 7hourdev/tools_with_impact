var React = require('react');

var sponsors = React.createClass({

	render: function() {
		return (
		<div>
			<section className="container">
		        <h1>Thank you to all our sponsors!</h1>
				<p>Please <a href="contact.php"> contact us </a> or e-mail <b> toolswithimpact@gmail.com </b> if you wish to help our cause and sponsor!</p>
		        <br />
		        <div className="sponsors row">
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/dymon.jpg" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/kiwanis-nepean.png" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/kiwanis-ottawa.png" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/urban.jpg" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/PCL.jpg" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/preston.png" />
		            </div>
		            <div className="col-md-3">
		                <img className="img-responsive" src="img/sponsors/7hourdev.png" />
		            </div>
		        </div>
			</section>

		    <section className="container-full" >
		        <div className="section-header" data-parallax="scroll" data-image-src="img/pic (17).JPG">
		            <div className="container">
		                <h1>Our intermediaries in Mozambique, Mali and Ecuador</h1>
		            </div>
		        </div>
		    </section>
		    <section className="container">
		        <div className="row">
		            <div className="col-md-6">
		                <a href="http://www.teranfoundation.org">
		                    <img className="img-responsive" style={{width:"80%"}} src="img/sponsors/teran.jpg" />
		                    <h1>Teran Foundation</h1>
		                </a>
		            </div>
		            <div className="col-md-6">
		                <a href="http://www.tandanafoundation.org/main_page.html">
		                    <img className="img-responsive" src="img/sponsors/tandana.png" />
		                </a>
		            </div>
	            </div>
		    </section>
		</div>
		);
	}

});

module.exports = sponsors;