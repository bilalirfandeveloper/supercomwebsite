


// Variables to store data persistently in memory
let savedImageSrc = "";
let savedMessage = "";

// Open file selector
function chooseImage() {
    document.getElementById('imageInput').click();
}

// Display and save the selected image
function displayImage(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            savedImageSrc = e.target.result; // Save the image in memory
            const previewContainer = document.getElementById('imagePreview');
            previewContainer.innerHTML = `
                <img src="${savedImageSrc}" alt="Selected Image" style="max-width: 100%; height: auto;">
                <button onclick="removeImage()" style="margin-top: 10px; background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove Image</button>
            `;
        };
        reader.readAsDataURL(file);
    }
}

// Remove the image
function removeImage() {
    savedImageSrc = ""; // Clear saved image data
    const previewContainer = document.getElementById('imagePreview');
    previewContainer.innerHTML = `<div class="button" onclick="chooseImage()"><i class="fa fa-file-image-o" aria-hidden="true"></i> Add an image</div>`;
}

// Save changes and close modal
function saveChanges() {
    const messageTextarea = document.querySelector('.descriptionbox textarea');
    savedMessage = messageTextarea.value; // Save textarea content

    // Provide feedback to the user
    alert("Changes saved successfully!");

    // Persist data in the modal
    updateModalContent();

    // Close the modal
    $('#exampleModalCenter').modal('hide'); // Bootstrap's modal hide method
}

// Update modal content with saved data
function updateModalContent() {
    const previewContainer = document.getElementById('imagePreview');
    const messageTextarea = document.querySelector('.descriptionbox textarea');

    if (savedImageSrc) {
        previewContainer.innerHTML = `
            <img src="${savedImageSrc}" alt="Selected Image" style="max-width: 100%; height: auto;">
            <button onclick="removeImage()" style="margin-top: 10px; background-color: red; color: white; border: none; padding: 5px 10px; cursor: pointer;">Remove Image</button>
        `;
    }
    messageTextarea.value = savedMessage;
}

// Restore saved data on page load
window.onload = function () {
    updateModalContent();
};






(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Sidebar Toggler
    $('.sidebar-toggler').click(function () {
        $('.sidebar, .content').toggleClass("open");
        return false;
    });


    // Progress Bar
    $('.pg-bar').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Calender
    $('#calender').datetimepicker({
        inline: true,
        format: 'L'
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav : false
    });


   

})(jQuery);

