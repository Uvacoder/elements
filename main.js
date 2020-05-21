let consoleText = input => input

// form submit
let form = document.querySelector('#form')
let input = document.querySelector('#input')
let paragraph = document.querySelector('#paragraph')
let clear = document.querySelector('#clear')

form.addEventListener(
  'submit',
  function (event) {
    event.preventDefault()

    if (input.value.length < 1) return

    paragraph.innerHTML += '<li>' + input.value + '</li>'

    input.value = ''

    localStorage.setItem('items', paragraph.innerHTML)
  },
  false
)

let saved = localStorage.getItem('items')

saved ? paragraph.innerHTML = saved : paragraph.innerHTML = ''

clear.addEventListener(
    'click', () => {
        localStorage.clear()
        paragraph.innerHTML = saved
    },
    false
)

// drop down menu

// "assets"
const dropdownIcon = () => {
  const dropdown = document.createElement('span')
  dropdown.innerHTML = `<svg width="14px" height="7px" viewBox="0 0 10 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <g id="Delivery" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
    <g id="Transactions-(Landing)" transform="translate(-1360.000000, -29.000000)" fill="#CDCFD3" fill-rule="nonzero">
        <g id="Group-4" transform="translate(1360.000000, 29.000000)">
            <polygon id="Shape" points="0 0 5 5 10 0"></polygon>
        </g>
    </g>
    </g>
</svg>`
  return dropdown
}

const users = [
  {
    id: 1,
    name: 'Michael Scott',
    title: 'Regional Manager'
  },
  {
    id: 2,
    name: 'Dwight Schrute',
    title: 'AARM'
  },
  {
    id: 3,
    name: 'Pam Beesly',
    title: 'Receptionist'
  },
  {
    id: 4,
    name: 'Jim Halpert',
    title: 'Salesman'
  },
  {
    id: 5,
    name: 'Kevin Malone',
    title: 'Accountant'
  },
  {
    id: 6,
    name: 'Toby Flenderson',
    title: 'HR Manager'
  },
  {
    id: 7,
    name: 'Ryan Howard',
    title: 'Temp'
  },
  {
    id: 8,
    name: 'Kelly Kapoor',
    title: 'Customer Service'
  },
  {
    id: 9,
    name: 'Creed Bratton',
    title: 'Unknown'
  }
]

const printArea = document.querySelector('#content')

const dropdown = () => {
  const component = document.createElement('div')

  const input = createInput()
  const dropdown = showDropdown()

  component.appendChild(input)
  component.appendChild(dropdown)
  printArea.appendChild(component)
}

const createInput = () => {
  const input = document.createElement('div')
  input.classList = 'input'
  input.addEventListener('click', toggleDropdown)

  const inputPlaceholder = document.createElement('div')
  inputPlaceholder.classList.add('placeholder')

  const placeholder = document.createElement("p");
  placeholder.textContent = 'Select User';
  placeholder.classList.add('placeholder');

  inputPlaceholder.appendChild(placeholder)
  inputPlaceholder.appendChild(dropdownIcon())
  input.appendChild(inputPlaceholder)

  return input
}

const showDropdown = () => {
  const structure = document.createElement('div')
  structure.classList.add('structure', 'hide')

  users.forEach(user => {
      const { id, name, title } = user;
      const option = document.createElement("div");
      option.addEventListener("click", () => selectOption(name));
      option.setAttribute("id", id);

      const n = document.createElement("h5");
      n.textContent = name;

      const t = document.createElement("p");
      t.textContent = `(${title})`;

      option.appendChild(n);
      option.appendChild(t);
      structure.appendChild(option);
  })
  return structure;
}

const toggleDropdown = () => {
    const dropdown = document.querySelector(".structure");
    dropdown.classList.toggle("hide");

    const input = document.querySelector(".input");
    input.classList.toggle("input_active");
};

const selectOption = (name) => {
    const text = document.querySelector('.placeholder');
    text.textContent = name;
    text.classList.add('input_selected')
    toggleDropdown();
};

dropdown();