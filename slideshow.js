let intervalId;

    function startSlideShow() {
      intervalId = setInterval(changeImage, 3000);
    }

    function stopSlideShow() {
      clearInterval(intervalId);
    }

    function changeImage() {
      let imageSrc = document.getElementById("image").getAttribute("src");
    
      let currentImageNumber = imageSrc.match(/\d+/);

      // finally achieve the wallpaper slideshow by using regex to match the string and returning
    // the value to currentImageNumber instead of using the substring attribute to select the number

      if (currentImageNumber == 15) {
        currentImageNumber = 0;
      }
      let newImage = "/images/" + (Number(currentImageNumber) + 1) + ".jpg";
      document.getElementById("image").setAttribute("src", newImage);
      
      if (newImage == "/images/1.jpg") {
        document.getElementById("display-image-message").innerHTML = "Black landscape view of a mountain";
      }else if (newImage == "/images/2.jpg") {
        document.getElementById("display-image-message").innerHTML = "Simplified windows classic black background";
      }else if (newImage == "/images/3.jpg") {
        document.getElementById("display-image-message").innerHTML = "Windows 10 black background";
      }else if (newImage == "/images/4.jpg") {
        document.getElementById("display-image-message").innerHTML = "Power botton black background";
      }else if (newImage == "/images/5.jpg") {
        document.getElementById("display-image-message").innerHTML = "Simple smokey black background";
      }else if (newImage == "/images/6.jpg") {
        document.getElementById("display-image-message").innerHTML = "Flowers on ancient wall background";
      }else if (newImage == "/images/7.jpg") {
        document.getElementById("display-image-message").innerHTML = "Waterfall surrounded by flowers in the woods";
      }else if (newImage == "/images/8.jpg") {
        document.getElementById("display-image-message").innerHTML = "Beautiful waterfll in a forest";
      }else if (newImage == "/images/9.jpg") {
        document.getElementById("display-image-message").innerHTML = "classic window glass background with galactic skies";
      }else if (newImage == "/images/10.jpg") {
        document.getElementById("display-image-message").innerHTML = "keyboard with red backlights";
      }else if (newImage == "/images/11.jpg") {
        document.getElementById("display-image-message").innerHTML = "Impossible is an opinion, Impossible is nothing.";
      }else if (newImage == "/images/12.jpg") {
        document.getElementById("display-image-message").innerHTML = "A murderer, a conqueror and a God";
      }else if (newImage == "/images/13.jpg") {
        document.getElementById("display-image-message").innerHTML = "Key to a satisfiying and reverent life";
      }else if (newImage == "/images/14.jpg") {
        document.getElementById("display-image-message").innerHTML = "What is an Atheist";
      }else if (newImage == "/images/15.jpg") {
        document.getElementById("display-image-message").innerHTML = "Mohammed Ali, impossible is nothing";
      }
    }

        
    // The long if else statement will will display a desription message
    // about the wallpaper in the div. 