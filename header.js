const headerHTML = `
<div class="parent-container">
  <h2>Meshop</h2>
  <nav>
  <div class="menu-icon" id="menu-icon">&#9776;</div>
    <ul id="nav-links">
        <li><a href="index.html">Home</a></li>
        <li><a href="../signup/index.html">Sign Up</a></li>
        <li><a href="login.html">Login</a></li>
        <li><a href="profile.html">Profile</a></li>
        <li><a href="cart.html">Cart</a></li>
    </ul>
  </nav>
</div>
`;

document.getElementById('navbar-container').innerHTML = headerHTML;
document.getElementById('menu-icon').addEventListener('click', () => {
    document.getElementById('nav-links').classList.toggle('active');
});