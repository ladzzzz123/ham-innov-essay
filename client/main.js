/* ---------------------------------------------------- +/

## Main ##

/+ ---------------------------------------------------- */

Meteor.methods({
  goToByScroll: function ( id ) {
    
    $('html,body').animate({
        scrollTop: $(id).offset().top
      },'slow');

  }
});

Template.homepage.events({
  'click #leftCol a': function ( e , t ) {
    e.preventDefault();     
    
    var targetDiv = $(e.target).attr('href');

    Meteor.call('goToByScroll', targetDiv);
  }
});