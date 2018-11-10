import { observable, action, computed } from 'mobx';
import { PLACE } from '../config/config';

class MermanStore {
  constructor(value) {
    this.id = value.id;
    this.name = value.name;
    this.location = value.location;
  }
}

class MermenStore {
  @observable mermen = [];
  @observable.shallow sectionList = [];
  @observable itemData = observable.map();


  fillSectionList = (mermen) => {
    debugger;
    PLACE.forEach((place, i) =>{
      console.log('place:', place);
      console.log('i:', i);
      let section = {
        id: '',
        title: '',
        data: [],
      };
      section.id = i;
      section.title = place;
      /*
      section.data = mermen.filter(each => {
        if (each.location === place) {
          return({key: each.id});
        }
      });
      */
      mermen.forEach((each) => {
        if (each.location === place) {
          section.data.push({key: each.id});
        }
      });
      console.log(section);
      //this.sectionList.push({key: section.id, section: section});
      this.sectionList.push(section);
    });
    console.log('sectionList:');
    console.log(this.sectionList);
  };

  @action FillMermen(value) {
    debugger;
    if (!Array.isArray(value)) {
      console.log('Value is not array!');
      return null;
    }
    value.map(each => {
      this.itemData.set(each.id, each);
      return this.mermen.push(new MermanStore(each));
    });
    this.fillSectionList(this.mermen);
    debugger;
  }

  addItemDataToSectionList(item) {
    debugger;
    const index = this.sectionList.findIndex(eachSection =>
      eachSection.title === item.location);
    if (index === -1) {
      PLACE.forEach((place, i) => {
        if (item.location === place) {
          section = {
            id: i,
            title: place,
            data: (new Array()).push({key: item.id}),
          };
          this.sectionList.push(section);
        }
      });
    } else {
      this.sectionList.forEach(eachSection => {
        if (eachSection.title === item.location) {
          eachSection.data.push({key: item.id});
        }
      });
    }
  }

  @action AddMerman(value) {
    debugger;
    const newMerman = new MermanStore(value);
    const index = this.mermen.findIndex(each => newMerman.id === each.id);
    if (index !== -1) {
      this.mermen.push(newMerman);
      this.itemData.set(newMerman.id, newMerman);
      this.addItemDataToSectionList(newMerman);
    }
  }

  removeItemDataFromSectionList(id) {
    this.sectionList.forEach(eachSection => {
      const index = eachSection.data.findIndex(eachItem =>
        eachItem.id === id);
      if ( index !== -1) {
        eachSection.data.splice(index, 1);
      }
    });
  }

  @action RemoveMerman(id) {
    this.mermen = this.mermen.filter(each => each.id !== id);
    this.itemData.delete(id);
    this.removeItemDataFromSectionList(id);
  }

/*
  This does not work!!!
  @action EditMerman(id, location) {
    const index = this.mermen.findIndex(each => each.id === id);
    if (index !== -1) {
      this.mermen[index].location = location;
    }
  }
*/
/*
  updateItemDataInSectionList(id, value) {
    this.SectionList.filter(eachSection => {
      const index = eachSection.data.findIndex(eachItem =>
        eachItem.id === id);
      if ( index !== -1) {
        eachSection.data.[id] = value;
      }
    });
  }
  */
  @action EditMerman(id, name, location) {
    const value = {id, name, location};
    this.RemoveMerman(id);
    this.AddMerman(value);
    this.itemData.set(id, value);
    this.removeItemDataFromSectionList(id);
    this.addItemDataToSectionList(value);
  }

  @computed get mermenResult() {
    return this.mermen;
  }

  @computed get sortedMermenResult() {
    return this.mermen.slice().sort((a, b) => {
      return a.name.toLowerCase().localeCompare(b.name.toLowerCase());
    });
  }

  @computed get mermenSectionList() {
    return this.sectionList;
  }
}

const mermenStore = new MermenStore();

export default mermenStore;
