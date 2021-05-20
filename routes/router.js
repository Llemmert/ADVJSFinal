var express = require("express")
var router = express.Router()
// https://github.com/dcodeIO/bcrypt.js
var bcrypt = require("bcryptjs")

// https://express-validator.github.io/docs/
const { check, validationResult } = require('express-validator/check')
//const { check } = require("express-validator/check")
const { sanitizeBody } = require("express-validator/filter")

// import models
var User = require("../models/user")
var Question = require("../models/questions")
const { MongoError } = require("mongodb")
const questions = require("../models/questions")

let title = "Quiz Ninjas"

function userLoggedIn(req, res) {
  let user = req.session.user
  if (user) return user
  res.redirect("/login")
}

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: title })
})

// authenticated page; check if session exists
router.get("/dashboard", (req, res, next) => {
  const message = req.query.message;
  let user = userLoggedIn(req, res)
    res.render("dashboard", {
      title: "Quiz Ninjas Dashboard",
      user: user,
      message
  })
})

router.get("/login", function (req, res, next) {
  res.render("login", { title: "Log in" }) // pug template
})

router.post("/login", function (req, res, next) {
  var email = req.body.email
  var password = req.body.password
  User.findOne({ email: email }, function (err, user) {
    if (err) {
      console.log(err);
      throw err;
    }
    console.log(user);
    var validUser = false;
    if (user) {
      var hash = user.password;
      validUser = bcrypt.compareSync(password, hash)
    }
    if (validUser) {
      // add user to session
      req.session.user = user
      res.redirect("/dashboard")
    } else {
      let context = {
        title: "Log in",
        errors: [{msg:"Invalid username and/or password"}]
      }
      res.render("login", context)
    }
  })
})

// new user registration
router.get("/register", function (req, res, next) {
  res.render("register", { title: "Register an account" })
})

router.post(
  "/register",
  [
    // Validate fields.
    // express-validator
    check("firstName", "First name must not be empty")
      .trim()
      .isLength({ min: 1 })
      .withMessage('must be at least 1 character'),
    check("lastName", "Last name must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("email", "Email must not be empty.")
      .trim()
      .isLength({ min: 3 })
      .withMessage('Email must be at least 3 characters long'),
    // email must be valid
    check("email", "Not a valid email.")
      .trim()
      .isEmail(),
    check("password", "Password must be at leat 5 chars long")
      .trim()
      .isLength({ min: 5 }),
    check("password1", "Two passwords do not match")
      .trim()
      .exists()
      .custom((value, { req }) => value === req.body.password),
    check("userType", "User Type must not be empty.")
      .trim()
      .isLength({min: 3}),
    // Sanitize all fields.
    sanitizeBody("*")
      .trim()
      .escape()
  ],
  function (req, res, next) {
    // check authentication
    //var user = userLoggedIn(req, res)
    // extract the validation errors from a request
    const errors = validationResult(req)
    // check if there are errors
    //console.error(errors.array())
    if (!errors.isEmpty()) {
      let context = {
        title: "Register",
        errors: errors.array(),
        firstName: req.body.firstName
      }
      res.render("register", context)
    } else {
      // create a user document and insert into mongodb collection
      let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, 10),
        userType: req.body.userType
      })
      //console.log(user)
      user.save(err => {
        if (err) {
          return next(err)
        }
        // successful - redirect to dashboard
        // add update user to session
        console.log('Register successful:', user)
        //req.session.user = user
        //res.redirect("/grade")
        res.redirect('/login')
      })
    }
  }
)

router.get("/addQuestion", function (req, res, next) {
  let user = userLoggedIn(req, res)
  if(user.userType === "Quiz Master"){
  res.render("addQuestion", { 
    title: "Add a Question to the Quiz"
  })}
  else {
    let message = "You do not have permission to add a question."
    res.redirect(`/dashboard?message=${message}`)
}
})

