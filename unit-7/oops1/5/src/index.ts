interface Iprintable {
  print(): void;
}

class Documents implements Iprintable {
  print(): void {
    console.log("Printing documents");
  }
}

class Photo implements Iprintable {
  print(): void {
    console.log("Ptinitng photo");
  }
}

const result: Iprintable[] = [];

const res1 = new Documents();
const res2 = new Photo();

result.push(res1, res2);

result.forEach((item) => item.print());
