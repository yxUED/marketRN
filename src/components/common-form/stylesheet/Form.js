const HELP_COLOR = '#999999';
const FORM_BORDER_COLOR = '#e3e3e3';
const FIELD_BACKGROUND_COLOR = '#fff';
const FIELD_GAP = 15;

export default {
  formStyle: {
    paddingVertical: 20
  },
  formTitle: {
    marginLeft: FIELD_GAP,
    color: HELP_COLOR,
    fontSize: 12,
    paddingBottom: 7
  },
  fieldset: {
    borderColor: FORM_BORDER_COLOR,
    backgroundColor: FIELD_BACKGROUND_COLOR,
  },
  errorList: {
    paddingLeft: FIELD_GAP,
    paddingTop: FIELD_GAP
  },
  errorItem: {
    marginBottom: 7,
    color: '#ee5930'
  },
};
