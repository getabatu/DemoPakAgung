import { observable } from 'mobx'
import { create } from 'apisauce'

const api = create({
    baseURL: 'http://api.alquran.cloud',
    headers: { 'Accept': 'application/vnd.github.v3+json' }
})

class ObservableListStore {
    @observable list = []

    getAndSetAPI() {
        api
            .get('/surah/88/quran-uthmani')
            .then((response) => {
                this.list.push(response.data.data)
            })
    }
}


const observableListStore = new ObservableListStore()
export default observableListStore