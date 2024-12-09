// // Get the modal
// var modal = document.getElementById("myModal");

// // Get the image and insert it inside the modal - use its "alt" text as a caption
// var img = document.getElementById("myImg");
// var modalImg = document.getElementById("img01");
// img.onclick = function(){
//   modal.style.display = "block";
//   modalImg.src = this.src;
// }

// // Get the <span> element that closes the modal
// var span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }

// SUCCESS POPUP

// Check for the hash on page load
window.addEventListener("load", function () {
    console.log(window.location.hash)
    if (window.location.hash === "#success") {
      // Show the popup if the hash is #success
      document.getElementById("success").style.display = "block";
  
      // Clear the hash to prevent the popup from showing again on reload
      history.replaceState(null, null, window.location.pathname);
    }
  });
  
  // Close popup functionality
  document.getElementById("close-popup").addEventListener("click", function () {
    document.getElementById("success").style.display = "none";
  });