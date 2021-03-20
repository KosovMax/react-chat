import React, { Component } from 'react'

export default class Send extends Component {
  render() {
    const { onChange, onSend, value } = this.props
    return (
      <form className="input-group" onSubmit={onSend}>
        <input className="form-control" value={value} onChange={onChange} />
        <button className="btn btn-primary" type="submit">
          Отправить
        </button>
      </form>
    )
  }
}
