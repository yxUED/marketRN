import { Platform, StyleSheet } from 'react-native';

const BORDER_COLOR = '#e3e3e3';
const FONT_COLOR = '#333';
const FONT_SIZE = 14;

const ICON_WIDTH = 36;
const ALERT_IMG_SIZE = 18;
const CHEVRON_SIZE = 26;
const FIELD_GAP = 15;
const INPUT_HEIGHT = 25;

export default {
  input: {
    flexDirection:'row',
    marginLeft: FIELD_GAP,
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: BORDER_COLOR,
    height: (FIELD_GAP * 2) + INPUT_HEIGHT,
    ...Platform.select({
      ios: {
        paddingBottom: FIELD_GAP,
        paddingTop: FIELD_GAP
      }
    })
  },
  controlLabel: {
    marginRight: 10,
    textAlignVertical: 'center'
  },
  textbox: {
    flex: 1,
    textAlign: 'right',
    fontSize: FONT_SIZE,
    color: FONT_COLOR,
    ...Platform.select({
      android: {
        paddingLeft: 0,
        paddingRight: 0
      },
      web: {
        outline: 'none',
        justifyContent: 'flex-end',
        border: 'none'
      }
    })
  },
  errorBlock: {
    width: ALERT_IMG_SIZE,
    height: ALERT_IMG_SIZE,
    marginLeft: (ICON_WIDTH - ALERT_IMG_SIZE) / 2,
    marginRight: (ICON_WIDTH - ALERT_IMG_SIZE) / 2
  },
  chevronBlock: {
    width: CHEVRON_SIZE,
    height: CHEVRON_SIZE,
    marginLeft: (ICON_WIDTH - CHEVRON_SIZE) / 2,
    marginRight: (ICON_WIDTH - CHEVRON_SIZE) / 2
  },
  select: {
    fontSize: FONT_SIZE,
    color: FONT_COLOR,
    ...Platform.select({
      web: {
        outline: 'none',
        border: 'none'
      }
    })
  },
  datepicker: {
    dateTouchBody: {
      height: INPUT_HEIGHT,
      alignItems: 'flex-end',
    },
    dateInput: {
      height: INPUT_HEIGHT,
      borderWidth: 0,
      alignItems: 'flex-end'
    },
    dateText: {
      color: FONT_COLOR,
      fontSize: FONT_SIZE
    },
    placeholderText: {
      color: FONT_COLOR,
      fontSize: FONT_SIZE
    }
  }
};
