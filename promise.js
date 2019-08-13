class Promisy {
  constructor(fn) {
    this.temp = null
    this.errHandler = () => {}
    const resolve = x => (this.temp = x)
    const reject = err => new Error(err)
    fn(resolve, reject)
    return this
  }

  then(fn) {
    try {
      this.temp = fn(this.temp)
    } catch (err) {
      console.log(err)
      this.errHandler(err)
    }
    return this
  }

  catch(fn) {
    this.errHandler = fn
    return this
  }
}
