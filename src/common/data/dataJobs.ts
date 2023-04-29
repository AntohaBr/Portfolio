import Card_training from "assets/image/Card_training.jpg";
import Order_of_Business from "assets/image/Order_of_Business.jpg";
import Public_network from "assets/image/Public_network.jpg";

const baseStack = 'Stack: React, Redux, Typescript, Javascript, Redux-Thunk, React-Router-dom, Axios, Rest API,'

export const dataJobs = [
    {
        id: 1,
        backgroundImage: `url(${Card_training})`,
        title: 'Card training',
        description: `${baseStack} Formik, MUI`,
        demo: 'https://antohabr.github.io/Cards/#/login',
        code: 'https://github.com/AntohaBr/Cards'
    },
    {
        id: 2,
        backgroundImage: `url(${Order_of_Business})`,
        title: 'Order Of business',
        description: `${baseStack} Formik, Storybook, Jest, MUI`,
        demo: 'https://antohabr.github.io/Todolist/',
        code: 'https://github.com/AntohaBr/Todolist'
    },
    {
        id: 3,
        backgroundImage: `url(${Public_network})`,
        title: 'Public network',
        description: `${baseStack} React Hook Form, Jest`,
        demo: 'https://antohabr.github.io/Social-network/',
        code: 'https://github.com/AntohaBr/Social-network'
    }
]