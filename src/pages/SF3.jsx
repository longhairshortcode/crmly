import style from "./SF3.module.css"

function SF3() {
  return (
    <div className={style.componentContainer}>
      <div className={style.topParent}>
        <div className={style.topChild1}>1</div>
        <div className={style.topChild2}>2</div>
      </div>
      <div className={style.parentContainer}>
        <div className={style.child1}>1</div>
        <div className={style.child2}>2</div>
        <div className={style.child3}>3</div>
        <div className={style.child4}>4</div>
        <div className={style.child5}>5</div>
      </div>
  </div>
  )
}

export default SF3
