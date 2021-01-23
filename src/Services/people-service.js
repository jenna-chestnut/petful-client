import mutableFetch from './mutable-fetch';

const PeopleService = {
  get() {
    return mutableFetch('people')
  },
  post(name) {
    name = JSON.stringify({name : name});
    return mutableFetch('people', null, {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: name
    })
  }
}

export default PeopleService;