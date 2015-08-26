/*

This file contains all of the code running in the background that makes resumeBuilder.js possible. We call these helper functions because they support your code in this course.

Don't worry, you'll learn what's going on in this file throughout the course. You won't need to make any changes to it until you start experimenting with inserting a Google Map in Problem Set 3.

Cameron Pittman
*/


/*
These are HTML strings. As part of the course, you'll be using JavaScript functions
replace the %data% placeholder text you see in them.
*/
var HTMLheaderName = '<h1 id="name">%data%</h1>';
var HTMLheaderRole = '<span>%data%</span><hr/>';

var HTMLcontactGeneric = '<li class="flex-item"><span class="orange-text">%contact%</span><span class="white-text">%data%</span></li>';
/* var HTMLmobile = '<li class="flex-item"><span class="orange-text">mobile</span> <span class="white-text">%data%</span></li>';
var HTMLemail = '<li class="flex-item"><span class="orange-text">email</span> <span class="white-text">%data%</span></li>';
var HTMLtwitter = '<li class="flex-item"><span class="orange-text">twitter</span> <span class="white-text">%data%</span></li>';
var HTMLgithub = '<li class="flex-item"><span class="orange-text">github</span> <span class="white-text">%data%</span></li>';
var HTMLblog = '<li class="flex-item"><span class="orange-text">blog</span><span class="white-text">%data%</span></li>';
var HTMLlocation = '<li class="flex-item"><span class="orange-text">location</span> <span class="white-text">%data%</span></li>';
*/
var HTMLmobile = '<li class="flex-item"><a href="tel:%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-phone"></i></a></li>';
var HTMLemail = '<li class="flex-item"><a href="mailto:%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-envelope"></i></a></li>';
var HTMLtwitter = '<li class="flex-item"><a href="https://twitter.com/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-twitter"></i></a></li>';
var HTMLgithub = '<li class="flex-item"><a href="https://github.com/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-github-alt"></i></a></li>';
var HTMLlocation = '<li class="flex-item"><a href="https://www.google.com/maps/place/%data%" data-toggle="popover" data-content="%data%" data-placement="top"><i class="fa fa-location-arrow"></i></a></li>';


var HTMLbioPic = '<img src="%data%" class="biopic">';
var HTMLwelcomeMsg = '<span class="welcome-message">%data%</span>';

var HTMLskillsStart = '<h3 id="skillsH3">Skills at a Glance <span class="badge">%data2%</span></h3><ul id="skills" class="flex-box list-inline">%data%</ul>';
var HTMLskills = '<li class="flex-item-sk"><span class="white-text">%data%</span></li>';

var HTMLworkStart = '<div class="work-entry"></div>';
var HTMLworkEmployer = '<a href="#">%data%';
var HTMLworkTitle = ' - %data%</a><br>';
var HTMLworkDates = '<div class="date-text pull-left">%data%</div>';
var HTMLworkLocation = '<div class="location-text pull-right">%data%</div><br>';
var HTMLworkDescription = '<p class="pspace">%data%</p>';

var HTMLprojectStart = '<div class="col-sm-6 col-md-4 project-entry"></div>';
var HTMLprojectTitle = '<a href="%data2%">%data%</a>';
var HTMLprojectDates = '<div class="date-text">%data%</div>';
var HTMLprojectDescription = '<p><br>%data%</p>';
var HTMLprojectImage = '<img data-toggle="modal" data-target="%data2%" src="%data%">';

var HTMLschoolStart = '<div class="education-entry"></div>';
var HTMLschoolName = '<a href="#">%data%';
var HTMLschoolDegree = ' -- %data%</a><br>';
var HTMLschoolDates = '<div class="date-text pull-left">%data%</div>';
var HTMLschoolLocation = '<div class="location-text pull-right">%data%</div>';
var HTMLschoolMajor = '<em><br>Major: %data%</em>';
var HTMLschoolMinor = '<em><br>Minor: %data%</em>';
var HTMLschoolhighlight = '<div>Note: %data%</div>';

var HTMLactivitiesStart = '<div class="activities-entry"></div>';
var HTMLactivitiesTitle = '<div class="pull-left"><a href ="%data3%">%data%</a> - %data2%</div>';
var HTMLactivitiesDates = '<div class="date-text pull-right">%data%</div><br>';

var HTMLonlineClasses = '<h3>Online Classes</h3>';
var HTMLonlineTitle = '<a href="#">%data%';
var HTMLonlineSchool = ' - %data%</a>';
var HTMLonlineDates = '<div class="date-text">%data%</div>';
var HTMLonlineURL = '<br><a href="#">%data%</a>';

var internationalizeButton = '<button>Internationalize</button>';
var googleMap = '<div id="map"></div>';

