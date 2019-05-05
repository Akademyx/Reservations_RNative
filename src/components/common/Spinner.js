import React from 'react';
import { View, ActivityIndicator } from 'react-native';
//ActivityIndicator is a spinner
//no state component for spinner

const Spinner = ({ size }) => {
    return (
        <View style={styles.spinnerStyle}>
            <ActivityIndicator size={size || 'large'} />
        </View>
    );
};
//activity indicator has two properties assigned to it, and size is a key term
//line 9 says, if i dont specify size, then it will be large

const styles = {
    spinnerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
}

export { Spinner };