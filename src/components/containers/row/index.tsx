import { ReactElement } from 'react'
import './style.css'
/**
 * Coluna que centraliza itens no centro.
 * @param children
 * @param others
 * @constructor
 */
export function Row({
  children,
  style,
}: {
  children: ReactElement
  style?: object
}) {
  return (
    <div className="row" style={style}>
      {children}
    </div>
  )
}
