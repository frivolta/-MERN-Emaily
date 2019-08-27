import React from 'react'
import { connect } from 'react-redux';
import formFields from './formFields';
import { submitSurvey } from '../../actions';
import { withRouter } from 'react-router-dom';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = formFields.map(field => (
    <div key={field.name}>
      <label>{field.label}</label>
      <div>{formValues[field.name]}</div>
    </div>
  ))
  return (
    <div>
      <h5>Please review and confirm your campaign</h5>
      {reviewFields}
      <button
        className="yellow white-text darken-3 btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={() => submitSurvey(formValues, history)}
        className="green btn-flat right white-text">
        Send Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    formValues: state.form.surveyForm.values
  }
}
export default connect(mapStateToProps, { submitSurvey })(withRouter(SurveyFormReview));