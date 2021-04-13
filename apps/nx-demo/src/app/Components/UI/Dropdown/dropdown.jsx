import React from 'react';
import FontAwesome from 'react-fontawesome';

import Button from '../Button/button';

class Dropdown extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isListOpen: false,
            headerTitle: this.props.title
        }

        this.toggleList = this.toggleList.bind(this);
        this.selectItem = this.selectItem.bind(this);
    }

    toggleList() {
        this.setState(prevState => ({ isListOpen: !prevState.isListOpen }))
    }

    selectItem = (item) => {
        const { resetThenSet } = this.props;
        const { title, id, key } = item;

        console.log(this.props);

        this.setState({
            headerTitle: title,
            isListOpen: false,
        }, () => {
            resetThenSet(id, key)
        });
    }

    render() {
        const { isListOpen, headerTitle } = this.state;
        const { options } = this.props;

        return (
            <div className="dd-wrapper">
                <Button className="dd-header" clicked={this.toggleList}>
                    <div className="dd-header-title">{headerTitle}</div>
                    {isListOpen ? <FontAwesome name="angle-up" size="2x" /> : <FontAwesome name="angle-down" size="2x" />}
                </Button>
                {
                    isListOpen &&
                    <div className="dd-list">
                        {options.map(list => <Button
                            key={list.id}
                            className="dd-list-item"
                            clicked={() => this.selectItem(list)}>
                            {list.title}
                            {' '}
                            {list.selected && <FontAwesome name="check" />}</Button>)}
                    </div>
                }

            </div>
        )
    }
}

export default Dropdown;