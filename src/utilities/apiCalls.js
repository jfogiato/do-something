const fetchCall = ({ type, participants, cost }) => {
  const queryString = (type || participants || cost) && '?';

  const url = `http://www.boredapi.com/api/activity${queryString}${type}${(participants && type) && '&'}${participants}${cost && '&'}${cost}`;

  return fetch(url)
    .then(response => {
      return response.ok
        ? response.json()
        : response.status;
    })
    .catch(error => {
      console.log(error)
      return error;
    });
}

export default fetchCall;