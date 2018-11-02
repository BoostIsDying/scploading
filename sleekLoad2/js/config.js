//       _           _    _                     _ 
//      | |         | |  | |                   | |
//   ___| | ___  ___| | _| |     ___   __ _  __| |
//  / __| |/ _ \/ _ \ |/ / |    / _ \ / _` |/ _` |
//  \__ \ |  __/  __/   <| |___| (_) | (_| | (_| |
//  |___/_|\___|\___|_|\_\______\___/ \__,_|\__,_|
//     version 2.16

// URL for the server logo
// Leave it blank to use text instead
// (Put the files in the images folder)
// (You can also use external URL)
var l_serverImage = "logo.png";

// Center logo?
// 'true' or 'false'
var l_centerLogo = false;

// Display current map and gamemode?
// 'true' or 'false'
var l_displayMapGamemode = true;

// Custom server name configuration
// Leave it blank for automatic server name
var l_serverName = "";

// Use a video for the background?
// Otherwise it will use images
// 'true' or 'false'
var l_bgVideo = false;

// Default available videos:
// "aurora.webm"
// "bluefall.webm"
// "bluetilefloor.webm"
// "bluewhitecircles.webm"
// "bokehlens.webm"
// "cleanbokeh.webm"
// "coldnight.webm"
// "colorfulburst.webm"
// "dancingstars.webm"
// "dropsflares.webm"
// "focusorangebokeh.webm"
// "glimmering.webm"
// "glowingrings.webm"
// "greencircles.webm"
// "hues.webm"
// "inthedeep.webm"
// "modernflourish.webm"
// "orangeaura.webm"
// "warminside.webm"
// "yellowgreen.webm"
//
// You can add your own video backgrounds
// Just make sure they are using webm VP8 format 
// (Place the videos in the backgrounds/videos folder)
// (You can also use external URL)
var l_background = "bluefall.webm";

// (Image-background only)
// Enable map-based background image?
// If enabled, the background will be an image based on the server current map
// You need to have a background image with the same name as the map
// Also, the image needs to be in .jpg format
// E.g: gm_flatgrass.jpg, gm_construct.jpg, rp_downtown_v4c_v2.jpg
// 'true' or 'false'
var l_bgImageMapBased = false;

// (Image-background only)
// Place one or more images
// Multiple images will automatically shuffle between them
// (Place the files in the backgrounds/images folder)
// (You can also use external URL)
var l_bgImages = [
	"https://img00.deviantart.net/694c/i/2012/314/3/5/scp_foundation___background_1_by_zenith_strife-d5kjyab.png",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/4a9db6f2-49f4-4435-992a-74ddc5106896/d6jisbo-523aed97-4323-4e2d-a3ba-00f732aca590.jpg/v1/fill/w_1024,h_684,q_70,strp/scp___173_by_nexnirvos_d6jisbo-fullview.jpg",
	"https://img00.deviantart.net/7930/i/2015/034/e/a/scp_173_containment_breach_by_isogonica-d8glq27.png",
	"https://img00.deviantart.net/17b7/i/2015/034/3/c/scp_354_containment_breach_by_isogonica-d8glr5c.png",
	"https://img00.deviantart.net/b0f0/i/2015/034/d/b/scp_035_contaminated_sewer_by_isogonica-d8glyvt.png",
	"https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/intermediary/f/015d0568-f110-4294-8511-cf3ed0208f82/dc2lvgk-e27e8072-3627-4cbc-8557-a794e2412609.jpg/v1/fill/w_1024,h_576,q_70,strp/scp_939_has_escaped__all_mtf_nu_7_please_engage_by_dracoscurra_dc2lvgk-fullview.jpg",
	"https://orig00.deviantart.net/b0a2/f/2017/126/a/f/mobile_task_force___scp_foundation__2__by_leocwm-db2ev66.png",
	"https://orig00.deviantart.net/3d66/f/2017/319/3/4/scp_1048_by_amamidori-dbrdtyl.png",
];

// (Image-background only)
// Random background images order?
// 'true' or 'false'
var l_bgImagesRandom = false;

// (Image-background only)
// Delay between background images changes
// in milliseconds
var l_bgImageDuration = 5000;

// (Image-background only)
// Image background fade velocity
// in milliseconds
var l_bgImageFadeVelocity = 2000;

// Enable background overlay?
// 'true' or 'false'
var l_bgOverlay = true;

// Background darkening amount
// 0 for none (0%), 100 for pitch black (100%)
var l_bgDarkening = 50;

// Play music during the loading screen?
// 'true' or 'false'
var l_music = true;

// Display current music name?
// 'true' or 'false'
var l_musicDisplay = true;

// Music playlist
// Add as many youtube ids/urls or ogg files you want
// (Place the ogg files in the music folder)
// (You can also use external URL for the ogg files)
var l_musicPlaylist = [
	{youtube: "https://www.youtube.com/watch?v=DOAvSbUmXAA", name: "SCP Soundtrack - Ambience"},
];

// Random music order?
// 'true' or 'false'
var l_musicRandom = true;

// Music volume
// Choose a value between 0 (quietest) and 100 (loudest)
var l_musicVolume = 10;

// Enable custom messages?
// 'true' or 'false'
var l_messagesEnabled = false;

// Enter your custom messages below
var l_messages = [
	"Enjoy the server",
	"Thanks for joining us!",
	"Did you know these backgrounds and music are from Touhou?",
];

// Random message order?
// 'true' or 'false'
var l_messagesRandom = true;

// Delay between message changes
// in milliseconds
var l_messagesDelay = 5000;

// Messages fade time
// in milliseconds
var l_messagesFade = 1000;

// Show errors inside Garry's Mod?
// Can be useful for finding errors
// 'true' or 'false'
var l_showErrorsIngame = true;

//==============================================================
//========================== WARNING ===========================
//==============================================================
//============ Do not edit anything below this line ============
//==============================================================
var checkConfigFile = function() {
	return true;
};