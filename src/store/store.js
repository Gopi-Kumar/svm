const UPDATE_CLASS = "UPDATE_CLASS"
const UPDATE_SUBJECT = "UPDATE_SUBJECT"
const UPDATE_CHAPTER = "UPDATE_CHAPTER"
export const reducer = (state = {}, action) => {
    switch (action.type) {
        case UPDATE_CLASS:
            return {
                ...state,
                currentClass: action.currentClass
            }
        case UPDATE_SUBJECT:
            return {
                ...state,
                currentSubject : action.currentSubject
            }
        case UPDATE_CHAPTER:
            return {
                ...state,
                currentClass: action.currentClass
            }
        default:
            return state;
    }
}

export const updateClass = (currentClass) =>{
    return {
        type: UPDATE_CLASS,
        currentClass : currentClass
    }
}
export const updateSubject = (currentSubject) =>{
    return {
        type: UPDATE_CLASS,
        currentSubject : currentSubject
    }
}
export const updateChapter = (currentChapter) =>{
    return {
        type: UPDATE_CLASS,
        currentChapter : currentChapter
    }
}
