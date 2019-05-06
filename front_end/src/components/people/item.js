import React from 'react'

class PeopleItem extends React.Component {
    render () {
        const { man } = this.props

        return (
            <li>
                <span>{man.name}</span>
                <span> | </span>
                <span>{man.sername}</span>
            </li>
        )
    }
}

export default PeopleItem