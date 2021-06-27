var data = [
  {
    seq: "Principal",
    data: "2020-08-20",
    code: "5A2937Z",
  },
  {
    seq: 1,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 2,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 3,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 4,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 5,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 6,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 7,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 8,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 9,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 10,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 11,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 12,
    data: "2020-08-20",
    code: "5A2237Z",
  },
  {
    seq: 13,
    data: "2020-08-20",
    code: "5A2237Z",
  },
];

function myFunction() {
  let dataIndex = 0;
  let rowIndex = 1;

  //   add data in col 1
  var table = document.getElementById("innerCol1");
  while (rowIndex <= 4) {
    var row = table.insertRow(rowIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[dataIndex].seq;
    cell2.innerHTML = data[dataIndex].data;
    cell3.innerHTML = data[dataIndex].code;

    dataIndex++;
    rowIndex++;
  }

  //   add data in col 2
  rowIndex = 1;
  table = document.getElementById("innerCol2");
  while (rowIndex <= 4) {
    var row = table.insertRow(rowIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[dataIndex].seq;
    cell2.innerHTML = data[dataIndex].data;
    cell3.innerHTML = data[dataIndex].code;

    dataIndex++;
    rowIndex++;
  }

  //   add data in col 3
  rowIndex = 1;
  table = document.getElementById("innerCol3");
  while (rowIndex <= 4) {
    var row = table.insertRow(rowIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[dataIndex].seq;
    cell2.innerHTML = data[dataIndex].data;
    cell3.innerHTML = data[dataIndex].code;

    dataIndex++;
    rowIndex++;
  }

  //   add data in col 4
  rowIndex = 1;
  table = document.getElementById("innerCol4");
  while (rowIndex <= 4) {
    var row = table.insertRow(rowIndex);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = data[dataIndex].seq;
    cell2.innerHTML = data[dataIndex].data;
    cell3.innerHTML = data[dataIndex].code;

    dataIndex++;
    rowIndex++;
  }
}
