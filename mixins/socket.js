import socket from '~/services/socket.io.js'

const limit = 20

const socketMixin = {
  data () {
    return {
      events: [],
      count: 0,

      skip: 0,
      limit
    }
  },

  created () {
    socket.on('NEW_EVENT', (event) => {
      this.count += 1
      if (this.skip === 0) {
        if (this.events.length === this.limit) { this.events.pop() }
        this.events.unshift(event)
      }
    })
  }
}

export default socketMixin
