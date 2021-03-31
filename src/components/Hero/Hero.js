import './Hero.css'
import { mapStateToProps, mapDispatchToProps } from '../../store/mapStore'
import { connect } from 'react-redux'
const Hero = (props) => {
       console.log(props.currentClass, props.currentSubject);
       return (
        <div className="hero">
            <div className="select_class">
                <label htmlFor="class">वर्ग चुनें|
                </label>
                <select id="class" onChange={(e) => props.updateClass(e.target.value)} >
                    <option value="6">6th</option>
                    <option value="7">7th</option>
                    <option value="8">8th</option>
                    <option value="9">9th</option>
                    <option value="10">10th</option>
                </select>
            </div>
            <div className="choose_subject">
                <label htmlFor="subject">विषय चुनें </label>
                <select id="subject" onChange={(e) => props.updateSubject(e.target.value)}>
                    <option value="math">गणित</option>
                    <option value="science">विज्ञान</option>
                    <option value="hindi">हिंदी</option>
                </select>
            </div>
            {/* <div className="choose_chapter">
                <label htmlFor="subject">चैप्टर चुनें </label>
                <select id="subject" onChange={(e) => props.updateSubject(e.target.value)}>
                    <option value="math">गणित</option>
                    <option value="science">विज्ञान</option>
                    <option value="hindi">हिंदी</option>
                </select>
            </div> */}
            <button>पढाई शुरू करे </button>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Hero);