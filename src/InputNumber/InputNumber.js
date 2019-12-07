import React from 'react';
import PropTypes from 'prop-types'

class InputNumber extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            focus: false,
            innerValue: ''
        }
    }
    static propTypes = {
        value: PropTypes.string,
        onChange: PropTypes.func
    }

    static defaultProps = {
        onChange: () => {}
    }

    get isControl(){
        return 'value' in this.props
    }

    get value() {
        if(this.isControl){
            return this.props.value
        } else {
            return this.state.innerValue
        }
    }

    render() {
        return (
            <div>
                <p></p>
                <input
                    value={this.value}

                    onFocus={e => {
                        this.setState({focus: true
                        })
                    }}
                    onBlur={e => {
                        this.setState({focus: false
                        })
                    }}
                    onChange={(e) => {
                        if(!this.isControl){
                            this.setState({
                                innerValue: e.target.value
                            })
                        }
                        this.props.onChange(e)
                    }}
                />
            </div>
        )
    }

    componentDidMount() {
        this.setState({
            innerValue: this.props.defaultValue
        })
    }

}


export default InputNumber
