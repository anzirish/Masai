class User {
  protected username: string;
  constructor(username: string) {
    this.username = username;
  }
}

class Admin extends User {
  constructor(username: string) {
    super(username);
  }
  showUsername() {
    console.log("Username is ", this.username);
  }
}

const admin = new Admin("tanishq");
admin.showUsername();
