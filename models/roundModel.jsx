function RoundModel(props) {
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          {props.user.userType==="Quiz Master"? <th scope="col">Question Wording <br/>Click on a question to edit it</th> :<th scope="col">Question Wording</th>}
          {props.user.userType==="Quiz Taker"? null :<th>Answer</th>}
          <th scope="col">Question Type</th>
          {props.user.userType==="Quiz Master"?<th>Delete?</th> : null}
        </tr>
      </thead>
      <tbody>
        {
          props.questions.map(question => (
            <tr>
          {props.user.userType==="Quiz Master"?<td><a style={{textDecoration: "none", color: "white"}} href={"/question/" + question._id}>{question.qWording}</a></td> : <td>{question.qWording}</td>}
          {props.user.userType==="Quiz Taker"? null : <td>{question.answer}</td>}
          <td>{question.roundType}</td>
          {props.user.userType==="Quiz Master"?<td><form method="POST" action={`/deletequestion?id=${question._id}`}><button class="btn btn-secondary">Delete</button></form></td> : null}
        </tr>
          ))
        }
      </tbody>
    </table>
  )
}
module.exports = RoundModel(props);