// %data% id="myp1"
// %data2% aria-labelledby="myModalLabel1"
// %data3% src="http://image.png"
// %data4% <p>
// %data5% title

var HTMLmodalTemp = '<div class="modal fade" id="%data%" tabindex="-1" role="dialog" aria-labelledby="%data2%" aria-hidden="true">\
    <div class="modal-dialog">\
      <div class="modal-content">\
        <div class="modal-header">\
          <h4 class="modal-title" id="%data2%">%data5%</h4>\
        </div>\
        <div class="modal-body">\
  		<div class="text-center">\
  			<img class="img-thumbnail img-responsive" src="%data3%" alt="project 1 image">\
  		</div>\
  			<p>%data4%</p>\
        </div>\
        <div class="modal-footer">\
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>\
        </div>\
      </div>\
    </div>\
  </div>';


/*
The International Name challenge in Lesson 2 where you'll create a function that will need this helper code to run. Don't delete! It hooks up your code to the button you'll be appending.
*/
$(document).ready(function() {
  $('button').click(function() {
    var iName = inName() || function(){};
    $('#name').html(iName);
  });
});

/*
The next few lines about clicks are for the Collecting Click Locations quiz in Lesson 2.
*/
clickLocations = [];

function logClicks(x,y) {
  clickLocations.push(
    {
      x: x,
      y: y
    }
  );
  console.log('x location: ' + x + '; y location: ' + y);
}

$(document).click(function(loc) {
  // your code goes here!
});

var bio = {
  "name" : "Reyes Herrera, Jr",
  "role" : "Front-End Web Developer",
  "contacts": {
    "mobile" : "+15598698324",
    "email" : "reyesh@gmail.com",
    "github" : "reyesh",
    "twitter": "reyesh",
    "facebook": "http://www.facebook.com/reyesh",
    "googleplus": "http://plus.google.com/+reyesh",
    "linkedin": "http://www.linkedin.com/reyesh",
    "location": "Sunnyvale,+CA,+USA",
    "youtube": "https://www.youtube.com/user/Reyesh"
  },

  "skills" : [
    "HTML", "CSS" , "javaScript", "PHP", "MySQL","JSON", "JQuery", "bootstrap", "git/github", "Photoshop", "Illustrator", "Premiere", "IP networking", "Linux", "scripting (bash, perl, sed, awk)", "Windows", "Mac OS X"
  ],

  "bioPic": "images/fry.jpg",

  "msg" : [
    "Hi, I'm Reyes. I love coding.",
    "Hola, Me llamo Reyes. Me gusta la programacion" ,
    "I'm ready to be part of a team",
    "I like to solve problems",
    "I like to troubleshoot"
  ],
  "travels" : [
    "20.656031, -101.794904",
    "Cuerámaro, Mexico",
    "San Luis Potosi, Mexico",
    "Guanajuato, Gto. Mexico",
    "Colorines Rincón de La Bolsa, Álvaro Obregón, 01849 Mexico City, Federal District"
  ]
}

var work = {
  "jobs": [
    {
      "employer": "Lyft",
      "title": "Independent Contractor Driver",
      "date": "July 2014 - Present",
      "description": "A transportation networking company that facilitates peer-to-peer ridesharing by connecting passengers who need a ride with drivers who have a car.",
      "location": "San Francisco, CA, USA",
      "bPoints": "<ul><li>No incidents, no traffic violations</li><li>Five Star Driver!</li></ul>"

    },
    {

      "employer": "Smart Hospitality Corporation",
      "title": "Technical Support Engineer",
      "date": "Feb 2004 - Apr 2013",
      "description": "Smart Hospitality Corporation helps hotels enhance their guest experience and increase revenue with Digital In-room Entertainment systems",
      "location": "Visalia, CA, USA",
      "bPoints": "<ul>\
                    <li>Identifying/resolving any computer/network related issue by analyzing on or off site.</li>\
                    <li>Developed Automation Copying Software that formats and copies data to USB drives, reducing the time of the duplication process by 80%.</li>\
                    <li>Developed custom screens for hotel clients.</li>\
                    <li>Provided excellent customer support, 24/7 for 50 hotels in a team of three.</li>\
                  </ul>"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Interactive Resume",
      "dates": "May 2015",
      "description": "Interactive resume using javaScript, jQuery, JSON, and the bootstrap",
      "image": "../images/p1tn.png",
      "url": "https://github.com/reyesh/frontend-nanodegree-resume",
      "mdID": "myp1",
      "mdLabel": "myModalLabel1",
      "mdImage": "../images/200x600-resume.png",
      "mdDes": "Single-page, responsive application built with bootstrap framework, jquery and hosted on GitHub Pages. Developed scrolling message, project section expands according to your JSON object, added dynamic custom markers for the map based on places I lived and worked based on my JSON object."
    },
    {
      "title": "Classic Arcade Game Clone",
      "dates": "June 2015",
      "description": "With a game engine, and the visual assets I had to recreate the classic game Frogger",
      "image": "../images/arcade-tn.png",
      "url": "https://github.com/reyesh/frontend-nanodegree-arcade-game",
      "mdID": "myp2",
      "mdLabel": "myModalLabel2",
      "mdImage": "../images/600x200-arcade.png",
      "mdDes": "Clone of the classic game, Frogger. Udacity provided the art assets and game engine. Coded player, enemies, and other game entities in JavaScript's object-oriented pseudo-classical style. Created a new player from a sprite sheet from Legend of Zelda, and made the player’s movements animate, added levels, and music. Game can be played onlne at http://reye.sh/p3"
    },
    {
      "title": "Drawing with Random",
      "dates": "May 2015",
      "description": "JavaScript class to create randomize paintings using html5 canvas",
      "image": "../images/p3tn.png",
      "url": "https://github.com/reyesh/html5-canvas-drawing-with-random",
      "mdID": "myp3",
      "mdLabel": "myModalLabel3",
      "mdImage": "../images/200x600p3.png",
      "mdDes": "Used object oriented JS, functional class pattern with shared methods. Made use of requestAnimationFrame, and recursive functions."
    }
  ]
}

