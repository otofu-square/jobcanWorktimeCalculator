import * as React from "react";

export interface HelloProps {
  compiler: string;
  framework: string;
}

const MainPage = () =>
  <div>
    <h3>Calculate Working Time</h3>

    <p className="notify">
      値の取得・更新をするためには{" "}
      <a href="https://ssl.jobcan.jp/employee/attendance" target="_blank">
        JOBCAN の出勤簿ページ
      </a>{" "}
      へのアクセスが必要です。
    </p>
    <p className="notify">JOBCAN で「勤務中」にデータ取得を行った場合、貯金が大きくマイナスになる場合があります。</p>

    <dl>
      <hr />
      <dt id="stdWorkDays">所定労働日数 <small>days</small></dt>
      <dd />
      <dt id="stdWorkHours">所定労働時間 <small>hours</small></dt>
      <dd />
      <hr />
      <dt id="workedDays">実働日数 <small>days</small></dt>
      <dd />
      <dt id="workedHours">実労働時間 <small>hours</small></dt>
      <dd />
      <dt id="salariedDays">有給休暇消化日数 <small>days</small></dt>
      <dd />
      <hr />
      <dt id="remainWorkDays">今月の残り出勤可能日数 <small>days</small></dt>
      <dd />
      <dt id="excessWorkTimes">給与労働時間 <small>hours</small></dt>
      <dd />
      <dt id="workTimeMargin">何時間余裕があるか（貯金） <small>hours</small></dt>
      <dd />
      <dt id="requiredWorkTimes">1日あたりの労働時間目安 <small>hours</small></dt>
      <dd />
      <hr />
      <dt id="lastUpdatedAt">最終更新日時</dt>
      <dd />
    </dl>
  </div>;

export default MainPage;
