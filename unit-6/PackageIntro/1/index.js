import boxen from "boxen";
console.log(boxen('unicorn', {title: 'magical',padding: 1,borderStyle: 'classic'}));
console.log(boxen('unicorn', {title: 'magical',padding: 1, margin: 1, borderStyle: 'singleDouble'}));
console.log(boxen('unicorns love rainbows', {title: 'magical', titleAlignment: 'center', borderStyle: 'round'}));