var education = {
    "schools": [
        {
            "name": "Fresno State University",
            "location": "Fresno, CA, USA",
            "degree": "BA",
            "date": "July 1998 - May 2003",
            "major": "Graphic Design",
            "minor": "Computer Science",
            "highlight": "Web Languages, Data Structures"
        },
        {
            "name": "O'Reily School of Technology",
            "location": "http://www.oreillyschool.com",
            "degree": "Certification",
            "date": "Jan 2013 - Nov 2013",
            "major": "Database Administration",
            "minor": "",
            "highlight": "Set up Mondrian OLAP server on home server"
        },
        {
            "name": "Udacity",
            "location": "Mountain View, CA, USA",
            "degree": "Nanodegree",
            "date": "March 2014 - Present",
            "major": "Front End Web Developer",
            "minor": "",
            "highlight": "Went beyond project requirments"
        }
    ]
}

var activities = {
    "activities": [
        {
            "title": "Udacity nanodegree hackathon",
            "level": "participant",
            "date": "April 2015",
            "url": "https://www.udacity.com/"
        },
        {
          "title": "SF day of civic hacking",
          "level": "volunteer",
          "date": "June 2015",
          "url": "http://hackathon.sfsu.edu/"
        },
        {
          "title": "JQuery SF 2015",
          "level": "volunteer",
          "date": "June 2015",
          "url": "http://jquerysf.com/"
        },
        {
          "title": "Make your Angular App a Maximum Security Prison",
          "level": "attendee",
          "date": "June 2015",
          "url": "https://plus.google.com/events/cvnt1o4c5ekca0do0a1ci2roof4?authkey=CPOlop2riP_-hwE&mkt_tok=3RkMMJWWfF9wsRols6vPZKXonjHpfsX/4uQvT/rn28M3109ad%2BrmPBy73YoJWp8na%2BqWCgseOrQ8ll0LV9ewRs0Uqaw="
        },
        {
          "title": "Fresno State Wine Label Content",
          "level": "winner",
          "date": "December 2001",
          "url": "http://www.fresnostatenews.com/2001/12/fresno-state-winery-honors-president-welty-two-with-to-new-wines-label-design-winnders-awarded/"
        }
    ]
}

work.display = function () {

  for (i in work.jobs){
    $("#workExperience").append(HTMLworkStart);
    formattedEmployer = HTMLworkEmployer.replace("%data%", this.jobs[i].employer);
    formattedTitle = HTMLworkTitle.replace("%data%", this.jobs[i].title);
    formattedDate = HTMLworkDates.replace("%data%", this.jobs[i].date);
    formattedLocation = HTMLworkLocation.replace("%data%", this.jobs[i].location);
    formattedDes = HTMLworkDescription.replace("%data%", this.jobs[i].description);
    formattedWork = formattedEmployer + formattedTitle + formattedDate + formattedLocation + formattedDes + this.jobs[i].bPoints;
    $(".work-entry:last").append(formattedWork);
  }
}

