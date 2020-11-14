class LinkedSet {
  constructor() {
    this.item = new SetLinkedList()
  }

  addElement(value) {
    if (this.item.has(value)) return
    this.item.add(value)
  }

  clear() {
    this.item.clear()
  }

  isEmpty() {
    return this.item.isEmpty()
  }

  has(value) {
    return this.item.has(value)
  }

  remove(value) {
    return this.item.remove(value)
  }

  printSet() {
    let p = this.item.head
    let st = '{'
    while(p !== null){
      st += p.data
      if(p.next !== null)  st += ','
      p = p.next
    }
    st += '}'
    console.log(st)
    return
  }

  size() {
    return this.item.length()
  }

  union(otherSet) {
    const newSet = new LinkedSet()
    let p = this.item.head
    let q = otherSet.item.head
    while (p !== null) {
      newSet.addElement(p.data)
      p = p.next
    }
    while (q !== null) {
      newSet.addElement(q.data)
      q = q.next
    }
    return newSet
  }

  intersection(otherSet) {
    let p = this.item.head
    let newSet = new LinkedSet()
    while(p !== null){
      let q = otherSet.item.head
      while(q !== null){
        if(p.data === q.data){
          newSet.addElement(q.data)
        }
        q = q.next
      }
      p = p.next
    }
    return newSet
  }

  isSubsetOf(otherSet){
    if(this.size() > otherSet.size()) return false
    let p = this.item.head
    while(p !== null){
      if(!(otherSet.has(p.data))){
        return false
      }
      p = p.next
    }
    return true
  }

  difference(otherSet){
    let newSet  = new LinkedSet()
    let p = otherSet.item.head
    while(p !== null){
      if(!(this.has(p.data))){
        newSet.addElement(p.data)
      }
      p = p.next
    }
    return newSet
  }
}

