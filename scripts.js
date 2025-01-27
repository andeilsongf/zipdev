// scripts.js
document.addEventListener("DOMContentLoaded", function () {


  // get year

  const currentYear = new Date().getFullYear();
  const copyrightText = document.getElementById('current-year');
  copyrightText.textContent = currentYear;

  // swiper 768px 

  const isMobile = window.innerWidth <= 768;

  if (isMobile) {
    const swiper = new Swiper(".swiper", {
      slidesPerView: 1,
      loop: true,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        clickable: true,
        el: ".swiper-pagination",
      },
      spaceBetween: 10,
    });
  }

  window.addEventListener("resize", function () {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      if (
        !document
          .querySelector(".swiper")
          .classList.contains("swiper-initialized")
      ) {
        new Swiper(".swiper", {
          slidesPerView: 1,
          loop: true,
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          pagination: {
            clickable: true,
            el: ".swiper-pagination",
          },
          spaceBetween: 10,
        });
      }
    } else {
      const swiperInstance = document.querySelector(".swiper");
      if (swiperInstance && swiperInstance.swiper) {
        swiperInstance.swiper.destroy();
      }
    }
  });
});

// accordion 

document.addEventListener("DOMContentLoaded", () => {
  const accordionTitles = document.querySelectorAll(
    ".accordion-title-container"
  );

  const firstAccordion = accordionTitles[0];
  const firstContent = firstAccordion
    .closest(".accordion-item")
    .querySelector("p");
  const firstIcon = firstAccordion.querySelector(".accordion-icon");
  firstContent.classList.remove("hidden");
  firstIcon.src = "/src/assets/minus-circle-line.svg";

  accordionTitles.forEach((title) => {
    title.addEventListener("click", () => {
      const icon = title.querySelector(".accordion-icon");
      const content = title.closest(".accordion-item").querySelector("p");

      document.querySelectorAll(".accordion-item p").forEach((p) => {
        if (p !== content) {
          p.classList.add("hidden");
        }
      });

      content.classList.toggle("hidden");

      const allIcons = document.querySelectorAll(".accordion-icon");
      allIcons.forEach((i) => {
        if (i !== icon) {
          i.src = "/src/assets/plus-circle-line.svg";
        }
      });

      if (!content.classList.contains("hidden")) {
        icon.src = "/src/assets/minus-circle-line.svg";
      }
    });
  });
});

// agenda

let activeDay = 0;

