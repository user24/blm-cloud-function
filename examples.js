// All black image (true) https://i.imgur.com/ugPADer.jpg
// Bright image: (false) https://i.imgur.com/7h4KYRe.jpg
// Fairly dark image: (false) https://i.imgur.com/cZwiiTv.jpg
// black image with overlay (true) https://i.imgur.com/kPVJ2EJ.jpg
// Dark photo (false) https://i.imgur.com/O5PlLMf.jpg

const { mostlyDark } = require('./is-solid-color');
(async () => {
  const dark = await mostlyDark("https://i.imgur.com/O5PlLMf.jpg");

  console.log(dark);
  return dark;
})();