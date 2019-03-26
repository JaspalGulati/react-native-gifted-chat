/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';
import { icSendChat } from '../media/icSendChat';

export default function Send({ text, containerStyle, onSend, children, textStyle, label, alwaysShowSend, disabled }) {
  if (alwaysShowSend || text.trim().length > 0) {
    return (
      <TouchableOpacity
        testID="send"
        accessible
        accessibilityLabel="send"
        style={[styles.container, containerStyle]}
        onPress={() => {
          onSend({ text: text.trim() }, true);
        }}
        accessibilityTraits="button"
        disabled={disabled}
        activeOpacity={0.8}
      >
        <Image resizeMode={'contain'} source={icSendChat} style={styles.sendIconImage} />
      </TouchableOpacity>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    marginVertical: 8,
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    borderStyle: "solid",
    borderWidth: 0.8,
    borderColor: "#dedede"
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
  sendIconImage: {
    width: 19,
    height: 17
  }
});

Send.defaultProps = {
  text: '',
  onSend: () => { },
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false,
  disabled: false,
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
  disabled: PropTypes.bool,
};
