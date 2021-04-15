new Chart(document.getElementById("bar-chart"), {
  type: "horizontalBar",
  data: {
    labels: [
      "Heart Diseases",
      "Malignant Neoplasms",
      "Diabetes Mellitus",
      "Cerebrovascular Disease",
      "Accidents Except Drug Poisoning",
    ],
    datasets: [
      {
        label: "Deaths",
        backgroundColor: [
          "#3e95cd",
          "#8e5ea2",
          "#3cba9f",
          "#e8c3b9",
          "#c45850",
        ],
        data: [1427, 1192, 235, 191, 190],
      },
    ],
  },
  options: {
    legend: { display: false },
    title: {
      display: true,
      text:
        "(Michael Caridad)2017 New York City Leading Hispanic Male Causes of Death",
    },
  },
});
