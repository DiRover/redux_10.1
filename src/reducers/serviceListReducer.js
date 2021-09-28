import { nanoid } from 'nanoid';
import { ADD_SERVICE, REMOVE_SERVICE, CANCEL } from '../actions/actionTypes';
//редьюсер для списка
const initialState = [//начальное состояние
  {id: nanoid(), name: 'Замена стекла', price: 21000},
  {id: nanoid(), name: 'Замена дисплея', price: 25000},
];

export default function serviceListReducer(state = initialState, action) {
  if (action.type === ADD_SERVICE) {//реакция на добавление сервиса
    const {name, price, id} = action.payload;
    if (id) {//если id существует, значить добавление не нового, а уже сущестующего сервиса после редактирования
      return  state.map((service) => {//возвращаем новый стейт
        if (service.id === id) {//находим этот сервис в массиве
          service.name = name; //меняем ему имя
          service.price = Number(price);//меняем ему цену, при этом надо перевести в число, так как приходит строка
        }
        return service;
      })
    } else {//случай когда добавляется новый сервис
      return [...state, {id: nanoid(), name, price: Number(price)}];
    }
  } else if (action.type === REMOVE_SERVICE) {//рекция на удаление сервиса из списка
    const {id} = action.payload;
    return state.filter(service => service.id !== id);
  } else if (action.type === CANCEL) {//реакция на отмену редактирования сервиса
    return [...state];//просто так
  } else {
    return state;//дефолтный случай
  }
}
