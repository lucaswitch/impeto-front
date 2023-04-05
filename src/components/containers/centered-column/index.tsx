import { ReactElement } from 'react'
import './style.css'
/**
 * Coluna que centraliza itens no centro.
 * @param children
 * @param others
 * @constructor
 */
export function CenteredColumn({
  children,
  style,
}: {
  children: ReactElement
  style?: object
}) {
  return (
    <div className="centered-column" style={style}>
      {children}
    </div>
  )
}
