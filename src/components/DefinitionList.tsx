import * as React from "react";
import { Table, TableBody, TableRow, TableRowColumn } from "material-ui/Table";

interface Props {
  stdWorkDays: string;
  stdWorkHours: string;
  workedDays: string;
  workedHours: number;
  salariedDays: string;
  remainWorkDays: string;
  excessWorkTimes: number;
  workTimeMargin: number;
  requiredWorkTimes: number;
  lastUpdatedAt: string;
}

const formatDate = (d: Date): string => {
  const [year, month, date, hours, minutes] = [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
    d.getHours(),
    d.getMinutes()
  ];
  return `${year}/${month}/${date} ${hours}:${minutes}`;
};

const DefinitionList = (props: Props) =>
  <Table>
    <TableBody displayRowCheckbox={false}>
      <TableRow>
        <TableRowColumn>所定労働日数</TableRowColumn>
        <TableRowColumn>{props.stdWorkDays}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>所定労働時間</TableRowColumn>
        <TableRowColumn>{props.stdWorkHours}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>実働日数</TableRowColumn>
        <TableRowColumn>{props.workedDays}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>実労働時間</TableRowColumn>
        <TableRowColumn>{props.workedHours.toFixed(2)}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>有給消化日数</TableRowColumn>
        <TableRowColumn>{props.salariedDays}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>今月の残り出勤可能日数</TableRowColumn>
        <TableRowColumn>{props.remainWorkDays}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>給与労働時間</TableRowColumn>
        <TableRowColumn>{props.excessWorkTimes.toFixed(2)}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>何時間余裕があるか（貯金）</TableRowColumn>
        <TableRowColumn>{props.workTimeMargin.toFixed(2)}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>一日あたりの労働時間目安</TableRowColumn>
        <TableRowColumn>{props.requiredWorkTimes.toFixed(2)}</TableRowColumn>
      </TableRow>
      <TableRow>
        <TableRowColumn>最終更新日時</TableRowColumn>
        <TableRowColumn>
          {formatDate(new Date(props.lastUpdatedAt))}
        </TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>;

export default DefinitionList;
