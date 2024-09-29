import Api from '@/api/index';

class Types extends Api {


  types = () => this.rest('/types/list.json');


  remove = ( id ) => this.rest('/types/delete-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify({ id }),
  }).then(() => id) // then - заглушка, пока метод ничего не возвращает


  add = ( type ) => this.rest('/types/add-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(type),
  }).then(() => ({...type, id: new Date().getTime()})) // then - заглушка, пока метод ничего не возвращает


  update = ( type ) => this.rest('/types/update-item', {
    method: 'POST',
    'Content-Type': 'application/json',
    body: JSON.stringify(type),
  }).then(() => type) // then - заглушка, пока метод ничего не возвращает

}

export default new Types();
