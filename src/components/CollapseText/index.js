import React from 'react';

export class CollapseText extends React.Component {
    static defaultProps = {
        toggleText: 'Toggle',
    };

    state = {
        isOpen: false,
    };

    render() {
        return (
            <div>
                {this.getControls()}
                {this.getContent()}
            </div>                
        );
    }

    getControls() {
        return (
            <label>
                <input
                    type="checkbox"
                    onChange={event => this.setOpen(event.target.checked)}
                />
                {this.props.toggleText}
            </label>
        );
    }

    getContent() {
        if (!this.state.isOpen) {
            return null;
        }

        return (
            <div>
                {this.props.children}
            </div>
        );
    }

    setOpen(value) {
        this.setState({
            isOpen: value,
        });
    }
}
