import React from 'react'; 
import { FiHome, FiHeart } from 'react-icons/fi'; 
import { FaRegCompass, FaLocationArrow, FaSearch, FaPlus } from 'react-icons/fa'; 

import { 
    Nav, NavBarContainer, DivIcons, IgBrand, 
    DivInput, Input, 
} from './styles.js'; 
import logo from '../../Assets/logo.png';

const NavBar = () => {
    return (
        <div>
            <Nav>
                <NavBarContainer>
                    <IgBrand src={logo}/>
                    <DivInput>
                        <FaSearch color="dbdbdb" />
                        <Input placeholder="Search" /> 
                        <FaPlus color="dbdbdb"/>
                    </DivInput>
                    
                    <DivIcons>
                        <FiHome size={24} />
                        <FaLocationArrow size={24} />
                        <FiHeart size={24} />
                        <FaRegCompass size={24} />
                    </DivIcons>
                </NavBarContainer>
            </Nav>
        </div>
    )
}

export default NavBar; 