// Fungsi untuk mendapatkan data json.

function getDataList(url, succes, error) {
  let xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        succes(xhr.response);
      } else if ((xhr.status = 404)) {
        error();
      }
    }
  };

  xhr.open("get", url);
  xhr.send();
}

getDataList(
  "../data/list.json",
  (result) => {
    const dataList = JSON.parse(result);
    const contentDiv = document.querySelector(".content");

    dataList.forEach((data) => {
      const div = document.createElement("div");
      div.className = "day-list";
      div.innerHTML = `
        <div class="day-header"> 
          ${data.date}
        </div>
        <h3 class="header">Daftar List</h3>
      `;

      // Menambahkan task list ke dalam setiap div berdasarkan tanggal
      const taskListDiv = document.createElement("div");
      taskListDiv.className = "task-list";

      data.task.forEach((task) => {
        const taskDiv = document.createElement("div");
        taskDiv.className = "task-item";
        taskDiv.innerHTML = `
          ${
            task.completed
              ? '<img src="assets/image/check.png" alt="Completed" />'
              : '<img src="assets/image/uncheck.png" alt="Not Completed" />'
          }
          <span class="task-name">
            ${task.name}
          </span>
        `;
        taskListDiv.appendChild(taskDiv);
      });

      div.appendChild(taskListDiv);
      contentDiv.appendChild(div);
    });
  },
  () => {
    console.error("Failed to fetch data.");
  }
);
