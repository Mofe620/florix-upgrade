import { BrowserRouter as Router, Route } from 'react-router-dom'
import {Helmet} from "react-helmet";
import './customstyles/main.scss';
import './App.css';
import Header from './components/global/Header'
import Footer from './components/Footer'

import Home from './screens/baseScreens/Home';
import About from './screens/baseScreens/About';
import Contact from './screens/baseScreens/Contact';
import RegisterScreen from './screens/authScreens/RegisterScreen';
import SignUpScreen from './screens/authScreens/SignUpScreen';
import  SignInScreen  from './screens/authScreens/SignInScreen';
import LoginScreen from './screens/authScreens/LoginScreen';
import PasswordReset from './screens/authScreens/PasswordReset';
import PasswordResetConfirm from './screens/authScreens/PasswordResetConfirm'
import PasswordResetComplete from './screens/authScreens/PasswordResetComplete.'
import UserProfile from './screens/authScreens/UserProfile';
import ActivateAccount from './screens/authScreens/ActivateAccount';

//import Carousel from './components/Carousel';
//import navbar from './components/global/_global/_navbar';
import DrugStore from './screens/productScreens/DrugStore';
import ProductDetailsScreen from "./screens/productScreens/ProductDetailsScreen"
import ProductsScreen from './screens/productScreens/ProductsScreen'
//import ProductDetailsScreen from './screens/ProductDetailsScreen'
import CartScreen from './screens/cartScreen/CartScreen'
//import LoginScreen from './screens/LoginScreen'
//import RegisterScreen from './screens/RegisterScreen'
//import ProfileScreen from './screens/ProfileScreen'
import ShippingScreen from './screens/shippingScreens/ShippingScreen'
import PaymentScreen from './screens/paymentScreen/PaymentScreen'
import PlaceOrderScreen from './screens/orderScreens/PlaceOrderScreen'
import OrderScreen from './screens/orderScreens/OrderScreen'
/*import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/orderScreens/OrderListScreen'
*/
import BlogListScreen from './screens/blogscreen/BlogListScreen';
import BlogDetailsScreen from './screens/blogscreen/BlogDetailsScreen';
import BlogCategoryScreen from './screens/blogscreen/BlogCategoryScreen';

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
      <Helmet>
        <title>Florix Healthcare</title>
        <meta name="description" content="Providing tech driven logistics solution" />
    </Helmet>
        <>

        <Route path='/signup' component={SignUpScreen} />
          <Route path='/signin' component={SignInScreen} />
          <Route exact path="/reset-password" component={PasswordReset} />
          <Route exact path='/password/reset/confirm/:uid/:token' component={PasswordResetConfirm} />
          <Route exact path='/activate/:uid/:token' component={ ActivateAccount} />
          <Route exact path="/reset-password-complete" component={PasswordResetComplete} />
          
          <Route path='/' component={Home} exact />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path='/drugstore' component={DrugStore} />
          <Route path='/products' component={ProductsScreen} />
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route exact path="/profile" component={UserProfile} />          
        
          <Route path='/shipping' component={ShippingScreen} />
          <Route path='/placeorder' component={PlaceOrderScreen} />
          <Route path='/order/:id' component={OrderScreen} />
          <Route path='/payment' component={PaymentScreen} />
          <Route path='/product/:id' component={ProductDetailsScreen} />
          <Route path='/cart/:id?' component={CartScreen} />

          
          <Route path='/posts' component={BlogListScreen} />
          <Route path='/post/:id' component={BlogDetailsScreen} />
          <Route path='/blog/category/:id' component={BlogCategoryScreen} />

          {/*<Route path='/navbar' component={navbar} exact/> 
          <Route path='/admin/userlist' component={UserListScreen} />
          <Route path='/admin/user/:id/edit' component={UserEditScreen} />

          <Route path='/admin/productlist' component={ProductListScreen} />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />

          <Route path='/admin/orderlist' component={OrderListScreen} />
          */}

        </>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
