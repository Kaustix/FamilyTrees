import React, {PropTypes} from 'react';
import _ from 'lodash';

class TextBox extends React.Component {
    constructor(props) {
        super(props);
    }
    
    componentWillMount() {
        this.id = _.uniqueId(`${props.name}_`)
    }
    
    render() {
        return (
            <div className="form-group">
                <label for={this.id} className="col-sm-2 control-label">{labelName}</label>
                <div className="col-sm-10">
                    <input type={props.type} className="form-control" id={this.id} placeholder={props.placeholder}/>
                </div>
            </div>  
        )
    }
}

TextBox.propTypes = {
    labelName: PropTypes.string.isRequired,
    type: PropTypes.string,
    placeholder: PropTypes.string
}

TextBox.defaultProps = {
    type: 'text'
}

export default TextBox;