/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║             SITE CONTENT — EDIT FREELY HERE                 ║
 * ║  All text, images, videos and numbers live in this file.    ║
 * ║  No coding knowledge needed — just change the values.       ║
 * ╚══════════════════════════════════════════════════════════════╝
 *
 *  QUICK GUIDE FOR EDITORS:
 *  • Brand Name    → Your Name or Agency (e.g. "COMZE")
 *  • Profile Image → Put your photo in the folder and write its name here.
 *  • Videos        → Just copy the YouTube link or just the ID (e.g. "Xj0Jtjg3lHQ").
 *  • Creators      → Use their YouTube name and the link to their channel.
 *  • Stats & Price → Change the numbers directly.
 *
 *  AI-ASSISTANT TIP:
 *  Tell the AI: "Update my portfolio with these YouTube links..." and it will
 *  automatically update this file for you!
 */

const SITE_DATA = {

    // ════════════════════════════════════════════════
    //  HERO SECTION
    // ════════════════════════════════════════════════
    hero: {
        brandName: "COMZE",        // Large text in the center of the hero
        profileImage: "profile.jpg"   // Your profile photo — file must be in the same folder
    },


    // ════════════════════════════════════════════════
    //  NAVIGATION  (top-right menu)
    // ════════════════════════════════════════════════
    nav: [
        { label: "Pricing", target: ".pricing-section" },
        { label: "Contact", target: ".site-footer" },
        { label: "Long Form", target: ".section-three" }
    ],


    // ════════════════════════════════════════════════
    //  HERO SOCIAL LINKS  (left sidebar)
    //  Replace "javascript:void(0)" with your real URLs
    // ════════════════════════════════════════════════
    heroSocials: [
        { label: "IG", url: "javascript:void(0)" },
        { label: "FB", url: "javascript:void(0)" },
        { label: "YT", url: "javascript:void(0)" },
        { label: "X", url: "javascript:void(0)" }
    ],


    // ════════════════════════════════════════════════
    //  SECTION TWO — TRUSTED CREATORS
    // ════════════════════════════════════════════════
    sectionTwo: {
        headingLine1: "TRUSTED",    // Background heading — first line
        headingLine2: "BY PROS",    // Background heading — second line

        // To add a creator: copy one block, paste below the last one.
        // avatar: "https://unavatar.io/youtube/CHANNEL_HANDLE" fetches the avatar automatically.
        creators: [
            {
                name: "MrBeast",
                url: "https://youtube.com/@MrBeast",
                avatar: "https://unavatar.io/youtube/MrBeast"
            },
            {
                name: "PewDiePie",
                url: "https://youtube.com/@PewDiePie",
                avatar: "https://unavatar.io/youtube/PewDiePie"
            },
            {
                name: "KSI",
                url: "https://youtube.com/@KSI",
                avatar: "https://unavatar.io/youtube/KSI"
            },
            {
                name: "AboFlah",
                url: "https://www.youtube.com/@AboFlah/featured",
                avatar: "https://unavatar.io/youtube/AboFlah"
            },
            {
                name: "Logan Paul",
                url: "https://www.youtube.com/@loganpaulvlogs/featured",
                avatar: "https://unavatar.io/youtube/loganpaulvlogs"
            },
            {
                name: "Sidemen",
                url: "https://youtube.com/@Sidemen",
                avatar: "https://unavatar.io/youtube/Sidemen"
            },
            {
                name: "Ninja",
                url: "https://youtube.com/@Ninja",
                avatar: "https://unavatar.io/youtube/Ninja"
            }
        ]
    },


    // ════════════════════════════════════════════════
    //  SECTION THREE — LONG FORM VIDEOS
    // ════════════════════════════════════════════════
    sectionThree: {
        headingLine1: "LONG",       // Background heading — first line
        headingLine2: "FORM",       // Background heading — second line

        // YouTube video IDs only — the part after ?v= in the URL
        // To add a video: add a new line with the ID in quotes, followed by a comma
        videos: [
            "Xj0Jtjg3lHQ",
            "MmGzzlRNjFA",
            "5vkwgbxCsI4",
            "N4PPGuW7czQ",
            "jgXlZgTqKPQ",
            "bpfQDnb4Chg"
        ]
    },


    // ════════════════════════════════════════════════
    //  SECTION FOUR — SHORT FORM VIDEOS
    // ════════════════════════════════════════════════
    sectionFour: {
        headingLine1: "SHORT",      // Background heading — first line
        headingLine2: "FORM",       // Background heading — second line

        // YouTube video IDs only — the part after ?v= in the URL
        videos: [
            "MOGW3v3pJ5Y",
            "q93WjRBKJnA",
            "689yuACPL0I",
            "s1T3VVSipQE",
            "DrhOptkVwgw",
            "qL3Y5u11oZM"
        ]
    },


    // ════════════════════════════════════════════════
    //  STATS SECTION
    // ════════════════════════════════════════════════
    stats: [
        {
            value: 350,                    // The number that animates/counts up
            suffix: "+",                    // Symbol shown after the number: "+", "B+", "%", "K", etc.
            label: "Projects Delivered"    // Descriptive text on the right
        },
        {
            value: 3,
            suffix: "B+",
            label: "Views Generated"
        },
        {
            value: 98,
            suffix: "%",
            label: "Client Retention Rate"
        }
    ],


    // ════════════════════════════════════════════════
    //  PRICING SECTION
    // ════════════════════════════════════════════════
    pricing: {
        planLabel: "One Price. Endless Quality.",
        price: 149,                               // Number only (e.g. 149 or "149.99")
        period: "Per Video Project",
        // Note: <br> inside the description adds a line break in the display
        description: "Every cut crafted to keep viewers watching<br>and coming back.",
        features: [
            "2 Rounds of Revisions",
            "Professional Color Grade",
            "Custom Motion Graphics & Titles",
            "Audio Mix & Sound Design",
            "5-Day Delivery Guarantee"
        ]
    },


    // ════════════════════════════════════════════════
    //  FOOTER
    // ════════════════════════════════════════════════
    footer: {
        // Replace "javascript:void(0)" with your real social profile URLs
        socials: [
            { label: "IG", url: "javascript:void(0)" },
            { label: "FB", url: "javascript:void(0)" },
            { label: "YT", url: "javascript:void(0)" },
            { label: "X", url: "javascript:void(0)" }
        ],
        email: "HELLO@COMZE.COM",
        copyright: "© ALL RIGHTS RESERVED, COMZE 2026",
        phone: "+44 7463615117",
        location: "UAE - DUBAI",
        brandName: "comze"                              // Giant text at the very bottom of the page
    }

};