projects.display = function (){
//mdDes
  for (i in this.projects) {
    $("#projects").append(HTMLprojectStart);
    formattedTitle = HTMLprojectTitle.replace("%data%", this.projects[i].title);
    formattedTitle = formattedTitle.replace("%data2%", this.projects[i].url);
    formattedDate = HTMLprojectDates.replace("%data%", this.projects[i].dates);
    formattedDescription = HTMLprojectDescription.replace("%data%", this.projects[i].description);
    formattedImage = HTMLprojectImage.replace("%data%", this.projects[i].image);
    formattedImage = formattedImage.replace("%data2%", "#"+this.projects[i].mdID);
    formattedProject = formattedTitle + formattedDate + formattedDescription + formattedImage;
    $(".project-entry:last").append(formattedProject);
    //Adding the modal
    formattedModalTemp = HTMLmodalTemp.replace("%data%", this.projects[i].mdID);
    formattedModalTemp = formattedModalTemp.replace(/%data2%/g, this.projects[i].mdLabel);
    formattedModalTemp = formattedModalTemp.replace("%data3%", this.projects[i].mdImage);
    formattedModalTemp = formattedModalTemp.replace("%data4%", this.projects[i].mdDes);
    formattedModalTemp = formattedModalTemp.replace("%data5%", this.projects[i].title);
    $("body").append(formattedModalTemp);

    console.log(formattedModalTemp);
  }

}

activities.display = function (){

  var formattedTitle = "";
  var formattedDate = "";
  var formattedActvities = "";

  for (i in this.activities) {
    $("#activities").append(HTMLactivitiesStart);
    formattedTitle = HTMLactivitiesTitle.replace("%data%", this.activities[i].title);
    formattedTitle = formattedTitle.replace("%data2%", this.activities[i].level);
    formattedTitle = formattedTitle.replace("%data3%", this.activities[i].url);
    formattedDate = HTMLactivitiesDates.replace("%data%", this.activities[i].date);
    formattedActvities = formattedTitle + formattedDate;
    $(".activities-entry:last").append(formattedActvities);
  }

}

education.display = function () {


  for(i in this.schools){
    $("#education").append(HTMLschoolStart);
    formattedName = HTMLschoolName.replace("%data%", this.schools[i].name);
    formattedDegree = HTMLschoolDegree.replace("%data%", this.schools[i].degree);
    formattedDates = HTMLschoolDates.replace("%data%", this.schools[i].date);
    formattedLocation = HTMLschoolLocation.replace("%data%", this.schools[i].location);
    formattedMaj = HTMLschoolMajor.replace("%data%", this.schools[i].major);
    formattedMin = HTMLschoolMinor.replace("%data%", this.schools[i].minor);
    formattedHlight = HTMLschoolhighlight.replace("%data%",this.schools[i].highlight)
    formattedSchool = formattedName + formattedDegree + formattedDates + formattedLocation + formattedMaj + formattedMin + formattedHlight;
    $(".education-entry:last").append(formattedSchool);
  }
}

bio.displayContact = function(){

  for (i in bio.contacts){

      switch (i) {
        case "mobile":
            formattedMobile = HTMLmobile.replace(/%data%/g, bio.contacts[i]);
            break;
        case "email":
            formattedEmail = HTMLemail.replace(/%data%/g, bio.contacts[i]);
            break;
        case "github":
            formattedGH = HTMLgithub.replace(/%data%/g, bio.contacts[i]);
            break;
        case "twitter":
            formattedTW = HTMLtwitter.replace(/%data%/g, bio.contacts[i]);
            break;
        case "location":
            formattedLocation = HTMLlocation.replace(/%data%/g, bio.contacts[i]);
            break;
          }
  }

  formattedContacts = formattedMobile + formattedEmail + formattedGH + formattedTW + formattedLocation;
  $("#footerContacts").append(formattedContacts);
  //$("#topContacts").append(formattedContacts);
}

bio.display = function () {

 formattedName = HTMLheaderName.replace("%data%", this.name);
 formattedRole = HTMLheaderRole.replace("%data%", this.role);
 formattedBioPic = HTMLbioPic.replace("%data%", this.bioPic);
 formattedWelMsg = HTMLwelcomeMsg.replace("%data%", this.msg[1]);

 formattedSkills = "";
 for(i in this.skills){
   formattedSkills = formattedSkills +  HTMLskills.replace("%data%", this.skills[i]);
 }

 formattedSkillsStart = HTMLskillsStart.replace("%data%", formattedSkills);
 formattedSkillsStart = formattedSkillsStart.replace("%data2%", this.skills.length);

 // $("#header").prepend(formattedName + formattedRole);
 // foramttedHeader = formattedBioPic + formattedWelMsg + formattedSkillsStart;
 foramttedHeader = formattedSkillsStart;
 $("#header").append(foramttedHeader);

}

bio.msgDisplay = function (){
  var msg;
  var x = Math.floor(Math.random()*(bio.msg.length) + 1);
  msg = $("#bioMsg");
  msg.text(bio.msg[x])
}

setInterval(function(){ bio.msgDisplay() }, 5000);

work.display();
projects.display();
education.display();
bio.display();
bio.displayContact();
activities.display();

$( document ).ready(function(){
    $('[data-toggle="popover"]').popover({trigger: "hover"});
    console.log("ready!! ! !! ! !! ! !!");
});
