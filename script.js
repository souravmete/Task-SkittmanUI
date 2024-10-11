window.addEventListener('scroll', function() {
    const image = document.getElementById('growingImage');
    const buttonContainer = document.getElementById('buttonContainer');
    const  smallButtonContainer = document.getElementById('smallButtonContainer');
    const scrollY = window.scrollY;

    // Adjust the scaling factor for the image
    let scaleFactor = 0.1 + (scrollY / 400); 
    // let btnScaleFactor =0.1+(scrollY/1000)
    if (scaleFactor > 2.6) {
        scaleFactor = 2.6;
    }
    image.style.transform = `scale(${scaleFactor})`; // Scale the image based on scroll

    // Adjust the position of the button container based on scroll
    // buttonContainer.style.transform = `translateY(${scrollY}px)`; // Move down based on scroll


      // Hide the button container when scaleFactor reaches 1.6
      if (scaleFactor >= 2.5) {
        buttonContainer.style.display = 'none'; // Hide buttons
        smallButtonContainer.style.display = 'flex';


        // Add the sticky class when the small buttons are visible
        smallButtonContainer.classList.add('sticky');



    } else {
        buttonContainer.style.display = 'flex'; // Show buttons
        smallButtonContainer.style.display = 'none';


        // Remove the sticky class when the small buttons are not visible
        smallButtonContainer.classList.remove('sticky');


    }

});

// window.addEventListener('scroll', function() {
//     const scrollImage = document.getElementById('scrollImage');
//     const scrollY = window.scrollY;

//     // Adjust the scaling factor for the image
//     let scaleFactor = 0.1 + (scrollY / 1600); 
    
//     scrollImage.style.transform = `scale(${scaleFactor})`; // Scale the image based on scroll
// });



window.addEventListener('scroll', function() {
    const scrollImage = document.getElementById('scrollImage');
    const scrollY = window.scrollY;

    // Adjust the scaling factor for the image
    let scaleFactor;

    // Dynamic scaling logic: slower growth initially, faster after a certain point
    if (scrollY < 1800) {
        // Slower scaling in the beginning
        scaleFactor = 0.1 + (scrollY / 2000); 
    } else {
        // Faster scaling after 800px of scrolling
        scaleFactor = 0.8 + (scrollY / 1800);
    }

    // Cap the scaling at a max of 2.5x
    if (scaleFactor > 1.8) {
        scaleFactor = 1.8;
    }

    // Apply the scale transformation
    scrollImage.style.transform = `scale(${scaleFactor})`;
});


