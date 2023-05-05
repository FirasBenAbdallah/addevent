import User from "../schemas/user.js";

export function getAll(req, res) {
  User.find({})
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function addOne(req, res) {
  User.create({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    birthdate: req.body.birthdate,
    address: req.body.address,
    password: req.body.password,
    confpassword: req.body.confpassword,
    photoDeProfile: req.body.photoDeProfile,
  })
    .then((newUser) => {
      res.status(201).json(newUser);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
}

export function getOne(req, res) {
  User.findOne({ email: req.params.email })
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function putAll(req, res) {
  const update = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
    birthdate: req.body.birthdate,
    address: req.body.address,
    password: req.body.password,
    confpassword: req.body.confpassword,
  };
  User.updateOne(
    { email: req.params.email, update },
    {
      new: true,
    }
  )
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function patchOne(req, res) {
  User.findOneAndUpdate(
    { email: req.params.email },
    {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      birthdate: req.body.birthdate,
      address: req.body.address,
      password: req.body.password,
      confpassword: req.body.confpassword,
    }
  )
    .then((user) => {
      res.status(200).json(user);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export function deleteOne(req, res) {
  User.findOneAndRemove({ email: req.params.email })
    .then((user) => {
      res
        .status(200)
        .json(
          `${req.body.firstname} ${req.body.lastname} was successfully deleted`
        );
    })
    .catch((err) => {
      res.status(500).json(err);
    });
}

export async function login(req, res) {
  const { email, password } = req.body;

  const user = await User.findOne({ email: email, password: password });

  if (user) {
    res.status(200).json(user);
  } 
  /* 
  else if (User.findOne({ password: password })) {
    res.status(501).json(`This email (${email}) is wrong`);
  } else if (User.findOne({ password: password })) {
    res.status(500).json(`wrong password: ${password}`); 
  } 
  */
  else res.status(404).json("Not Found");
}
