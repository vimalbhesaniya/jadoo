let i = 0;
let details = [
  {
    profile: "https://i.pinimg.com/236x/22/99/27/22992783a36b04b6ddb6991de6aa87bf.jpg",
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
  {
    profile: "https://media.licdn.com/dms/image/C5603AQHwaJm0ToXT5Q/profile-displayphoto-shrink_800_800/0/1601131123702?e=2147483647&v=beta&t=jTyW7Uz3_TqDvsaLbEUX7RQTQF5b94wxc-bclHB8G4s",
    name: "Chris Thomas",
    location: "CEO of Red Button",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
      Molestias odio iure ex velit, natus rem, corporis fugit
      maxime, ullam aspernatur officia eveniet quidem soluta! Vel
      est similique consectetur ea porro? On the Windows talking`,
  },
  {
    profile:
      "https://storage.prompt-hunt.workers.dev/836c3afe-73d7-457a-960b-403ffea263e1",
    name: "Lucy taylor",
    location: "USA,New Yourk",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias odio iure ex velit, natus rem, corporis fugit
        maxime, ullam aspernatur officia eveniet quidem soluta! Vel
        est similique consectetur ea porro? On the Windows talking`,
  },
  {
    profile:
      "https://st4.depositphotos.com/13193658/25036/i/450/depositphotos_250363326-stock-photo-smiling-attractive-woman-white-sweater.jpg",
    name: "Lucifer Thomson",
    location: "Itely,Rome",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias odio iure ex velit, natus rem, corporis fugit
        maxime, ullam aspernatur officia eveniet quidem soluta! Vel
        est similique consectetur ea porro? On the Windows talking`,
  },
  {
    profile:
      "https://media.istockphoto.com/id/1188562864/photo/head-shot-portrait-excited-beautiful-indian-girl-with-healthy-smile.jpg?s=612x612&w=0&k=20&c=nzUwl40cD4qfbCAB6m_jRnNuQqdPyt4F6KVzBkVWjd8=",
    name: "Andi Rubin",
    location: "London , Stain",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        Molestias odio iure ex velit, natus rem, corporis fugit
        maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
  {
    profile:
      "https://www.onthisday.com/images/people/robert-downey-jr.jpg?w=360",
    name: "Tony Stark",
    location: "Brazil,Rome",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
];

let feedback = document.getElementById("feedback");
let backcard = document.getElementById("backCard");
let profile = document.getElementById("profile");

function disableButtons(index) {
  if (index === 0) {
    document.getElementById("up").classList.add("disable");
    document.getElementById("prev").setAttribute("disabled", true);
  } else {
    document.getElementById("up").classList.remove("disable");
    document.getElementById("prev").removeAttribute("disabled");
  }
  if (index === details.length) {
    document.getElementById("down").classList.add("disable");
    document.getElementById("next").setAttribute("disabled", true);
  } else {
    document.getElementById("down").classList.remove("disable");
    document.getElementById("next").removeAttribute("disabled");
  }
}

function display(index, animate) {
  profile.src = details[index].profile;
  feedback.innerHTML = ` <div class="topInner PAbso feedBackCard flex column g-2 "  id="${animate}">
  <q class="paraGraph ellips e-3">
  ${details[index].content}
  </q>
  <h5 class="caption">${details[index].name}</h5>
  <p class="paraGraph" style="line-height: 0">
  ${details[index].location}
  </p>
  </div>
  </div>
  `;
}

function displayBackCard(index, animate) {
  if (index === details.length) {
    document.getElementById("back").style.display = "none";
  } else {
    backcard.innerHTML = `<div class="behindCard PAbso feedBackCard flex column g-2" id="${animate}">
    <q class="paraGraph ellips e-3">
    ${details[index].content}
    </q>
    <h5 class="caption">${details[index].name}</h5>
    <p class="paraGraph" style="line-height: 0">${details[index].location}</p>
    </div>`;
  }
}

function handleNext() {
  if (i === details.length) {
    return;
  } else {
    i++;
  }
  display(i, "top");
  disableButtons(i + 1);
  displayBackCard(i + 1, "back");
}

function handlePrevius() {
  display(i - 1, "back");
  displayBackCard(i, "top");
  disableButtons(i - 1);
  if (i === 0) {
    return;
  } else {
    i--;
  }
}
if (i === 0) {
  display(i, "top");
  disableButtons(i);
  displayBackCard(i + 1, "back");
}
