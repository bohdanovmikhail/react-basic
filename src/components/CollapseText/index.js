import React, { useState } from 'react';

export function _CollapseText({ toggleText, children }) {
    const [isOpen, setOpen] = useState(false);
    const data = isOpen && <div>{children}</div>;

    return (
        <div>
            <label>
                <input type="checkbox" onChange={e => setOpen(e.target.checked)} />
                {toggleText}
            </label>

            {data}
        </div>
    );
}

_CollapseText.defaultProps = {
    toggleText: 'Toggle',
};

export class CollapseText extends React.Component {
    static defaultProps = {
        toggleText: 'Toggle',
    };

    constructor(props) {
        super(props);

        this.contentRef = React.createRef();
        console.log(this.contentRef);
    }

    state = {
        isOpen: false,
    };

    componentDidMount() {
        this.setElementDisplay();
    }

    componentDidUpdate() {
        this.setElementDisplay();
    }

    render() {
        return (
            <div>
                {this.getControls()}
                
                <div ref={this.contentRef}>
                    {this.props.children}
                </div>
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

    setOpen(value) {
        this.setState({
            isOpen: value,
        });
    }

    setElementDisplay() {
        const { isOpen } = this.state;

        this.contentRef.current.style.display = !isOpen ? 'none' : null;
    }
}
