class Parser {
  constructor() {
    this.input = '';
    this.position = 0;
  }

  readLine() {
    return this.input.slice(this.position, this.position + 1);
  }

  readNumber() {
    return parseFloat(this.readLine());
  }

  readString() {
    return this.readLine();
  }

  readArray() {
    return this.readLine().split(' ');
  }

  readObject() {
    return JSON.parse(this.readLine());
  }

  readLineArray() {
    return this.readLine().split('\n');
  }

  readNumberArray() {
    return this.readArray().map(Number);
  }

  readStringArray() {
    return this.readArray().map(s => s.trim());
  }

  readObjectArray() {
    return this.readArray().map(obj => JSON.parse(s));
  }

  readObjectMap() {
    return this.readObjectArray().reduce((acc, obj) => {
      acc[obj.name] = obj.value;
      return acc;
    }, {});
  }

  readMap() {
    return this.readObjectMap();
  }

  readMapArray() {
    return this.readObjectArray().map(obj => obj.value);
  }

  readMapObject() {
    return this.readObjectArray().reduce((acc, obj) => {
      acc[obj.name] = obj.value;
      return acc;
    }, {});
  }

  writeLine(line) {
    this.input += line + '\n';
  }

  writeObject(obj) {
    this.writeLine(JSON.stringify(obj, null, 2));
  }

  writeArray(arr) {
    this.writeLine(arr.join(' '));
  }

  writeMap(m) {
    this.writeLine(m.toString());
  }

  writeMapArray(arr) {
    this.writeArray(arr);
  }

  writeMapObject(m) {
    this.writeObject(m);
  }

  writeMapObjectArray(m) {
    this.writeArray(m);
  }
}

export default Parser;