class LinkedList {
  constructor() {
    this.head = null
  }

  clear() {
    this.head = null
  }

  isEmpty() {
    return this.head === null
  }

  addAtHead(value) {
    const newNode = new LinkListNode(value)
    if (this.head === null) {
      this.head = newNode
      return
    }
    newNode.next = this.head
    this.head = newNode
    return
  }

  addAtTail(value) {
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
    if (this.isEmpty()) return
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

  addAtPosition(value, index) {
    const newNode = new LinkListNode(value)
    if (this.isEmpty()) return
    if (index >= this.length()) return
    if (index === 0) return this.addAtHead(newNode)
    let p = this.head
    for (let i = 1; i < list1.length(); i++) {
      if (index === i) {
        break
      } else {
        p = p.next
      }
    }
    console.log(p);
    newNode.next = p.next
    p.next = newNode
    return
  }

  removeAtHead() {
    if (this.isEmpty()) return
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    this.head = this.head.next
  }

  removeAtTail() {
    if (this.isEmpty()) return
    if (this.head.next === null) {
      this.head = null;
      return;
    }
    let p = this.head
    while (p.next.next !== null) {
      p = p.next
    }
    p.next = p.next.next
  }

  removeByValue(value) {
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

  removeAtIndex(index) {
    if (this.isEmpty()) return
    if (index >= this.length() || index < 0) return
    if (index === 0) {
      this.removeAtHead()
    }
    let i = 0
    let p = this.head
    while (i < index - 1 && p !== null) {
      p = p.next
      i += 1
    }
    console.log(p);
    let q = p.next
    p.next = q.next
    return
  }

  searchData(value) {
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

  searchIndex(index) {
    if (this.isEmpty()) return
    if (index >= this.length() || index < 0) return false
    let p = this.head
    let i = 0
    while (p !== null && i < index) {
      p = p.next
      i += 1
    }
    return p
  }

  updateData(value, nodeData) {
    const node = this.searchData(nodeData)
    if (node) {
      node.data = value
    } else {
      return false
    }
  }

  updateIndex(value, index) {
    const node = this.searchIndex(index)
    console.log(node, index);
    if (node) {
      node.data = value
    } else {
      return false
    }
  }
  printList(){
    if(this.isEmpty()) return
    let p = this.head
    let st = ''
    while(p !== null){
      st += p.data
      st+=`[${this.indexOf(p.data)}]`
      if(p.next !== null){
        st += '->'
      }
      p = p.next
    }
    console.log(st);
    return
  }
}

