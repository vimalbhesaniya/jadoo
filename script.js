let i = 0;
let details = [
  {
    name: "Mike taylor",
    location: "Lahore, Pakistan",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
  {
    name: "Chris Thomas",
    location: "CEO of Red Button",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
  {
    name: "Lucy taylor",
    location: "USA,New Yourk",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
  {
    name: "Tony Stark",
    location: "Itely,Rome",
    content: `Lorem ipsum dolor, sit amet consectetur adipisicing elit.
    Molestias odio iure ex velit, natus rem, corporis fugit
    maxime, ullam aspernatur officia eveniet quidem soluta! Vel
    est similique consectetur ea porro? On the Windows talking`,
  },
];
let feedback = document.getElementById("feedback");

function display(index) {
  console.log(feedback);
  feedback.innerHTML = `
          <div class="topInner PAbso feedBackCard flex column g-2">
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

function handleNext() {
  if (i === details.length) {
    return;
  } else {
    i++;
  }

  display(i)

  console.log(i);
}

function handlePrevius() {
  if (i === 0) {
    return;
  } else {
    i--;
  }
  display(i)
  console.log(i);
}
