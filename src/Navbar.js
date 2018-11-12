import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';
import UserProfileMenu from './UserProfileMenu';

class Navbar extends Component {
  static defaultProps = {
    openSidebar() {}
  }
  
  static propTypes = {
    openSidebar: PropTypes.func
  }

  constructor(props){
    super(props);
    this.state = {
      userMenuOpen: false
    }

    this.toggleUserMenu = this.toggleUserMenu.bind(this);
  }

  toggleUserMenu(){
    this.setState({userMenuOpen: !this.state.userMenuOpen});
    console.log(this.state.userMenuOpen);
  }
  
  render() {
    const userMenu = this.state.userMenuOpen ? <UserProfileMenu />: null;

    return (
      <div className="nav-wrapper">
        <header>
          <h2 onClick={this.props.openSidebar}><a><i className="fas fa-bars"></i></a></h2>
          <nav>
            <a onClick={this.toggleUserMenu}><i className="far fa-user-circle user-icon"></i></a>
          </nav>
        </header>
        {userMenu}
      </div>
    );
  }
}

export default Navbar;