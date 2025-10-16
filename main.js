const contents = document.getElementById("root");
const contentParent = contents.parentNode;
contents.remove();

//adding inspirational text
const inspirationalText = document.createElement("div");
inspirationalText.className = "beautText";
inspirationalText.textContent =
  "Here's an easy listening to manage your work flow";
contentParent.prepend(inspirationalText);

//fetch random anime image from waifu image
async function randomImg() {
  try {
    const response = await fetch("https://nekos.best/api/v2/waifu");
    if (!response.ok) throw new Error("failed to fetch data");
    return response.json();
  } catch (error) {
    console.error("Error fetching image:", error);
  }
}

async function setBackgroundImage() {
  try {
    const data = await randomImg();
    const imageUrl = data.results[0].url;

    document.body.style.backgroundImage = `url(${imageUrl})`;
    document.body.style.backgroundSize = "cover"; // scales properly
    document.body.style.backgroundPosition = "center"; // centers image
    document.body.style.backgroundRepeat = "no-repeat"; // no tiling
    document.body.style.backgroundAttachment = "fixed"; // stays in place
    document.body.style.transition = "background-image 0.5s ease-in-out"; // fade change
  } catch (error) {
    console.error("Failed to set background image", error);
  }
}

setBackgroundImage();

// async function randomImg() {
//   try {
//     const response = await fetch("https://nekos.best/api/v2/waifu");
//     if (!response.ok) throw new Error("failed to fetch data");
//     return response.json();
//   } catch (error) {
//     console.error("Error fetching image:", error);
//     throw error;
//   }
// }

// //set the background image
// async function setBakgroundImage() {
//   try {
//     const data = await randomImg();
//     //extract the first image URL from the API response
//     const imageUrl = data.results[0].url;

//     //setting background
//     // document.body.style.backgroundImage = `url(${imageUrl})`;
//     // document.body.style.backgroundSize = "cover";
//     // document.body.style.backgroundPosition = "center";
//     document.body.style.backgroundImage = `url(${imageUrl})`;
//     document.body.style.backgroundSize = "cover"; // fill entire screen without stretching
//     document.body.style.backgroundPosition = "center center";
//     document.body.style.backgroundRepeat = "no-repeat";
//     document.body.style.backgroundAttachment = "fixed";
//     document.body.style.position = "fixed";
//     document.body.style.top = 0;
//     document.body.style.left = 0;
//     document.body.style.width = "100vw";
//     document.body.style.height = "100vh";
//     document.body.style.zIndex = "-1"; // send it behind content
//     document.body.style.transition = "background-image 0.5s ease-in-out";
//   } catch (error) {
//     console.error("failed to set background image", error);
//   }
// }

// //call the function
// setBakgroundImage();
