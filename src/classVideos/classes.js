import { mapStateToProps, mapDispatchToProps } from '../store/mapStore'
import { connect } from 'react-redux'
import  { Redirect } from 'react-router-dom'
const classes = (props)=>{
    const pageToRender = `${props.currentSubject}${props.currentClass}`;
    if(pageToRender == "math8"){

    }
    return (
        <Redirect to="/class8/math"/>
    )
}
export default connect(mapStateToProps, mapDispatchToProps)(classes);