import {connect} from 'react-redux'
import {mapStateToProps, mapDispatchToProps} from '../store/mapStore'
const handleStudy = (props)=>{
    const appBaseUrl = "http://localhost:3000/";
    let pageToRender = `${props.currentSubject}${props.currentClass}`;
    if(pageToRender == "math8"){
        console.log(pageToRender);
        return window.location.href = `${appBaseUrl}class8/math`
        // return (<Redirect to="/class8/math"/>)
    }else if(pageToRender == "math9"){
        return window.location.href = `${appBaseUrl}class9/math`
    }else if(pageToRender == "math10"){
        return window.location.href = `${appBaseUrl}class10/math`
    }else{
        return window.location.href = `${appBaseUrl}`
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(handleStudy);