router.post(
  "/addQuestion",
  [
    // Validate fields.
    // express-validator
    check("qWording", "Question must not be blank")
      .trim()
      .isLength({ min: 1 })
      .withMessage('Question must be at least 1 character'),
    check("answer", "Answer must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("roundType", "Question Type must not be empty.")
      .trim()
      .isLength({ min: 1 })
      .withMessage('Question Type must be at least 1 character long'),
    // Sanitize all fields.
    sanitizeBody("*")
      .trim()
      .escape()
  ],
  function (req, res) {
    // check authentication
    var user = userLoggedIn(req, res)
    // extract the validation errors from a request
    const errors = validationResult(req)
    // check if there are errors
    if (!errors.isEmpty()) {
      let context = {
        title: "Add a New Question",
        errors: errors.array()
      }
      res.render("./addQuestion", context)
    } else {
      // create a question document and insert into mongodb collection
      let question = new Question({
        qWording: req.body.qWording,
        answer: req.body.answer,
        roundType: req.body.roundType,
      })
      question.save(err => {
        if (err) {
          return next(err)
        }
        // successful - redirect to dashboard
        // add update user to session
        console.log('Question addition successful:', user)
        //req.session.user = user
        //res.redirect("/grade")
        res.redirect('/addQuestion')
      })
      // successful - redirect to dashboard
      //res.redirect("/addQuestion")
    }
  }
)

router.post("/deletequestion", function (req, res, next) {
  // create a user document and insert into mongodb collection
  let query = {
    _id: req.query.id
  }
  // check if data is there on console
  Question.deleteOne(query, function (err) {
    console.log(`Deleted question id: ${query}`)
    res.redirect("/questions")
  })
})

router.get("/questions", function (req, res, next) {
  Question.find({}, (err, questions) => {
    if (err) throw err;
    //console.log(question)
    let user = userLoggedIn(req, res)
    res.render("questions", {
      title: "All Questions",
      user: user,
      questions: questions,
      errors: []
    })
  });
})

router.post(
  '/round',
  function (req, res) {
    var user = userLoggedIn(req, res)
    const errors = validationResult(req)
    let qType=req.body.qType;
    let qClass=req.body.qClass;
    Question.find({"roundType":qType, "qClass":qClass}, (err, questions) =>{
    if(!errors.isEmpty()) {
      let context = {
        title: "Generate a Trivia Round",
        errors: errors.array()
      }
      res.render("./roundBuilder", context)
    } else {
      let context = {
        qClass,
        qNumber: req.body.qNumber,
        user: user,
        questions: questions
      }
      res.render("./round", context)
    }
  });
}
)

// router.get("/round"), function (req, res, next) {
//   Question.find({"roundType":{qType}}, (err, questions) =>{
//     if (err) throw err;
//     let user=userLoggedIn(req, res)
//     res.render("round", {
//       title: "Generated Round",
//       user: user,
//       questions: questions,
//       errors:[]
//     })
//   });
// }

router.get("/roundbuilder", function (req, res, next) {
  Question.find({}, (err, questions) => {
    if (err) throw err;
    //console.log(question)
    let user = userLoggedIn(req, res)
    res.render("roundBuilder", {
      title: "Round Builder",
      user: user,
      questions: questions,
      errors: []
    })
  });
})

router.get("/question/:id?", function (req, res, next) {
  // get logged in user
  let user = userLoggedIn(req, res)
  var questionID = req.params.id
  if (questionID) {
    var question = Question.findOne({ _id: questionID }, function (err, question) {
      res.render("./components/question", {
        title: "Update existing question",
        question: question,
        user: user,
        errors: []
      })
    })
  } else {
    res.render("./components/question", {
      title: "Add a new question",
      question: null,
      errors: []
    })
  }
})

router.post(
  "/question/:id?",
  [
    // Validate fields.
    // express-validator
    check("qWording", "Question must not be blank")
      .trim()
      .isLength({ min: 1 })
      .withMessage('Question must be at least 1 character'),
    check("answer", "Answer must not be empty.")
      .trim()
      .isLength({ min: 1 }),
    check("roundType", "Question Type must not be empty.")
      .trim()
      .isLength({ min: 1 })
      .withMessage('Question Type must be at least 1 character long'),
    // Sanitize all fields.
    sanitizeBody("*")
      .trim()
      .escape()
  ],
  function (req, res) {
    // check authentication
    var user = userLoggedIn(req, res)
    // extract the validation errors from a request
    const errors = validationResult(req)
    // check if there are errors
    if (!errors.isEmpty()) {
      let context = {
        title: "Add a new question",
        errors: errors.array()
      }
      res.render("./components/question", context)
    } else {
      // create a user document and insert into mongodb collection
      let question = {
        qWording: req.body.qWording,
        answer: req.body.answer,
        roundType: req.body.roundType,
      }
      // check if the form data is for update or new question
      var id = req.params.id
      if (id) {
        // update
        updateQuestion(res, id, question)
        let context = {
          title: "Update Question",
          errors: [{msg: "Question updated successfully!"}],
          question: question
        }
        res.render("./components/question", context)
      }
      // add new question
      else {
        addQuestion(res, question).then((errors) => {
          console.log('Errors: ', errors)
          if (errors && errors.length !== 0) {
            let context = {
              title: "Add a new question",
              errors: errors
            }
            res.render("./components/question", context)
          }
          else {
            res.redirect("/questions")
          }
        })
      }
      // successful - redirect to dashboard
      //res.redirect("/questions")
    }
  }
)

router.get("/logout", (req, res, next) => {
  var user = req.session.user
  if (user) {
    req.session.destroy(function () {
      console.log(`user: ${user.email} logged out...`)
    })
  }
  res.redirect("/")
})

/* profile... */
router.get("/profile", function (req, res, next) {
  user = userLoggedIn(req, res)
  res.render("/profile", { title: "Profile", user: user })
})

router.post("/profile", function (req, res, next) {
  // Is a user logged in?
  var user = userLoggedIn(req, res)
  var condition = { _id: user._id }
  var update = {
    email: req.body.email,
    firstName: req.body.fname,
    lastName: req.body.lname,
    userType: req.body.userType
  }
  var options = {}
  User.updateOne(condition, update, options, (err, numAffected) => {
    if (err) throw err
    // project/return all attributes but password.
    User.findById(user._id, '-password', function (err, updateduser) {
      if (err) throw err
      req.session.user = updateduser
      //console.log(updateduser)
      res.render("./private/profile", {
        title: "Profile",
        user: updateduser,
        errors: [{msg: "Profile updated successfully!"}]
      })
    })
  })
})

function updateQuestion(res, id, question) {
  var condition = { _id: id }
  var option = {}
  var update = {}
  Question.updateOne(condition, question, option, (err, rowsAffected) => {
    if (err) {
      console.log(`caught the error: ${err}`)
      return res.status(500).json(err);
    }
  })
}

async function addQuestion(res, question) {
  var c = new Question(question)
  try {
    await c.save();
  }
  catch(e) {
    if (e instanceof MongoError) {
      console.log(`Exception: ${e.message}`)
      if (e.message.includes('duplicate key error'))
        return [{msg: "Duplicate CRN not allowed"}]
      else return []
    }
    else throw e;
  }
}

module.exports = router
