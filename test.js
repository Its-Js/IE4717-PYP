function test() {
    const string = "a -a";
    const format = /^[a-z]+[a-z -]*[a-z ]+$/i;
    const format2 = /^(?=.*-)/;
    const format3 = /^[a-zA-Z]+(?=-)+/;

    if (format.test(string)) {
      console.log(string)
      if (format2.test(string)) {
        console.log("dash")
      } else {
        console.log("no dash")
      }

    } else {
      console.log("wrong format")
    }
}

test();