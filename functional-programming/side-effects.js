let meetup = { name: 'JS', isActive: true, members: 49 };

const scheduleMeetup = (date, place) => {
  meetup.date = date;
  meetup.place = place;
  if (meetup.members < 50)
    meetup.isActive = false;
}
const publishMeetup = () => {
  if (meetup.isActive) {
    meetup.publish = true;
  }
}

scheduleMeetup('today','Bnagalore');
publishMeetup();
console.log(meetup);

// Function or expression is said to have a side effect if it modifies some state of the program,
// which is outside of its own scope or has an observable interaction with its calling functions or
// the outside program besides returning a value.