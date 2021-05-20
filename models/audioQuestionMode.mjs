import { QuestionModel } from './questionModel.mjs'

export class AudioQuestionModel extends QuestionModel {
    constructor(qWording, answer, roundType, audioLink){
        super(qWording, answer, roundType, qClass = 'audio');
        this._audioLink = audioLink;
    }

    get audioLink(){
        return this._audioLink;
    }
}
module.exports = AudioQuestionModel;