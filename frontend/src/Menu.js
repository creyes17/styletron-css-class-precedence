import React from 'react';
import {NavLink} from 'react-router-dom';
import {styled} from 'styletron-react';

// This is just a container so you can see what's going on
const StyledMenuBackground = styled('div', {
  backgroundColor: 'black',
  padding: '5px',
});

// Turn the link text white
const StyledNavLink = styled(NavLink, {
  ':link': {color: 'white'},
  ':visited': {color: 'white'},
  color: 'white',
  margin: '2px',
});

const MenuTemplate = styletronClientInstance => {
  // When active, change the link text color.
  const activeClass = styletronClientInstance.renderStyle({
    ':link': {color: 'orange'},
    ':visited': {color: 'orange'},
    color: 'orange',
    // You can see the text decoration changing correctly, even
    // when the color doesn't change as expected.
    textDecoration: 'none',
  });

  return () => (
    <StyledMenuBackground>
      <ul>
        <li>
          <StyledNavLink exact to="/" activeClassName={activeClass}>
            Default
          </StyledNavLink>
        </li>
        <li>
          <StyledNavLink to="/other" activeClassName={activeClass}>
            Other
          </StyledNavLink>
        </li>
      </ul>
    </StyledMenuBackground>
  );
};

export default MenuTemplate;
