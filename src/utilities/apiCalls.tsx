interface FetchProps {
  type: string | null,
  participants: string | null,
  cost: string | null
}

const fetchCall = ({ type, participants, cost }: FetchProps) => {
  const queryString = (type || participants || cost) && '?';

  const url = `https://www.boredapi.com/api/activity${queryString}${type}${(participants && type) && '&'}${participants}${cost && '&'}${cost}`;

  return fetch(url)
    .then(response => {
      return response.ok
        ? response.json()
        : new Error('Something went wrong, please try again.');
    })
    .catch(error => {
      console.log(error)
      return error;
    });
}

export default fetchCall;