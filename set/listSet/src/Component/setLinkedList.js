class SetLinkedList {
  constructor() {
    this.head = null
  }

  clear() {
    this.head = null
  }

  isEmpty() {
    return this.head === null
  }

  add(value) {
    const newNode = new LinkListNode(value)
    if (this.head === null) {
      this.head = newNode
      return
    }
    let p = this.head
    while (p.next !== null) {
      p = p.next
    }
    p.next = newNode
    return
  }

  travelList(fn) {
    if (this.isEmpty() || !(fn instanceof Function)) return
    let p = this.head
    while (p !== null) {
      fn(p)
      p = p.next
    }
    return
  }

  has(value) {
    return this.indexOf(value) !== -1
  }

  indexOf(value) {
    if (this.isEmpty()) return -1
    let index = 0
    let p = this.head
    while (p !== null) {
      if (p.data === value) {
        return index
      } else {
        index += 1
        p = p.next
      }
    }
    return -1
  }

  length() {
    if (this.isEmpty()) return -1
    let p = this.head
    let i = 0
    while (p !== null) {
      i += 1
      p = p.next
    }
    return i
  }


  remove(value) {
    if (this.isEmpty() || !(this.has(value))) return
    if (this.head.data === value && this.haad.next === null) {
      this.head = null
      return
    }
    if (this.head.data === value && this.head.next !== null) {
      this.head = this.head.next
    }
    let p = this.head
    while (p.next !== null) {
      if (p.next.data === value) {
        break
      } else {
        p = p.next
      }
    }
    let q = p.next
    p.next = q.next
    return
  }

  search(value) {
    if (this.isEmpty()) return
    let p = this.head
    while (p !== null) {
      if (p.data === value) {
        return p
      } else {
        p = p.next
      }
    }
    return false
  }

  printList() {
    if (this.isEmpty()) return
    let p = this.head
    let st = ''
    while (p !== null) {
      st += p.data
      st += `[${this.indexOf(p.data)}]`
      if (p.next !== null) {
        st += '->'
      }
      p = p.next
    }
    console.log(st);
    return
  }
}

