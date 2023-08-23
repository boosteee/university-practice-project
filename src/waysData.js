import { FaCarAlt, FaBus } from 'react-icons/fa';

let waysData = [
  {
    id: 1,
    title: 'На автомобиле',
    description: 'По магистрале М4 до Могилева, далее - по дороге P122.',
    icon: <FaCarAlt color='#6571F9' size={90} />,
  },
  {
    id: 2,
    title: 'На маршрутке',
    description:
      'Ежедневные рейсы Минск - Хотимск, Минск-Кричев, Минск-Костюковичи. Цена билета: 20-25 BYN',
    icon: <FaBus color='#6571F9' size={90} />,
  },
];

export default waysData;
