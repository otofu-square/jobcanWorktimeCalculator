import { connect } from "react-redux";

import DefinitionList from "../components/DefinitionList";

const mapStateToProps = (state: any) => ({
  stdWorkDays: state.stdWorkDays,
  stdWorkHours: state.stdWorkHours,
  workedDays: state.workedDays,
  workedHours: state.workedHours,
  salariedDays: state.salariedDays,
  remainWorkDays: state.remainWorkDays,
  excessWorkTimes: state.excessWorkTimes,
  workTimeMargin: state.workTimeMargin,
  requiredWorkTimes: state.requiredWorkTimes,
  lastUpdatedAt: state.lastUpdatedAt
});

const mapDispatchToProps = (): any => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DefinitionList);