function setActiveDay(index) {
  activeDay = index;

  const days = document.querySelectorAll(".day");
  days.forEach((day, idx) => {
    if (idx === activeDay) {
      day.classList.add("bg-white-200", "text-grey-500");
      day.classList.remove("bg-transparent", "text-grey-600");
    } else {
      day.classList.remove("bg-white-200", "text-grey-500");
      day.classList.add("bg-transparent", "text-grey-600");
    }
  });

  const titles = document.querySelectorAll("#agenda-title");
  const descriptions = document.querySelectorAll("#agenda-description");
  const topicsContainers = document.querySelectorAll("#topics-container");

  const agendaData = [
    {
      title: "Your REVEAL Day! (aka The Silver Bullet)",
      description:
        "Identify your personal 10% blindspot (everyone has one) that sends quality men running for the hills and clear limiting beliefs that keep you stuck in the scarcity mindset (so you can attract a quality man who’s words and actions actually match). \n\nBy the end of the day, you’ll know EXACTLY why you’re single and what next steps are required to get you closer to magnetizing high-caliber men and creating the life you love.",
      topics: [
        {
          title: "Understand Why",
          description:
            "Even though you’ve read all the self-help books and followed all the rules — you’re still single and how to make our secret technology work for you so that you attract the hot, high-quality man your heart desires.",
        },
        {
          title: "Learn 4 Characteristics that Attract Men",
          description:
            "Not just any men, but men who are open, vulnerable, and committed, so that no man will ever disappear on you again.",
        },
        {
          title: "Reprogram Your Dating GPS",
          description:
            "Understand why now matter HOW you meet a man it won’t ever work until you reprogram your dating GPS so that you become “the destination” for the men you want.",
        },
        {
          title: "Learn what “feminine” means now",
          description:
            "Especially as a successful woman so that you don’t have to jump into the girly-girl bucket to attract a high quality man.",
        },
        {
          title: "Remove Limiting Beliefs",
          description:
            "Eliminate the “nothing works for me” belief in your head so that the universe knows you are loveable and sends you the right man to love.",
        },
      ],
    },
    {
      title: "Day 2",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
      topics: [
        {
          title: "Understand Why",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
        },
        {
          title: "Learn 4 Characteristics that Attract Men",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
        },
        {
          title: "Reprogram Your Dating GPS",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
        },
        {
          title: "Learn what “feminine” means now",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
        },
        {
          title: "Remove Limiting Beliefs",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In odio magna, ullamcorper mollis mollis sit amet, viverra ut ligula. Phasellus lacinia tempus neque vel mollis. Aliquam tempus arcu dui, a imperdiet sem vulputate in. Maecenas consequat varius tincidunt. Proin orci ex, ullamcorper at condimentum in, sodales dignissim lacus. Cras at metus sed massa ornare maximus. In egestas placerat luctus.",
        },
      ],
    },
    {
      title: "Day 3",
      description:
        "Identify your personal 10% blindspot (everyone has one) that sends quality men running for the hills and clear limiting beliefs that keep you stuck in the scarcity mindset (so you can attract a quality man who’s words and actions actually match). \n\nBy the end of the day, you’ll know EXACTLY why you’re single and what next steps are required to get you closer to magnetizing high-caliber men and creating the life you love.",
      topics: [
        {
          title: "Understand Why",
          description:
            "Even though you’ve read all the self-help books and followed all the rules — you’re still single and how to make our secret technology work for you so that you attract the hot, high-quality man your heart desires.",
        },
        {
          title: "Learn 4 Characteristics that Attract Men",
          description:
            "Not just any men, but men who are open, vulnerable, and committed, so that no man will ever disappear on you again.",
        },
        {
          title: "Reprogram Your Dating GPS",
          description: "Reprogram Your Dating GPS.",
        },
        {
          title: "Learn what “feminine” means now",
          description:
            "Especially as a successful woman so that you don’t have to jump into the girly-girl bucket to attract a high quality man.",
        },
        {
          title: "Remove Limiting Beliefs",
          description:
            "Eliminate the “nothing works for me” belief in your head so that the universe knows you are loveable and sends you the right man to love.",
        },
      ],
    },
  ];

  titles[0].textContent = agendaData[activeDay].title;
  descriptions[0].textContent = agendaData[activeDay].description;

  const topicContainer = topicsContainers[0];
  topicContainer.innerHTML = "";
  agendaData[activeDay].topics.forEach((topic, idx) => {
    const topicDiv = document.createElement("div");
    topicDiv.classList.add(
      "agenda-number",
      "flex",
      "items-start",
      "[&:not(:last-child)]:pb-[70px]"
    );
    topicDiv.innerHTML = `
      <div class="position mr-4 text-15 md:text-24 font-bold text-white-200 flex items-center justify-center min-w-[35px] h-[35px] md:min-w-14 md:h-14 bg-peach-300 rounded-full">
        ${idx + 1}
      </div>
      <div class="block">
        <h4 class="md:text-30 text-20 font-playfair font-bold leading-1.73 text-grey-600 mb-8">${
          topic.title
        }</h4>
        <p class="text-18 md:text-20 text-grey-300 tracking-0.2 whitespace-pre-line">${
          topic.description
        }</p>
      </div>
    `;
    topicContainer.appendChild(topicDiv);
  });
}

setActiveDay(0);

