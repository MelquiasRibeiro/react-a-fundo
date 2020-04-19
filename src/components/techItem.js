import React from 'react'

export default function TechItem({tech, onDelete}) {
  return (
      <li>
        {tech}
        <button type="button" onClick={onDelete}>X</button>
      </li>
  )
}