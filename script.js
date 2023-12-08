//your JS code here. If required.

      let dropDown = document.querySelector("#colorSelect");
      let removeBtn = document.querySelector("input[type='button']");

      let selectedValue;


      removeBtn.addEventListener("click", () => {
        selectedValue = dropDown.value;
        let options = dropDown.children;

        Array.from(options).forEach((option) => {
          if (option.value == selectedValue) {
            option.remove();
          }
        });
      });