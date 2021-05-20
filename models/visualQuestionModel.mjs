import { QuestionModel } from './questionModel.mjs'

export class VisualQuestionModel extends QuestionModel {
    constructor(qWording, answer, roundType, visualLink){
        super(qWording, answer, roundType, qClass = 'visual');
        this._visualLink = visualLink;
    }

    get visualLink(){
        return this._visualLink;
    }
}
module.exports = VisualQuestionModel;