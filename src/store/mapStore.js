import { updateClass, updateSubject, updateChapter } from './store'

export const mapStateToProps = (state, ownProp) => {
    return {
        currentClass: state.currentClass,
        currentSubject: state.currentSubject,
        currentChapter: state.currentChapter
    }
}

export const mapDispatchToProps = (dispatch) => {
    return {
        updateClass: currentClass => dispatch(updateClass(currentClass)),
        updateSubject: currentSubject => dispatch(updateSubject(currentSubject)),
        updateChapter: currentChapter => dispatch(updateChapter(currentChapter))
    }
}

