const pattern =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export function EmailValidator(email) {
  const LowercaseEmail = email.toLowerCase();
  return pattern.test(LowercaseEmail);
}

export function FullnameValidator(fullname) {
  if (fullname.length >= 2 && fullname.length < 20) {
    return true;
  } else {
    return false;
  }
}
export function PasswardValidator(passward) {
  const passwardPattern =
    /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
  return passwardPattern.test(passward);
}
