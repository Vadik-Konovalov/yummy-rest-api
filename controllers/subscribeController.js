const { createSubscription, findIsUserSubscribe } = require('../services/subsctiptionServices');
const {
  getUserByFild,
  getUserById,
  updateUser,
} = require('../services/userServices');
const sendEmail = require('../helpers/sendEmail');
const { HttpError } = require('../helpers/HttpError');

const subscribe = async (req, res) => {
  const { email } = req.body;
  const user = await getUserByFild({ email });

  const isEmail = await findIsUserSubscribe({email})
  if(isEmail) {
    return res
      .status(400)
      .json({ message: 'User is already subscribed'});
  }
  if (!user) {
    return res
      .status(404)
      .json({ message: `Not found user with ${email}`});
  }
  // find current user
  const id = req.user._id;
  const currentUser = await getUserById(id);

  //compare email in form with email of current user
  if (email != currentUser.email) {
    return res
      .status(404)
      .json({ message: `It' s not your ${email}`});
  }

  // update subscription of current user in users collection
  const sub = {
    subscription: true,
  };
  await updateUser(id, sub);

  // create subscription with current user in subscriptions collection
  await createSubscription({ email, id });

  // send letter for current user with subscription notification
  const letter = {
    to: email,
    subject: 'Yummy team',
    html: `<h2>Wellcome, ${user.name}!</h2>
            <p> Thanks for subscribing to our newsletter!</p>
            <p>With best regards, your Yummy team.</p>`,
  };

  await sendEmail(letter);

  res.status(200).json({
    message: 'Subscription letter send',
  });
};

module.exports = { subscribe };
