// =================
// Animation control
// =================

var conceal = function() {
    $body.addClass('slide-out');
}

var concealComplete = function() {
    $body.removeAttr('class');
    loadData();
}

var reveal = function() {
    $body.addClass('bring-in');
}

var revealComplete = function() {
    // the reveal is complete, animations done. Set the length of time the "slide" should be visible for:
    timeoutID = window.setTimeout(conceal, 5000);
    //console.log(timeoutID);
}


// ===================
// Loading new content
// ===================

var loadData = function() {
    console.log("load data");
    // change text / load data - cheating with yet another timeout for the time being
    currentExemplar++;
    if (currentExemplar === exemplars.length) {
        currentExemplar = 0;
    }
    renderTemplate(exemplars[currentExemplar]);
}


// ===============================================
// Data
// This may well change to async loading I am sure
// ===============================================

var currentExemplar = 0;
var exemplars = [
    {
        crest: "assets/images/crest-DoT.svg",
        number: 9,
        title: "View driving record",
        status: "beta",
        intro: "If you’re a driver you’ll be able to view information from your record, including what vehicles you can drive and any penalty points and disqualifications",
        url: "www.gov.uk/view-driving-licence"
    },
    {
        crest: "assets/images/crest-DoT.svg",
        number: 20,
        title: "This is a test",
        status: "live",
        intro: "If you’re a driver you’ll be able to view information from your record, including what vehicles you can drive and any penalty points and disqualifications",
        url: "www.gov.uk/view-driving-licence"
    }
];


// ========================
// Template
// Well isn't mustache fun?
// ========================

var renderTemplate = function(obj) {
    console.log("render template");
    var rendered = Mustache.render(template, obj);
    $('#template-target').html(rendered);
    timeoutID = window.setTimeout(reveal, 500);
}


// ===================================================
// Init
// • add listeners for css animation
// • store an element in jQuery
// • do a weird tiny pause to kick off first animation
// ===================================================

$(function(){

    $body = $('body');
    template = $('#template').html();
    Mustache.parse(template);   // optional, speeds up future uses
    // render the first exemplar
    renderTemplate(exemplars[0]);

    // DOM elements to track
    $body.on('transitionend', '.cover', function(e) {
        e.preventDefault();
        // make sure you only pick ONE property to fire. Otherwise there are multiples.
        if (e.originalEvent.propertyName == 'height') {
            concealComplete();
        }
    });

    $body.on('transitionend', '.last-to-show', function(e) {
        e.preventDefault();
        // make sure you only pick ONE property to fire. Otherwise there are multiples.
        if (e.originalEvent.propertyName == 'opacity') {
            revealComplete();
        }
    });

    // not sure why I need to stall like this for the animation to run, but I do.
    //timeoutID = window.setTimeout(reveal, 1);
    //console.log(timeoutID);

});