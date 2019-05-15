import React from 'react'
import { connect } from 'react-redux'

import Item from './item'
import Loader from '../base/loader'
import { fetchPeople } from '../../ac'
import { peopleSelector } from '../../selectors'

import TestComp from '../test_material_ui'

class PeopleList extends React.Component {
    componentDidMount () {
        this.props.fetchPeople()
    }

    get main () {
        return (
            <div>
                <TestComp />
                <h2>Список людей</h2>
                <ul>
                    {
                        this.props.people.map( (man) =>
                            <Item key={man.id} man={man} /> 
                        )
                    }
                </ul>
            </div>
        )
    }

    render () {
        return this.props.people.length ? this.main : <Loader />
    }
}

export default connect(
    (state) => {
        return {
            people: peopleSelector(state)
        }
    },
    { fetchPeople }
)(PeopleList)