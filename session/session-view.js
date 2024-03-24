export const buildSession = () => {
  return `<ul>
    <li>
      <a href="./login.html">Login</a>
      <a href="./signup.html">Signup</a>
    </li>
  </ul>`;
}

export const buildAuthenticateSession = () => {
  return `<button class="button"> Close Session </button> 
          <button class="button"> <a href="./ad-creation.html">Create Ad</a> </button>`;
}