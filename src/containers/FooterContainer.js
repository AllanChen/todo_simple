import { connect } from 'react-redux'
import Footer from '../components/Footer'
import {setAreAllMark,setAllUNMark} from '../actions'

const mapStateToProps = (state, ownProps) => {
    return {
        prop: state.prop
    }
}

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//         dispatch1: () => {
//             dispatch(actionCreator)
//         }        
//     }
// }

const mapDispatchToProps = (dispatch, ownProps) =>({
    onClick: () => {
      dispatch(setAreAllMark(ownProps.filter))
    }
})

const FooterContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Footer)

export default FooterContainer