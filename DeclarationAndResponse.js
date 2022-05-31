const id_list = [
  ["muzi", "frodo", "apeach", "neo"],
  ["con", "ryan"],
];
const report = [
  ["muzi frodo", "apeach frodo", "frodo neo", "muzi neo", "apeach muzi"],
  ["ryan con", "ryan con", "ryan con", "ryan con"],
];
const k = [2, 3];
const result = [
  [2, 1, 1, 0],
  [0, 0],
];

(() => {
  for (let index = 0; index < 2; index++) {
    const params = {
      id_list: id_list[index],
      report: report[index],
      k: k[index],
    };
    if (result[index] === solution(params)) {
      console.log(`${index + 1}번째 성공`);
    } else {
      console.log(`${index + 1}번째 실패`);
    }
  }
})();

function solution({ id_list, report, k }) {
  const answer = id_list.map((name) => {
    return {
      name: name,
      count: 0,
    };
  });
  console.log(answer);
  id_list.map((name) => {
    report.map((reportName) => {
      console.log(reportName, reportName.includes(name));
      if (reportName.includes(name)) {
      }
    });
  });
  return answer;
}
