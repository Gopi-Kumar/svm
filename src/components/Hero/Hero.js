/* eslint-disable eqeqeq */
import './Hero.css'
import { mapStateToProps, mapDispatchToProps } from '../../store/mapStore'
import { connect } from 'react-redux'
import { baseUrl } from '../../globalVar'
const Hero = (props) => {
    const handleClass = (e) => {
        props.updateClass(e.target.value);

    }
    const handleSubject = (e) => {
        props.updateSubject(e.target.value);
    }

    const chooseSubject = (currentClass)=>{
        if(currentClass == 8){
            return (
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="science">विज्ञान</option>
                    <option value="hindi">हिंदी</option>
                </select>
            )
        }else if(currentClass == 9 || currentClass == 10){
            return (
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="biology">जीवविज्ञान</option>
                    <option value="chemistry">रसायनशास्त्र</option>
                    <option value="physics">भौतिकी</option>
                    <option value="history">इतिहास</option>
                    <option value="political">राजनितिशास्त्र</option>
                    <option value="ecomomics">अर्थशास्त्र</option>
                    <option value="geography">भूगोल</option>
                    <option value="hindi">हिंदी</option>
                </select>
            )
        }
    }
    const handleStudy = () =>{
        const appBaseUrl = baseUrl;
        let pageToRender = `${props.currentSubject}${props.currentClass}`;
        if(pageToRender == "math8"){
           
            return window.location.href = `${appBaseUrl}class8/math`
        }else if(pageToRender == "math9"){
            return window.location.href = `${appBaseUrl}class9/math`
        }else if(pageToRender == "math10"){
            return window.location.href = `${appBaseUrl}class10/math`
        }else if(pageToRender == "hindi8"){
            return window.location.href = `${appBaseUrl}class8/hindi`
        }else if(pageToRender == "science8"){
            return window.location.href = `${appBaseUrl}class8/science`
        }else if(pageToRender == "physics9"){
            return window.location.href = `${appBaseUrl}class9/physics`
        }else if(pageToRender == "chemistry9"){
            return window.location.href = `${appBaseUrl}class9/chemistry`
        }else if(pageToRender == "biology9"){
            return window.location.href = `${appBaseUrl}class9/biology`
        }else if(pageToRender == "history9"){
            return window.location.href = `${appBaseUrl}class9/history`
        }else if(pageToRender == "geography9"){
            return window.location.href = `${appBaseUrl}class9/geography`
        }else if(pageToRender == "political9"){
            return window.location.href = `${appBaseUrl}class9/political`
        }else if(pageToRender == "ecomomics9"){
            return window.location.href = `${appBaseUrl}class9/ecomomics`
        }else if(pageToRender == "hindi9"){
            return window.location.href = `${appBaseUrl}class10/hindi`
        }else if(pageToRender == "physics10"){
            return window.location.href = `${appBaseUrl}class10/physics`
        }else if(pageToRender == "chemistry10"){
            return window.location.href = `${appBaseUrl}class10/chemistry`
        }else if(pageToRender == "biology9"){
            return window.location.href = `${appBaseUrl}class9/biology`
        }else if(pageToRender == "history10"){
            return window.location.href = `${appBaseUrl}class10/history`
        }else if(pageToRender == "geography10"){
            return window.location.href = `${appBaseUrl}class10/geography`
        }else if(pageToRender == "political10"){
            return window.location.href = `${appBaseUrl}class10/political`
        }else if(pageToRender == "ecomomics10"){
            return window.location.href = `${appBaseUrl}class10/ecomomics`
        }else if(pageToRender == "hindi10"){
            return window.location.href = `${appBaseUrl}class10/hindi`
        }
        else{
            return window.location.href = `${appBaseUrl}`
        }
        
    }
    return (
        <div className="hero">
            <div className="select_class">
                <label htmlFor="class">वर्ग चुनें|
                </label>
                <select id="class" onChange={handleClass} value={props.currentClass} >
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                </select>
            </div>
            <div className="choose_subject">
                <label htmlFor="subject">विषय चुनें </label>
                {chooseSubject(props.currentClass)}
            </div>   
            <button onClick={handleStudy}>पढाई शुरू करे </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);