import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import { selectIsClassificadosFetching } from "../../redux/classificado/classificado.selectors";
import WithSpinner from "../with-spinner/with-spinner";
import ClassificadoOverview from "./classificado-overview";

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsClassificadosFetching,
});

const ClassificadoOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(ClassificadoOverview);

export default ClassificadoOverviewContainer;
