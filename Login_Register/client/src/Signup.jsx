export default function Signup(){
  return(
    <>
    <div ClassName="dropdown-menu">
  <form className="px-4 py-3">
    <div ClassName="mb-3">
      <label for="exampleDropdownFormEmail1" ClassName="form-label">Email address</label>
      <input type="email" ClassName="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com"/>
    </div>
    <div class="mb-3">
      <label for="exampleDropdownFormPassword1" ClassName="form-label">Password</label>
      <input type="password" ClassName="form-control" id="exampleDropdownFormPassword1" placeholder="Password"/>
    </div>
    <div ClassName="mb-3">
      <div ClassName="form-check">
        <input type="checkbox" ClassName="form-check-input" id="dropdownCheck"/>
        <label ClassName="form-check-label" for="dropdownCheck">
          Remember me
        </label>
      </div>
    </div>
    <button type="submit" ClassName="btn btn-primary">Sign in</button>
  </form>
  <div ClassName="dropdown-divider"></div>
  <a ClassName="dropdown-item" href="#">New around here? Sign up</a>
  <a ClassName="dropdown-item" href="#">Forgot password?</a>
</div>
    </>
  );
}