import React from "react";
import {Toast} from "react-bootstrap";

export function Message({toggle}) {
  return (
    <Toast onClose={() => toggle(false)}>
      <Toast.Header>
        <strong className="mr-auto">You loose</strong>
        <small>just now</small>
      </Toast.Header>
      <Toast.body>
        Your score was XXX!
      </Toast.body>
    </Toast>
  )
}