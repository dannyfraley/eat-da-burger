// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

      $(".create-burger").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger-field").val().trim(),
        devoured: 0
      };
  
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".change-devour").on("click", function(event) {
      var id = $(this).data("id");
    
      var devouredBurger = {
          devoured: 1
      }
      // Send the DELETE request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: devouredBurger
      }).then(
        function() {
          console.log(id, "burger devoured!");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  });
  