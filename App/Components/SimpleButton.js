/**
 * Created by leon on 16/4/27.
 */
import React, {
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default class SimpleButton extends React.Component {
    render() {
        return (
            <TouchableOpacity onPress={this.props.onPress}>
                <View>
                    <Text>{this.props.customText || 'Simple Button'}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

SimpleButton.protoTypes = {
    onPress: React.PropTypes.func.isRequired,
    customText: React.PropTypes.string
};

