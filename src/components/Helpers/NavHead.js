import React from "react"

import * as styles from "./NavHead.module.css"

const NavHead = props => {
  return <div className={styles.headBkg}>{props.children}</div>
}
export default NavHead
