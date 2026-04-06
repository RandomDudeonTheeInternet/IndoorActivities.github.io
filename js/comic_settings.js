//comic_settings.js was created by geno7, with much needed assistance from Dannarchy

//this is the main file you'll be messing with to manage and update your comic. most (not all) of the main toggle-able settings are here.

//comic_archive has more settings pertaining to the archive page, and comic_show has settings pertaining to the main place that pages of your comic are displayed.

let pg = Number(findGetParameter("pg")); //make "pg" mean the current page number (this line doesnt work unless I put it here, if you're inexperienced with js dont worry about it)

////////////////////////
//VARIABLES FOR TWEAKING
////////////////////////

//REALLY IMPORTANT ONES
const maxpg = 23; //the current number of pages your comic has in total. this DOESNT necessarily mean number of IMAGE FILES as it doesn't count pages split into multiple files. 
//YOU MUST UPDATE THIS NUMBER EVERY TIME YOU ADD A NEW PAGE or else it wont display the most recent page

// COMIC PAGE SETTINGS
const folder = "img/comics"; //directory of the folder where you keep all the comics
const image = "pg"; //what you'll name all your comic pages
const imgPart = "_" //special character(s) you put after the page number to subdivide pages into multiple image files (ie pg2_1, pg2_2, etc)
const ext = "png"; //file extension of your comic pages

//THUMBNAIL SETTINGS
const thumbFolder = "img/thumbs" //directory of the folder where you keep all the thumbnail images for the comics, in case you want the archive page to use thumbnails.
const thumbExt = "png" //file extension of thumbnails
const thumbDefault = "default" //name of the default thumbnail that displays when no thumbnail is set, located in the directory you set thumbFolder to.

//NAVIGATION SETTINGS
const navText = ["First","Previous","Next","Last"]; //alt text for your nav images, or just the text that shows up if you're not using images
const navFolder = "img/comicnav"; //directory where nav images are stored
const navExt = "png" //file extension of nav images
const navScrollTo = "#showComic"; //id of the div you want the page to automatically scroll to when you click to the next comic. will turn off if you delete text between quotation marks

if (pg == 0) {pg = maxpg;} //display MOST RECENT COMIC when the webpage is loaded. if you want to instead have the FIRST COMIC displayed first, change maxpg to 1.

//pgData holds all the parameters for each of your pages. copypaste this and fill out accordingly:
/* 
    {
        pgNum: ,
        title: "",
        date: writeDate([YEAR],[MONTH],[DAY]),
        altText: "",
        imageFiles: "",
        authorNotes: ``
    },
*/
//Note: the formatting is important! The whole thing won't show up if you forget to include the commas or curly braces in the right place.

