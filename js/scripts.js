const data = (function () {
  const names = [
    {
      day: 1,
      female: "Adwoa",
      female_symbolism:
        "Adwoa, born on Monday, symbolizes strength and resilience. She represents individuals who possess inner fortitude, capable of enduring challenges and emerging stronger from adversity.",
      male: "Kwadwo",
      male_symbolism:
        "Kwadwo, born on Monday, symbolizes strength and resilience. He represents individuals who possess inner fortitude, capable of enduring challenges and emerging stronger from adversity.",
    },
    {
      day: 2,
      female: "Abenaa",
      female_symbolism:
        "Abenaa signifies overcoming adversity. She embodies the spirit of perseverance and determination, inspiring others to confront obstacles with courage and resolve.",
      male: "Kwabena",
      male_symbolism:
        "Kwabena signifies overcoming adversity. He embodies the spirit of perseverance and determination, inspiring others to confront obstacles with courage and resolve.",
    },
    {
      day: 3,
      female: "Akua",
      female_symbolism:
        "Akua, born on Wednesday, symbolizes peace and harmony. She represents individuals who seek to foster unity and understanding, promoting reconciliation and cooperation within their communities.",
      male: "Kwaku",
      male_symbolism:
        "Kwaku, born on Wednesday, symbolizes peace and harmony. He represents individuals who seek to foster unity and understanding, promoting reconciliation and cooperation within their communities.",
    },
    {
      day: 4,
      female: "Yaa",
      female_symbolism:
        "Yaa, born on Thursday, embodies nobility and leadership. She stands as a symbol of leadership, guiding her community with wisdom, grace, and compassion.",
      male: "Yaw",
      male_symbolism:
        "Yaw, born on Thursday, embodies nobility and leadership. He stands as a symbol of leadership, guiding his community with wisdom, grace, and compassion.",
    },
    {
      day: 5,
      female: "Afua",
      female_symbolism:
        "Afua, born on Friday, symbolizes fertility and abundance. She nurtures growth and prosperity, fostering abundance in both her personal life and the community.",
      male: "Kofi",
      male_symbolism:
        "Kofi, born on Friday, symbolizes fertility and abundance. He nurtures growth and prosperity, fostering abundance in both his personal life and the community.",
    },
    {
      day: 6,
      female: "Ama",
      female_symbolism:
        "Ama, born on Saturday, embodies greatness and spiritual insight. She guides others with her wisdom and intuition, illuminating the path to enlightenment.",
      male: "Kwame",
      male_symbolism:
        "Kwame, born on Saturday, embodies greatness and spiritual insight. He guides others with his wisdom and intuition, illuminating the path to enlightenment.",
    },
    {
      day: 7,
      female: "Akosua",
      female_symbolism:
        "Akosua, born on Sunday, symbolizes abundance and prosperity. She brings blessings and joy, nurturing a sense of gratitude and contentment in her community.",
      male: "Kwasi",
      male_symbolism:
        "Kwasi, born on Sunday, symbolizes abundance and prosperity. He brings blessings and joy, nurturing a sense of gratitude and contentment in his community.",
    },
  ];

  const dobInput = document.querySelector("#dob");
  const genderInput = document.querySelector("#gender");

  function generateName(day, gender) {
    let item = names.filter((item) => item.day === day);
    if (gender === "male") {
        console.log(item[0].male);
      
        const element = document.querySelector('.result-window');
        
        const title = document.createElement ('h1')
        title.classList.add ('caveat-font')
        title.innerText = item[0].male;
        
        const symbolism = document.createElement ('p');
        symbolism.classList.add ('caveat-font');
        symbolism.innerText = item[0].male_symbolism;
        
        element.appendChild(title);
        element.appendChild(symbolism);
        
    } else if (gender === "female") {
      console.log(item[0].female);


      const element = document.querySelector('.result-window');
        
      const title = document.createElement ('h1')
      title.classList.add ('caveat-font')
      title.innerText = item[0].female;
      
      const symbolism = document.createElement ('p');
      symbolism.classList.add ('caveat-font');
      symbolism.innerText = item[0].female_symbolism;
      
      element.appendChild(title);
      element.appendChild(symbolism);
    }
  }

  const generateButton = document.querySelector("#generate-button");

  generateButton.addEventListener("click", function () {
    const dateInput = document.querySelector("#dob");
    const gender = document.querySelector("#gender").value;

    //find day from date input
    const selectedDate = new Date(dateInput.value);
    const day = selectedDate.getDay();
    let formValid = validateForm();

    if ((formValid = "undefined")) {
      generateName(day, gender);
    }
  });

  function showError(input, message) {
    let wrapper = input.parentElement;

    //check and remove any existing errors
    let error = wrapper.querySelector(".error-message");
    if (error) {
      wrapper.removeChild(error);
    }

    //add new error
    error = document.createElement("div");
    error.classList.add("error-message");
    error.innerText = message;
    wrapper.appendChild(error);

    setTimeout(function () {
      let error = wrapper.querySelector(".error-message");
      if (error) {
        wrapper.removeChild(error);
      }
    }, 3000);
  }

  function validateForm() {
    let isValidDay = validateDay();
    let isValidGender = validateGender();

    return isValidDay && isValidGender;
  }

  function validateDay() {
    let input = dobInput.value;
    if (!input) {
      showError(dobInput, "This is a required field");
      return false;
    }
  }

  function validateGender() {
    let input = genderInput.value;

    if (!input) {
      showError(genderInput, "This is a required field");
      return false;
    }
  }
})();
