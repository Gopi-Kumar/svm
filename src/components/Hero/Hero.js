import './Hero.css'
import { mapStateToProps, mapDispatchToProps } from '../../store/mapStore'
import { connect } from 'react-redux'

const Hero = (props) => {

    const handleClass = (e) => {
        props.updateClass(e.target.value);

    }
    const handleSubject = (e) => {
        props.updateSubject(e.target.value);
    }

    const chooseSubject = ()=>{
        if(props.currentClass == 8){
            return (
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="science">विज्ञान</option>
                    <option value="hindi">हिंदी</option>
                </select>
            )
        }else if(props.currentClass == 9){
            return (
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="biology">Biology</option>
                    <option value="chemistry">Biology</option>
                    <option value="physics">Biology</option>
                    <option value="history">Biology</option>
                    <option value="political">Biology</option>
                    <option value="ecomomics">Biology</option>
                    <option value="geography">Biology</option>
                    <option value="hindi">हिंदी</option>
                </select>
            )
        }else{
            <select id="subject" onChange={handleSubject}>
                <option value="math">गणित</option>
                <option value="biology">Biology</option>
                <option value="hindi">हिंदी</option>
            </select>
        }
    }
    return (
        <div className="hero">
            <div className="select_class">
                <label htmlFor="class">वर्ग चुनें|
                </label>
                <select id="class" onChange={handleClass} >
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                </select>
            </div>
            <div className="choose_subject">
                <label htmlFor="subject">विषय चुनें </label>
                {chooseSubject()}
            </div>   
            {/* <div className="choose_subject">
                <label htmlFor="subject">विषय चुनें </label>
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="biology">Biology</option>
                    <option value="hindi">हिंदी</option>
                </select>
            </div>
            <div className="choose_subject">
                <label htmlFor="subject">विषय चुनें </label>
                <select id="subject" onChange={handleSubject}>
                    <option value="math">गणित</option>
                    <option value="chemistry">Chemistry</option>
                    <option value="hindi">हिंदी</option>
                </select>
            </div> */}
           
            <a href="/classes"><button>पढाई शुरू करे </button></a>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);