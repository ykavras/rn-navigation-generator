const component = screenName => `
import React, {Component} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

class ${screenName} extends Component {
  componentDidMount() {
    console.log('${screenName}');
  }

  render() {
    return (
      <View style={styles.wrapper}>
        <Text>${screenName}</Text>
      </View>
    );
  }
}

export default ${screenName};
`;

const styles = `
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});

export default styles;
`;

module.exports = {
    component,
    styles
};