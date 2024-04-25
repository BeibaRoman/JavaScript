const tech = [
  { label: "HTML" },
  { label: "CSS" },
  { label: "JavaScript" },
  { label: "Node.js" },
  { label: "React" },
  { label: "Vue" },
  { label: "Next.js" },
  { label: "Mobx" },
  { label: "Redux" },
  { label: "React Router" },
  { label: "GraphQl" },
  { label: "PostgreSQL" },
  { label: "MongoDB" },
];

const refs = {
  list: document.querySelector(".js-list"),
  input: document.querySelector("#filter"),
};

const markupList = createListItemMarkup(tech);
populateList(markupList);

function createListItemMarkup(items) {
  return items.map((item) => `<li>${item.label}</li>`).join("");
}

refs.input.addEventListener("input", onInputFilter);

function onInputFilter(e) {
  const filter = e.target.value.toLowerCase();

  const filteredItems = tech.filter((el) =>
    el.label.toLowerCase().includes(filter)
  );
  const markupList = createListItemMarkup(filteredItems);

  populateList(markupList);
}

function populateList(markup) {
  refs.list.innerHTML = markup;
}
