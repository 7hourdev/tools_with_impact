var React = require('react');
import URL from '../helper/url';

export default class contact extends React.Component{
  componentDidMount() {
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 11,
        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(45.343755,-75.727991), // New York
        // How you would like to style the map.
        // This is where you would paste any style found on Snazzy Maps.
        styles: [{"featureType":"landscape","stylers":[{"hue":"#FFBB00"},{"saturation":43.400000000000006},{"lightness":37.599999999999994},{"gamma":1}]},{"featureType":"road.highway","stylers":[{"hue":"#FFC200"},{"saturation":-61.8},{"lightness":45.599999999999994},{"gamma":1}]},{"featureType":"road.arterial","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":51.19999999999999},{"gamma":1}]},{"featureType":"road.local","stylers":[{"hue":"#FF0300"},{"saturation":-100},{"lightness":52},{"gamma":1}]},{"featureType":"water","stylers":[{"hue":"#0078FF"},{"saturation":-13.200000000000003},{"lightness":2.4000000000000057},{"gamma":1}]},{"featureType":"poi","stylers":[{"hue":"#00FF6A"},{"saturation":-1.0989010989011234},{"lightness":11.200000000000017},{"gamma":1}]}]
    };
    // Get the HTML DOM element that will contain your map
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');
    // Create the Google Map using our element and options defined above
    if(mapElement!=null){
      var map = new google.maps.Map(mapElement, mapOptions);
      // Let's also add a marker while we're at it
      var marker = new google.maps.Marker({
          position: new google.maps.LatLng(45.343755,-75.727991),
          map: map,
          title: 'Merivale High School'
      });
      var contentString = 'Merivale High School';
      var infowindow = new google.maps.InfoWindow({
        content: contentString
      });
      marker.addListener('click', function() {
        infowindow.open(map, marker);
      });
    }
  }
  constructor(props){
    super(props);
    this.state = {
      submit:false
    };
  }
  submit(event) {
    var self = this;
    if(!this.state.submit){
      this.setState({submit:true});
      event.preventDefault();
      $.ajax({
        url:URL("/api/mail"),
        method:"post",
        data:{
          email:$("#email").val(),
          name:$("#name").val(),
          comments:$("#comments").val(),
        },
        success:function(data){
          $("#message").text(data.msg);
          window.scrollTo(0,0);
          if(data.error){
            self.setState({submit:false});
            $("#message").addClass("alert-warning");
            $("#message").removeClass("alert-success");
          }else{          
            $("#message").addClass("alert-success");
            $("#message").removeClass("alert-warning");
          }
        }
      });
    }
  }
  render() {
    var attr = <button onClick={this.submit.bind(this)} type="submit" id="submit" className="btn btn-primary submit-btn" disabled={this.state.submit} >Send message</button>;
    return (
      <div>
        <section className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Contact Us</h1>
              <p>Thanks for your interest! Feel free to drop off a message or email us at <a href="mailto:toolswithimpact@gmail.com">toolswithimpact@gmail.com</a>.</p>
              <br />
              <p>We greatly appreciate <a href ="/donate">Donations</a> of any sum, even a little bit can have a huge impact on a someone in need!</p>
            </div>
            <div className="col-md-6">
              <p id="message" className="alert"></p>
              <div className="form-group">
                <label>Name</label>
                <input type ="text" className="form-control" id = "name" name ="name" placeholder ="Name" required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input type ="email" className="form-control" id = "email" name ="email" placeholder ="Email" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea className="form-control" name ="msg" id="comments" placeholder ="Message" required></textarea>
              </div>
              {attr}
            </div>
          </div>
        </section>
        <section className="container-full" >
          <div className="section-header" data-parallax="scroll" data-image-src="img/pic (25).jpg">
            <div className="container">
              <h1>How Can I Help?</h1>
            </div>
          </div>
        </section>
        <section className="container" id ="join">
          <div className="row">
            <div className="col-md-8">
              <p>If you wish to donate to Tools With Impact, please click <a href ="/donate">here</a>.  You may also drop off any donations at Merivale High School (1755 Merivale Road). If you are a student that would like to join our cause, or know someone that might be interested, please feel free to contact Tools With Impact at <a href="mailto@toolswithimpact@gmail.com"> toolswithimpact@gmail.com </a> or through our <a href ="/contact">Contact Us</a> page. Tools With Impact is always excited for potential new branches at different schools!</p>
            </div>
            <div className="col-md-4" id="map">
            </div>
          </div>
        </section>
      </div>
    );
  }
};
