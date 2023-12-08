//your JS code here. If required.

      let dropDown = document.querySelector("#colorSelect");
      let removeBtn = document.querySelector("input[type='button']");

      let selectedValue;

      dropDown.addEventListener("change", (event) => {
        selectedValue = event.target.value;
      });

      removeBtn.addEventListener("click", () => {
        let options = dropDown.children;

        Array.from(options).forEach((option) => {
          if (option.value == selectedValue) {
            option.remove();
          }
        });
      });