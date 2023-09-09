import { useContext } from "react"

import { Context } from "../Store/Context"
import "./MenuButton.scss"

export default function MenuButton () {

  const style = "child"
  const { isMenuBtnClicked, setIsMenuBtnClicked } = useContext(Context)

  const handleToggleMenu = () => {
    console.log("state of MenuButtonClicked" ,isMenuBtnClicked);
    setIsMenuBtnClicked(!isMenuBtnClicked)
  }

  return (
      <div 
        className={
          `${isMenuBtnClicked 
            ? "menuBtnWrapper isMenuBtnClicked" 
            : "menuBtnWrapper"
          }`
        } 
        onClick={handleToggleMenu}
      >
        <div className={style}></div>
        <div className={style}></div>
        <div className={style}></div>
      </div>
  )
}