interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "New York"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Smith",
  age: 22,
  location: "Los Angeles"
};

const studentsList: Array<Student> = [student1, student2];

const table: HTMLTableElement = document.createElement("table");

const headerRow: HTMLTableRowElement = table.insertRow();

const th1: HTMLTableCellElement = document.createElement("th");
th1.textContent = "First Name";

const th2: HTMLTableCellElement = document.createElement("th");
th2.textContent = "Location";

headerRow.appendChild(th1);
headerRow.appendChild(th2);

studentsList.forEach((student: Student) => {
  const row: HTMLTableRowElement = table.insertRow();

  const cell1: HTMLTableCellElement = row.insertCell();
  cell1.textContent = student.firstName;

  const cell2: HTMLTableCellElement = row.insertCell();
  cell2.textContent = student.location;
});

document.body.appendChild(table);