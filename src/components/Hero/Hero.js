import './Hero.css'
const Hero = () => {
    return (
        <div className="hero">
            <div className="select_class">
                <label htmlFor="class">वर्ग चुनें|
</label>
                <select id="class">
                    <option value="6">6th</option>
                    <option value="6">7th</option>
                    <option value="6">8th</option>
                    <option value="6">9th</option>
                    <option value="6">10th</option>
                </select>
            </div>
        </div>
    )
} 

export default Hero;