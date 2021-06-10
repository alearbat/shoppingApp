# **E-commerce website PLANT-AR** - React.js #

![PLANT-AR](public/images/screenRecPlant-ar.gif)

This website has 6 main sections:
- Home (with carrousel)
- Productos (product catalog with filters by category)
- Servicios (Plant-ar's services description)
- Contacto (Contact form)
- Carrito (Shopping cart/ check-out)
- Admin Panel

## Downloaded Dependencies

[Firebase](https://firebase.google.com/).\
Firestore is the database to storage the products of the store and the orders received (identified by ID).

[React-Router-Dom](https://reactrouter.com/web/guides/quick-start).\
This library contains the DOM bindings for React Router which enables the creation of dinamics routes for better navigation.

[React Bootstrap](https://react-bootstrap.github.io/).\
React-Bootstrap replaces the Bootstrap JavaScript. Each component has been built from scratch as a true React component, without unneeded dependencies. It helped to create responsive websites faster.

## Implemented hooks

useState (React).\
Is a hook that lets you add state to a functional component. It accepts an argument which is the initial value of the state property and returns the current value of state property and a method which is capable of updating that state property.

useEffect (React).\
is the hook that manages the side-effects in functional components. callback argument is a function to put the side-effect logic. dependencies is a list of dependencies of your side-effect: being props or state values.

useContext (React).\
This hook is used to create common data that can be accessed throughout the component hierarchy without passing the props down manually to each level. Context defined will be available to all the child components without involving “props”.

useParams (React-Router-Dom).\
The react-router-dom package has useParams hooks that let you access the parameters of the current route.


## Steps to see this website in local

1. Click the Code button and copy the clone command (the HTTPS format).

2. From a terminal window, change to the local directory where you want to clone your repository. Then write "git clone" + HTTPS link already copied.

```
git clone https://github.com/alearbat/shoppingApp.git
```

3. From a terminal window, in the source folder, install all dependencies using "npm i"

```
npm i
```

4. From a terminal window, in the source folder, write "npm start" and the website will open in your default browser.

```
npm start
```
