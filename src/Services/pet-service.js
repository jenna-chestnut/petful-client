import mutableFetch from './mutable-fetch';

const PetService = {
  get() {
    return mutableFetch('pets')
  },
  post(type) {
    return mutableFetch('pets', type, {
      method: 'DELETE'
    })
  }
}

export default PetService;