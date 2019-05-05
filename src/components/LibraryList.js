//purpose is to render the data
import React, { Component } from 'react';
//instead of importing now, we can now pull data from state objects
// we get access of data by "connect"
import { connect } from 'react-redux';
import { FlatList } from 'react-native';
import ListItem from './ListItem';

class LibraryList extends Component {
    renderItem(library){
        return <ListItem library={library} />;
    }

    render() {
            <FlatList
            data={this.props.libraries}
            renderItem={this.renderItem}
            keyExtractor={(library) => library.id}
            />
    }
}

const mapStateToProps = state => {
    return {
        libraries: state.libraries
        //this is now a prop, which gets passed into LibraryList
    };
};

export default connect(mapStateToProps)(LibraryList);