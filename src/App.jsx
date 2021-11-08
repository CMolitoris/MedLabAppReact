import React, { Component, createContext } from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Login from './components/Login/Login';
import RegisterUser from './components/RegisterUser/RegisterUser';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import Landing from './components/Landing/Landing';
import { UserContext } from './UserContext';

import Forms from './components/Forms/Forms';
import ConditionViewer from './components/ConditionViewer/ConditionViewer';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            loggedUser: null,
            userInfo: '',
            loginModalShow: false,
            registerModalShow: false
         }
     }
     
    registerURL = "https://localhost:44394/api/authentication/"
    loginURL = "https://localhost:44394/api/authentication/login"
    updateAddressURL = "https://localhost:44394/api/users/complete/"
    

    componentWillMount() {
        let id = this.getToken();
        this.getUserDetails(id);
    }

    getToken = () => {
        const jwt = localStorage.getItem('token');
        try{
          const user = jwtDecode(jwt);
          this.setState({
            loggedUser: user
          });
          return user.id;
        } catch(err){
            console.log("🚀 ~ file: App.jsx ~ line 43 ~ App ~ componentDidMount ~ err", err)
        }
        
    }

    registerUser = async (userToRegister) => {
        try {
          await axios.post(this.registerURL, userToRegister);
          this.loginUser({'username': userToRegister.username, 'password': userToRegister.password})
        } catch(err){
          console.log("🚀 ~ file: App.jsx ~ line 40 ~ App ~ registerUser= ~ err", err)
        }
      }
  
    loginUser = async (userToLogin) => {
        try {
            const response = await axios.post(this.loginURL, userToLogin);
            localStorage.setItem('token', response.data.token)
            this.getToken();
            this.getUserDetails(this.state.loggedUser.id);
        } catch(err){
            console.log("🚀 ~ file: App.jsx ~ line 51 ~ App ~ loginUser= ~ err", err)
        }
    }

    getUserDetails = async (userId) => {
        try {
            let response = await axios.get(`https://localhost:44394/api/users/${userId}`)
            this.setState({
                userInfo: response.data
            })
            console.log(response.data)
            // if (this.state.loggedUser.streetAddress == null || this.state.loggedUser.city == null || this.state.loggedUser.state == null){
            //   //Redirect user to add address details page
            //   window.location = "/account"
            // }
        } catch(err) {
            console.log("Error in getting user details", err)
        }
    }

    toggleLoginModal = () => {
        this.setState({
            loginModalShow: !this.state.loginModalShow
        })
    }

    toggleRegModal = () => {
        this.setState({
            registerModalShow: !this.state.registerModalShow
        })
    }
  
    logoutUser = () => {
        localStorage.removeItem('token');
        let location = window.location.pathname;
        this.setState({
          loggedUser: null
        })
        if (location === '/account' || location === '/seller' || location === '/not-found' || location === '/cart'){
          window.location = "/"
        }
    }


  

    render() { 
        
        return ( 
            
                <div className="App">
                    <UserContext.Provider value={this.state.loggedUser}>
                        <NavBar user = {this.state.loggedUser} login={this.loginUser} logoutUser = {this.logoutUser} 
                            toggleLogModal = {this.toggleLoginModal} toggleRegisterModal = {this.toggleRegModal} 
                        />
                        {this.state.loginModalShow && <Login login = {this.loginUser} modalShow = {this.state.loginModalShow} toggleModal={this.toggleLoginModal}/>}
                        {this.state.registerModalShow && <RegisterUser register={this.registerUser} modalShow={this.state.registerModalShow} toggleModal={this.toggleRegModal} registerUser={this.registerUser}/>}
                        <div>
                            <Switch>    
                                <Route path = "/" exact component={Landing}  />
                                <Route path = "/forms"  component={Forms} />
                                <Route path="/conditions" component={ConditionViewer} />
                                {/* <Route path = "/products" render={props => <Products {...props} user={this.state.loggedUser} carModels = {this.state.carModels} addToCart={this.addToCart} cars={this.state.cars} getAllCars={this.getAllCars} getSingleCar={this.getSingleCar} car={this.state.car} getCarRatings={this.getCarRatings} />} /> */}
                                
                                {/* <Route path = "/car-details" render={props => <CarDetails {...props} postRating={this.postRating} user={this.state.loggedUser} addToCart={this.addToCart} cars={this.state.cars} getAllCars={this.getAllCars} getSingleCar={this.getSingleCar} car={this.state.car} getCarRatings={this.getCarRatings} ratings={this.state.ratings}/>} />
                                
                                
                                <Route path = "/account" render = {props => <EditAccount {...props } userInfo = {this.state.userInfo} updateDetails = {this.editUser} user = {this.state.loggedUser}/>} />
                                
                                <Redirect to='/not-found' /> */}
                                <Redirect to="/not-found" />
                            </Switch>
                        </div>
                    </UserContext.Provider>
                </div>
           







         );
    }
}
 
export default App;