const pgData = [
    {
        pgNum: 1, //what page number it is
        title: "Lemonaids", //the title of the page (leaving this blank will default it to "Page X")
        date: writeDate(2025, 1, 27), //the date on which the page was posted (mainly for the archive). The date is written using a function called "writeDate", basically just put writeDate and then some parenthesis and, comma separated, the year followed by the month and the day. Don't forget another comma at the end outside the parenthesis!
        altText: "The joke is fruit f#!king", //the alt text (mouse over text) for this particular comic. put nothing inbetween the quotes for no alt text
        imageFiles: 1, //how many image files this page is split into
        authorNotes: `
        <p>What has Squablo Squandaz gotten himself into? Find out in the next panel to the right!</p>
            <p>This is the worst pilot ever</p>
            `,
    },
    {
        pgNum: 2,
        title: "Tax Season",
        date: writeDate(2025, 2, 3),
        altText: "Hi F.B",
        imageFiles: 1,
        authorNotes: `
            <p>Dry Humour this time? Rats!</p>
            <p></p>
            `,
    },
    {
        pgNum: 3,
        title: "Good Morning",
        date: writeDate(2025, 2, 12),
        altText: "this was the first instance of my drawing buttcheeks, why do they look like chests?",
        imageFiles: 1,
        authorNotes: `
            <p>Commentary:</p>
            `,
    },
    {
        pgNum: 4,
        title: "Valentines Comic",
        date: writeDate(2025, 2, 14),
        altText: "Never explained if that was a kidney stone or whatnot.",
        imageFiles: 1,
        authorNotes: `
            <p>Happy Valentines every guy and gal and them</p>
            <p>Gripper spent 10 buckos for someone to sharpie tattoo that on his head!</p>
            `,
    },
    {
        pgNum: 5,
        title: "Death of Squablo",
        date: writeDate(2025, 2, 20),
        altText: "John",
        imageFiles: 1,
        authorNotes: `
            <p>After Squablo succumbing from Lemonaids, Gripper has visited his grave only to be met by a mysterious foe! How will Gripper approach this new threat? Stay tu-2 comics im gonna post 2 unrelated comics in the next two weeks instead then continue this plotline.</p>
            `,
    },
    {
        pgNum: 6,
        title: `Beach day!`,
        date: writeDate(2025, 3, 1),
        altText: "I am Switzerland.",
        imageFiles: 1,
        authorNotes: `
            <p>Did you know F.B is a siren? If not then that's because she sucks at being one kinda like how people suck at being empathetic.</p>
            `,
    },
        {
        pgNum: 7,
        title: `Nothing`,
        date: writeDate(2025, 3, 10),
        altText: "Why is Gripper sitting on F.B's hand? is he want fingered?",
        imageFiles: 1,
        authorNotes: `
        <p>Why is F.B gripping Grippers ass? Is she dumb?</p>
            `,
    },
            {
        pgNum: 8,
        title: `Lemonaids (PART 3)`,
        date: writeDate(2025, 3, 12),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>The finale of the Lemon-Aid chronicles! Maybe? Nah.</p>
            `,
    },
         {
        pgNum: 9,
        title: `Double Squabble`,
        date: writeDate(2025, 3, 18),
        altText: "I forgot their names",
        imageFiles: 1,
        authorNotes: `
            <p>Dopplegangers? How cliché!</p>
            `,
    },
         {
        pgNum: 10,
        title: `Vroooom`,
        date: writeDate(2025, 3, 20),
        altText: "Mr Pibb",
        imageFiles: 1,
        authorNotes: `
            <p>WHO THE HELL ARE THESE NERDS? WHERES GRIPPER I WANTED GRIPPER DAMN IT</p>
            `,
    },
         {
        pgNum: 11,
        title: `Cock Cleansing`,
        date: writeDate(2025, 3, 21),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>Horse moments and aura</p>
            <p>Random from the future: This comics my least favorite, I dislike the joke so bad that Horse Cock's real name is Bill now, named after the loser from King of the Hill.</P>
            `,
    },
         {
        pgNum: 12,
        title: `Punch line!`,
        date: writeDate(2025, 3, 24),
        altText: "G0RE",
        imageFiles: 1,
        authorNotes: `
            <p>From Newgrounds:</p>
            <p>I'm so burnt out man. But hey there's blood and stuff you like that right ooooo tree sap so edgy</P>
            `,
    },
         {
        pgNum: 13,
        title: `Question of the day`,
        date: writeDate(2025, 8, 13),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>From Newgrounds:</p>
            <p>Sorry for that unexpected insight of a hiatus, 5 months gone or not they're still here and probably not queer except for one of them.</P>
            `,
    },
         {
        pgNum: 14,
        title: `Sneaky Ambush`,
        date: writeDate(2025, 8, 23),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
              <p>From Newgrounds:</p>
            <p>Weekend is still a week right?</P>
<p>Anyways time to roll in some minor characters, this guys name is Orgy, Orgy the Orclops, he doesn't seem that big to me, and I sure know that size doesn't get made up anywhere on him but his dashing eyelashes and hair. yes I know he looks like a minion.</P>
            `,
    },
         {
        pgNum: 15,
        title: ``,
        date: writeDate(2025, 8, 27),
        altText: "Gurgle Gurgle",
        imageFiles: 1,
        authorNotes: `
            <p>Yeah.</p>
            `,
    },
         {
        pgNum: 16,
        title: `Trick or Freak`,
        date: writeDate(2023, 11, 18),
        altText: "Bob",
        imageFiles: 3,
        authorNotes: `
            <p>From Newgrounds:</p>
            <p>
Indoor Activities HALLOWEEN SPECIAL: Trick or Freak
Report Abuse
Share
Add to playlist
Add To Favorites
Edit art

I was supposed to finish and release this a week after Halloween, then I got sick, then I remembered how good it was to watch Netflix, sorry guys.</P>
            `,
    },
        {
        pgNum: 17,
        title: `Christmas special`,
        date: writeDate(2026, 1, 2),
        altText: "fork",
        imageFiles: 6,
        authorNotes: `From Newgrounds:
        <p>"As long as there's still a speck of snow outside my door it's still Christmas</P>

<p>Pretend this was the last Comic I made in 2025, more weekly comics soon I think, yes no maybe so? I don't know.</p>
<p>Happy January 2nd!"</p>

            `,
    },
      {
        pgNum: 18,
        title: `Cherry Cherry`,
        date: writeDate(2026, 3, 4),
        altText: "Cherry",
        imageFiles: 1,
        authorNotes: `
            <p></p>
            `,
    },
         {
        pgNum: 19,
        title: `Cultural ApPROPiation`,
        date: writeDate(2026, 3, 11),
        altText: "https://bsky.app/profile/randomdudeotn.bsky.social",
        imageFiles: 1,
        authorNotes: `
            <p>Yes wearing clothes and having prosthetic changes are two completely different things, but in the context of this Comic, both stem from different cultures which ties into the main message of this weekly gag. Or maybe I am wrong and i'm just bigoted, sorry if so.</p>
            `,
    },
         {
        pgNum: 20,
        title: `Something Something Burger Blah Blah Blah these names`,
        date: writeDate(2026, 3, 15),
        altText: "Did you know wendys was once red and yellow",
        imageFiles: 1,
        authorNotes: `
        <p>From Newgrounds:</p>
            <p>This wasn't supposed to be made for next week, the idea just, manifested into my head like a calling, lets hope it was worth it lol.</p>
            `,
    },
         {
        pgNum: 21,
        title: `Pickles`,
        date: writeDate(2026, 3, 16),
        altText: "Cheese",
        imageFiles: 1,
        authorNotes: `
            <p>TV BAD GRASS GOOD</p>
            `,
    },
         {
        pgNum: 22,
        title: `Fun for kids!`,
        date: writeDate(2026, 3, 20),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>Goobsmooch's videos returned to my for you page, too much infact.
This is a one off thangalang, probably even experimental</p>
            `,
    },
            {
        pgNum: 23,
        title: `Rise of egg`,
        date: writeDate(2026, 4, 6),
        altText: "Here's even more alt text!",
        imageFiles: 1,
        authorNotes: `
            <p>Jesus rose on sunday so F.B's egg can blossom on monday.</p>
<p>From Newgrounds:</P>
<p>Happy Easter Monday, good thing there's two Easters otherwise this would be a late holiday comic AGAIN, kinda ironic as Easter Monday was meant to extend the celebration Jesus' resurrection before he was gone again.</p>            `,
    },
];

//below is a function you dont rly need to mess with but if you're more experienced with js you can

function findGetParameter(parameterName) { //function used to write a parameter to append to the url, to give each comic page its own unique url
    let result = null,
    tmp = []; 
    let items = location.search.substr(1).split("&");
    for (let index = 0; index < items.length; index++) {
        tmp = items[index].split("=");
        if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    }
    return result;
}

function writeDate(year,month,day) { //write date of comic page
    const date = new Date(year,month-1,day)
    .toDateString() //format date as Day Month Date Year
    .toString() //convert it to a string
    .slice(4) //remove the Day
    return date
}
