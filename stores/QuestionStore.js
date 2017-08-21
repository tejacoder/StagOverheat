import {observable} from 'mobx';
import {ListView} from 'react-native';

class QuestionStore{
    
    questions = [
        {title: "First Question", author: "Teja", vote: 4, description: "Description 1", createdAt: new Date("2017-08-20")},
        {title: "Two Question", author: "Kusnadi", vote: 5, description: "Description 2", createdAt: new Date("2017-08-20")},
        {title: "Three Question", author: "Adam", vote: 0, description: "Description 3", createdAt: new Date("2017-08-20")},
    ];

    @observable dataSource;

    constructor(){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(this.questions);
    }
}

const questionStore = new QuestionStore();
export default questionStore;