import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './partyRemove.html';
import { Parties } from '../../../api/parties';

class PartyRemove {
  remove(e) {
    if (this.party) {
      if (confirm("Are you sure you want to delete this Party?") == true) {
        Parties.remove(this.party._id); 
      }
    }
  }
}

const name = 'partyRemove';

// create a module
export default angular.module(name, [
  angularMeteor
]).component(name, {
  template,
  bindings: {
    party: '<'
  },
  controllerAs: name,
  controller: PartyRemove
});
