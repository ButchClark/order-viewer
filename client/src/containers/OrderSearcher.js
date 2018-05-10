import React, {Component} from 'react'
import {getRecentClientOrderGuids} from "../actions";
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

class OrderSearcher extends Component{
    componentWillMount() {
        console.log('>OrderSearcher.componentWillMount() - calling getRecentClientOrderGuids()')
        this.props.getRecentClientOrderGuids()
    }


    render(){
        console.log('>OrderSearcher.render() - this.props.guids:')
        console.log(` .. this.props.guids: ${JSON.stringify(this.props.guids)}`)

        const guidList = this.props.guids.map((guid,index) =><li key={index}>{guid}</li>)
        console.log(' .. guidList set to:')
        console.dir(guidList)

        return(
            <div>
                <h4>Search for clientOrderGuid</h4>
                <ul className="guidList">
                    {guidList}
                </ul>
            </div>
    )
    }
}

const mapStateToProps = state => ({
    guids: state.display.recentGuids
})

const mapDispatchToProps = dispatch => bindActionCreators({
    getRecentClientOrderGuids
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderSearcher)