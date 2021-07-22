const navBarMenuIcon = document.querySelector('.navbar-menu-icon');

// OPEN SIDE NAVIGATION
const openNav = () =>
{
    document.querySelector('#sideNav').style.width = '100%';

}

// CLOSE SIDE NAVIGATION
const closeNav = () =>
{
    document.querySelector('#sideNav').style.width = '0%';
}

navBarMenuIcon.addEventListener('click', openNav);


