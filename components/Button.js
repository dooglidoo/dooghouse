import React, { Component } from 'react';
import { 
    Text, 
    TouchableOpacity
} from 'react-native';

export default class Button extends Component {
    state = { status: true };
    render() {
        console.log(this.props);
        return (
            <TouchableOpacity
                style={{ backgroundColor: this.props.backgroundColor, borderRadius: 50, padding: 20, margin: 20 }}
                // onPress={this.props.onPress}
                onPress={this.props.onPress}
                children={
                    <>
                        <Text>{this.props.text}</Text>
                        <Text style={{color: 'black', textAlign: 'center', marginVertical: 10}}>{this.state.status.toString()}</Text>
                    </>
                }
            />
        );
    }
};