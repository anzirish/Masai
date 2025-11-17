interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log("Saving to database", data);
  }
}

class UserService {
  constructor(private db: IDatabase) {}
  saveUser(user: any) {
    this.db.save(user);
  }
}
