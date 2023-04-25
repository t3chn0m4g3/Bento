// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

// Create link for Cockpit redirection (instead of cockpit.html), so we can create links dynamically in assets/js/lists.js
const redirectCockpit = window.location.protocol + '//' + window.location.hostname + ':64294'
const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  imageBackground: true,
  openInNewTab: true,
  twelveHourFormat: false,

  // Greetings
  greetingMorning: 'Good morning ☕',
  greetingAfternoon: 'Good afternoon 🍯',
  greetingEvening: 'Good evening 😁',
  greetingNight: 'Go to Sleep 🥱',

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  //Icons
  firstListIcon: 'home',
  secondListIcon: 'external-link',

  // Links
  lists: {
    firstList: [
      {
        name: 'Attack Map',
        link: '/map/',
      },
      {
        name: 'Cockpit',
        link: redirectCockpit,
      },
      {
        name: 'Cyberchef',
        link: '/cyberchef/',
      },
      {
        name: 'Elasticvue',
        link: '/elasticvue/',
      },
      {
        name: 'Kibana',
        link: '/kibana/',
      },
      {
        name: 'Spiderfoot',
        link: '/spiderfoot/',
      },
    ],
    secondList: [
      {
        name: 'SecurityMeter',
        link: 'https://sicherheitstacho.eu',
      },
      {
        name: 'T-Pot @ GitHub',
        link: 'https://github.com/telekom-security/tpotce/',
      },
      {
        name: 'T-Pot ReadMe',
        link: 'https://github.com/telekom-security/tpotce/blob/master/README.md',
      },      
    ],
  },
};
