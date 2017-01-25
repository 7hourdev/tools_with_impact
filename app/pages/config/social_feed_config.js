export default {
    // FACEBOOK
    facebook:{
        accounts: ['!toolswithimpact'],
        limit: 2,
        access_token: '1582676111982658|4e58346a0c3eff583bb681ebb3cf3252' // APP_ID|APP_SECRET
    },
    // TWITTER
    twitter:{
        accounts: ['@ToolsWithImpact'],
        limit: 2,
        consumer_key: '6t6NEJMUPSUbqpCy5aijWZ3nj', // make sure to have your app read-only
        consumer_secret: 'chMLH53kA3CQ4cpzXokqqiybebuj3N4dvh2bN3gd6HhCbqNZee', // make sure to have your app read-only
     },
    // GENERAL SETTINGS
    show_media:true,
    template: "template2.html",
    // Moderation function - if returns false, template will have class hidden
    moderation: function(content){
        return  (content.text) ? content.text.indexOf('fuck') == -1 : true;
    },
    //update_period: 5000,
    // When all the posts are collected and displayed - this function is evoked
    callback: function(){
        console.log('all posts are collected');
    }
}