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
        crest: "assets/images/crest-co.svg",
        number: 1,
        title: "Electoral registration",
        status: "live",
        intro: "A digital service to make registering to vote simpler, clearer and faster",
        url: "www.gov.uk/register-to-vote",
        stat: "46m",
        statline: "confirmed in the first year"
    },
    {
        crest: "assets/images/crest-bis.svg",
        number: 2,
        title: "Apprenticeships applications",
        status: "beta",
        intro: "If you want to advertise or apply for an apprenticeship you’ll be able to do it quickly and easily online",
        url: "www.gov.uk/apply-apprenticeship",
        stat: "1.38m",
        statline: "applications per year"
    },
    {
        crest: "assets/images/crest-bis.svg",
        number: 3,
        title: "Redundancy payments",
        status: "beta",
        intro: "If you want to renew a patent you’ll be able to do it quickly and easily online",
        url: "",
        stat: "270k",
        statline: "transactions a year"
    },
    {
        crest: "assets/images/crest-bis.svg",
        number: 4,
        title: "Renew a patent",
        status: "live",
        intro: "If your company has recently become insolvent you’ll be able to apply for redundancy payment online",
        url: "www.gov.uk/renew-patent",
        stat: "380k",
        statline: "renewals per year"
    },
    {
        crest: "assets/images/crest-bis.svg",
        number: 5,
        title: "Land registry",
        status: "alpha",
        intro: "A digital-first service that will support buying or selling a house",
        url: "",
        stat: "",
        statline: ""
    },
    {
        crest: "assets/images/crest-bis.svg",
        number: 6,
        title: "Student finance",
        status: "live",
        intro: "If you have, or are applying for, student loans and grants you’ll be able to manage them using an improved online service",
        url: "www.gov.uk/apply-online-for-student-finance",
        stat: "1.3m",
        statline: "students supported"
    },
    {
        crest: "assets/images/crest-defra.svg",
        number: 7,
        title: "Waste carrier registration",
        status: "beta",
        publicbeta: "true",
        intro: "You can register as a waste carrier using this quick and easy online service",
        url: "www.gov.uk/waste-carrier-or-broker-registration",
        stat: "100k",
        statline: "registrations in first year"
    },
    {
        crest: "assets/images/crest-defra.svg",
        number: 8,
        title: "Rural support (Common Agricultural Policy)",
        status: "beta",
        intro: "You’ll be able to submit accurate and verifiable information online about how you use your land, so you can claim subsidies under the Common Agricultural Policy",
        url: "",
        stat: "105k",
        statline: "transactions a year"
    },
    {
        crest: "assets/images/crest-dot.svg",
        number: 9,
        title: "View driving licence",
        status: "beta",
        publicbeta: "true",
        intro: "If you’re a driver you’ll be able to view information from your record, including what vehicles you can drive and any penalty points and disqualifications",
        url: "www.gov.uk/view-driving-licence",
        stat: "6m",
        statline: "driver enquiries a year"
    },
    {
        crest: "assets/images/crest-dot.svg",
        number: 10,
        title: "Personalised registrations",
        status: "beta",
        intro: "If you want to transfer or apply for a number plate you’ll be able do it online, without having to visit a DVLA office",
        url: "",
        stat: "1.6m",
        statline: "transactions a year"
    },
    {
        crest: "assets/images/crest-dot.svg",
        number: 11,
        title: "Vehicle management",
        status: "beta",
        intro: "If you want to transfer ownership of a car you’ll be able to do it yourself online or using an intermediary",
        url: "",
        stat: "18m",
        statline: "transactions a year"
    },
    {
        crest: "assets/images/crest-dwp.svg",
        number: 12,
        title: "Carer’s allowance",
        status: "beta",
        publicbeta: "true",
        intro: "If you’re a carer you’ll be able to apply for financial help from government using a simple online service",
        url: "www.gov.uk/carers-allowance",
        stat: "3.2m",
        statline: "carers in the UK"
    },
    {
        crest: "assets/images/crest-dwp.svg",
        number: 13,
        title: "Claim personal independence payment (PIP)",
        status: "alpha",
        intro: "If you’re applying for financial help from government for living with disabilities there’ll be a simple digital service for you to use",
        url: "",
        stat: "2m",
        statline: "people supported"
    },
    {
        crest: "assets/images/crest-dwp.svg",
        number: 14,
        title: "Universal Credit",
        status: "beta",
        intro: "Universal Credit will roll 6 benefits and tax credits into 1 to simplify the system and ensure people are better off in work",
        url: "",
        stat: "10m",
        statline: "adults supported"
    },
    {
        crest: "assets/images/crest-hmrc.svg",
        number: 15,
        title: "PAYE for employees",
        status: "beta",
        intro: "If you want to check or update your PAYE status you’ll be able to do it online, and see the effect on the tax you pay",
        url: "",
        stat: "41m",
        statline: "registered PAYE employees"
    },
    {
        crest: "assets/images/crest-hmrc.svg",
        number: 16,
        title: "Digital self-assessment",
        status: "beta",
        publicbeta: "true",
        intro: "If you’re registered for self-assessment you’ll be able to manage your tax with a fully digital service, without any more confusing paper correspondence",
        url: "",
        stat: "10m",
        statline: "registered for self-assessment"
    },
    {
        crest: "assets/images/crest-hmrc.svg",
        number: 17,
        title: "Your tax account",
        status: "beta",
        publicbeta: "true",
        intro: "If you run a business you’ll be able to check how much tax you owe, learn about what you can and can’t claim, and pay your tax &mdash; all in one place",
        url: "",
        stat: "4.9m",
        statline: "small businesses and people in self assessment"
    },
    {
        crest: "assets/images/crest-hmrc.svg",
        number: 18,
        title: "Agent online self-serve",
        status: "alpha",
        intro: "If you’re a tax agent you’ll be able to fully manage your clients’ tax with a simple online service",
        url: "",
        stat: "120k",
        statline: "tax agents"
    },
    {
        crest: "assets/images/crest-ho.svg",
        number: 19,
        title: "Registered traveller service",
        status: "beta",
        intro: "If you’re an eligible, frequent traveller to the UK you’ll be able to easily apply to use e-passport gates, cutting time queuing at airports",
        url: "",
        stat: "1m",
        statline: "journeys per year within 5 years"
    },
    {
        crest: "assets/images/crest-ho.svg",
        number: 20,
        title: "Passports",
        status: "beta",
        intro: "If you need to renew your passport you’ll be able to do it using a simple online service",
        url: "",
        stat: "",
        statline: ""
    },
    {
        crest: "assets/images/crest-ho.svg",
        number: 21,
        title: "Visas",
        status: "beta",
        publicbeta: "true",
        intro: "If you need a visa to visit the UK you’ll be able to apply using a simple online service",
        url: "",
        stat: "3.4m",
        statline: "visas issued a year"
    },
    {
        crest: "assets/images/crest-moj.svg",
        number: 22,
        title: "Civil claims",
        status: "live",
        intro: "Saving people money and hassle by creating a digital service for small claims, including money and possession claims",
        url: "",
        stat: "1.5m",
        statline: "claims a year"
    },
    {
        crest: "assets/images/crest-moj.svg",
        number: 23,
        title: "Apply to an employment tribunal",
        status: "beta",
        publicbeta: "true",
        intro: "If you’re lodging an appeal to an employment tribunal you’ll be able to apply and pay the accompanying fee online",
        url: "",
        stat: "200k",
        statline: "transactions per year"
    },
    {
        crest: "assets/images/crest-moj.svg",
        number: 24,
        title: "Prison visit booking",
        status: "live",
        publicbeta: "true",
        intro: "If you’re visiting a prison you’ll be able to book using a single service, offering a simpler, faster experience for families, friends and professionals",
        url: "www.gov.uk/prison-visits",
        stat: "1.5m",
        statline: "visits per year"
    },
    {
        crest: "assets/images/crest-moj.svg",
        number: 25,
        title: "Lasting power of attorney",
        status: "live",
        intro: "If you’re making a lasting power of attorney, it’ll be easier using a simple online service, helping people to plan ahead for an uncertain future",
        url: "www.gov.uk/lasting-power-of-attorney",
        stat: "300k",
        statline: "applications a year"
    }
];


// ========================
// Template
// Well isn't mustache fun?
// ========================

var renderTemplate = function(obj) {
    //console.log("render template");
    /*var rendered = Mustache.render(template, obj);
    $('#template-target').html(rendered);*/
    $("#template-target").html(template(obj));

    timeoutID = window.setTimeout(reveal, 500);

    if (obj.stat === "") {
        $('#circle-cover').css({
            visibility: 'visible'
        })
    } else {
        $('#circle-cover').css({
            visibility: 'hidden'
        })
    }
}


// ===================================================
// Init
// • add listeners for css animation
// • store an element in jQuery
// • do a weird tiny pause to kick off first animation
// ===================================================

$(function(){

    $body = $('body');
    //template = $('#template').html();
    //Mustache.parse(template);   // optional, speeds up future uses

    source = $("#template").html();
    template = Handlebars.compile(source);

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