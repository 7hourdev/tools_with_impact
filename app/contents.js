import {observable, computed} from 'mobx';

class Contents {
  @observable contents = undefined;

  constructor(){
    this.getContent();
  }

  getContent(){
    var self = this;
    $.ajax({
      url:"https://portal.7hourdev.com/api/site/64096ac4-40de-4787-9f52-268fa9054572"
    })
    .done((content)=>{
      self.contents = Object.keys(content.contents).reduce((prev,el)=>{
        prev[el] = content.contents[el].content;
        return prev;
      },{});
      console.log(self.contents);
    })
  }
}

var singleton = new Contents();
export default singleton;
