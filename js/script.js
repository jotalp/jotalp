    function searchFunction() {
        // Get the input value and convert it to lowercase
        let input = document.getElementById("searchInput").value.toLowerCase();

    // Get the list of items to be searched (in this case, a list of names)
    let namesList = document.getElementsByClassName("names");

    // Loop through the list of names and hide/show them based on the search input
    for (let i = 0; i < namesList.length; i++) {
          if (namesList[i].innerHTML.toLowerCase().indexOf(input) > -1) {
        namesList[i].style.display = "";
          } else {
        namesList[i].style.display = "none";
          }
        }
      }

      