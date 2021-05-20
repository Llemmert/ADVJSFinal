import React from 'react';
import question from '../models/questions';
import Layout from './layout';

export default function TableFactory(props) {    
    // }
    // else if(props.qCriteria="Audio"){
    //     qtable = new AudioRound(questions)
    // }
    // else if (props.qCriteria="Visual"){
    //     qtable = new VisualRound(questions)
    // }
    return(
        <Layout title={props.title}>
            <form method="POST" action="/round">
        <label>
          <select type="text" name="qType" required placeholder="Question Type">
          <option value="" selected hidden disabled>Select a Round Type</option>
            <option value="Random Knowledge">Random Knowledge</option>
            <option value="Geography">Geography</option>
            <option value="Lyric">Lyric</option>
            <option value="TV/Movie">TV/Movie</option>
            <option value="History">History</option>
            <option value="Audio">Audio</option>
          </select>
          </label><br /><br />
          <label>
          <select type="text" name="qNumber" required placeholder="Number of Questions">
          <option value="" selected hidden disabled>Select Number of Questions</option>
            <option value="10">10</option>
            <option value="8">8</option>
            <option value="5">5</option>
          </select>
          </label><br /><br />
          <label>
          <select type="text" name="qClass" required placeholder="Class of Question">
          <option value="" selected hidden disabled>Select Question Class</option>
            <option value="Normal">Normal</option>
            <option value="Audio">Audio</option>
            <option value="Visual">Visual</option>
          </select>
        </label><br /><br />
        <button type="submit" class="btn btn-dark">Generate Round</button>
        <br /> <br />
      </form>
        </Layout>
    );
}