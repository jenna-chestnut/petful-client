import mutableFetch from './mutable-fetch';

const PetService = {
  get() {
    return mutableFetch('pets')
  },
  adopt(type) {
    return mutableFetch('pets', type, {
      method: 'DELETE'
    })
  }
}

export default PetService;