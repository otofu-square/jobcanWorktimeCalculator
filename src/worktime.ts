import * as $ from "jquery";

/*
 * Scraping Jobcan employee/attendance page.
 * ft. https://github.com/hanocha/how-many-work-time/blob/master/app/models/work_time_info.rb
 */
const infotplRow = $(".infotpl");
const rowLength = $(".infotpl").length;

// 所定労働日数
const stdWorkDays = ~~$(".infotpl td")[3].innerText.split(" ")[0];

// 所定労働時間
const stdWorkHours = stdWorkDays * 8;

// 実働日数
const workedDays = ~~$(".infotpl td")[4].innerText;

// 実労働時間
const workedHours = (() => {
  let tmpWorked = $(".infotpl td")[10].innerText;
  let tmpWorkedHours = ~~tmpWorked.split(":")[0];
  let tmpWorkedMinutes = ~~tmpWorked.split(":")[1];
  return tmpWorkedHours + tmpWorkedMinutes / 60;
})();

// 有給休暇消化日数
const salariedDays = (() => {
  let tmpSalariedDays = 0;
  let tmpSalariedHarfDaysAm = 0;
  let tmpSalariedHarfDaysPm = 0;

  // 後ろから３カラム分のデータ（があるかもしれない）
  for (let i = 1; i < 4; i++) {
    let thText = !!$(".infotpl th")[rowLength - i]
      ? $(".infotpl th")[rowLength - i].innerText
      : null;
    switch (thText) {
      case "有休(全休)":
        tmpSalariedDays = ~~infotplRow[rowLength - i].innerText;
        break;
      case "有休(AM休)":
        tmpSalariedHarfDaysAm = ~~infotplRow[rowLength - i].innerText;
        break;
      case "有休(PM休)":
        tmpSalariedHarfDaysPm = ~~infotplRow[rowLength - i].innerText;
        break;
      default:
        break;
    }
  }
  return tmpSalariedDays + tmpSalariedHarfDaysAm + tmpSalariedHarfDaysPm;
})();

// 今月の残り出勤可能日数
// 所定労働日数から、(実働日数+有給(全休))を引いたもの
const remainWorkDays = stdWorkDays - (workedDays + salariedDays);

// 給与労働時間
// 実労働時間に有給休暇（1 day = 8 hours とする）分の労働時間を足したもの
const excessWorkTimes = workedHours + salariedDays * 8;

// 何時間余裕があるか
// 残りの出勤可能日全て 8 時間労働すると仮定したときの猶予時間数
const workTimeMargin = excessWorkTimes - (stdWorkHours - remainWorkDays * 9);

// 1日あたり何時間働けばいいか
// 所定労働時間から実質労働時間を引いた値を残りの出勤可能日数で割ったもの
const requiredWorkTimes = (() => {
  let shortTime = stdWorkHours - excessWorkTimes;
  if (remainWorkDays == 0) {
    return shortTime;
  }
  return (stdWorkHours - excessWorkTimes) / remainWorkDays;
})();

const lastUpdatedAt = Date.now();

const jobcanWorktimes = {
  state: {
    stdWorkDays: stdWorkDays,
    stdWorkHours: stdWorkHours,
    workedDays: workedDays,
    workedHours: workedHours,
    salariedDays: salariedDays,
    remainWorkDays: remainWorkDays,
    excessWorkTimes: excessWorkTimes,
    workTimeMargin: workTimeMargin,
    requiredWorkTimes: requiredWorkTimes,
    lastUpdatedAt: lastUpdatedAt
  }
};

chrome.storage.sync.set(jobcanWorktimes, () => {});
